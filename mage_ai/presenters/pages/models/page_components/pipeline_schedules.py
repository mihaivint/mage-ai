import asyncio
from typing import Dict

from mage_ai.api.constants import AttributeOperationType
from mage_ai.api.errors import ApiError
from mage_ai.api.operations.constants import OperationType
from mage_ai.api.resources.PipelineScheduleResource import PipelineScheduleResource
from mage_ai.data_preparation.models.pipeline import Pipeline
from mage_ai.data_preparation.models.pipelines.interactions import PipelineInteractions
from mage_ai.data_preparation.models.project import Project
from mage_ai.data_preparation.models.project.constants import FeatureUUID
from mage_ai.orchestration.db.models.oauth import User
from mage_ai.presenters.pages.models.base import PageComponent
from mage_ai.presenters.pages.models.constants import ComponentCategory, ResourceType


class BaseComponent(PageComponent):
    resource = ResourceType.PIPELINE_SCHEDULE
    version = 1


class CreateWithInteractionsComponent(BaseComponent):
    category = ComponentCategory.BUTTON
    operation = OperationType.CREATE
    uuid_from_name = True

    @classmethod
    async def disabled(self, current_user: User = None, **kwargs) -> bool:
        async def __validate_pipeline_interactions_permissions(
            pipeline: Pipeline,
            current_user=current_user,
        ) -> bool:
            return await PipelineInteractions(pipeline).filter_for_permissions(current_user)

        pipelines = kwargs.get('pipelines') or []

        if pipelines and len(pipelines) >= 1:
            if not Project(pipelines[0].repo_config).is_feature_enabled(FeatureUUID.INTERACTIONS):
                return True

            results = await asyncio.gather(
                *[__validate_pipeline_interactions_permissions(
                    pipeline,
                ) for pipeline in pipelines]
            )

            return not all(results)

        return True


class EditComponent(BaseComponent):
    category = ComponentCategory.FORM
    operation = OperationType.UPDATE
    uuid_from_name = True

    @classmethod
    async def metadata(self, current_user: User = None, **kwargs) -> Dict:
        mapping = {}

        pipeline_schedules = kwargs.get('pipeline_schedules') or []
        for pipeline_schedule in pipeline_schedules:
            resource = PipelineScheduleResource(
                pipeline_schedule,
                current_user,
                api_operation_action=OperationType.UPDATE,
            )
            policy = resource.policy_class()(resource, current_user)
            write_attributes = \
                (policy.write_rules.get(policy.__class__.__name__) or {}).keys()

            for write_attribute in write_attributes:
                try:
                    await policy.authorize_attribute(
                        AttributeOperationType.WRITE,
                        write_attribute,
                        api_operation_action=OperationType.UPDATE,
                    )
                    mapping[write_attribute] = True
                except ApiError:
                    mapping[write_attribute] = False

        return mapping
