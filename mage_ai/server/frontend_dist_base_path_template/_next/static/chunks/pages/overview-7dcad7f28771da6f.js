(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1709],{52749:function(e,n,t){"use strict";var r=t(82394),i=t(82684),o=t(71180),c=t(55485),u=t(93369),a=t(7267),l=t(38276),d=t(30160),s=t(35576),p=t(17488),f=t(72473),h=t(4015),b=t(70515),m=t(81728),g=t(28598);function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n,t,r,v,x=e.createPipeline,y=e.isLoading,O=e.onClose,Z=(0,i.useRef)(null),w=(0,i.useState)(!1),P=w[0],_=w[1],C=(0,i.useState)({name:(0,m.Y6)()}),I=C[0],k=C[1];return(0,i.useEffect)((function(){var e;null===Z||void 0===Z||null===(e=Z.current)||void 0===e||e.focus()}),[]),(0,g.jsxs)(h.Nk,{children:[(0,g.jsx)(h.I5,{children:(0,g.jsx)(c.ZP,{alignItems:"center",justifyContent:"center",children:(0,g.jsx)(f.AISparkle,{size:5*b.iI,warning:!0})})}),(0,g.jsx)(h.gI,{children:(0,g.jsxs)(l.Z,{py:1,children:[(0,g.jsx)(l.Z,{mb:1,children:(0,g.jsx)(d.ZP,{default:!0,children:"New pipeline"})}),(0,g.jsx)(d.ZP,{textOverflow:!0,children:"Using AI"})]})}),(0,g.jsxs)(h.gI,{children:[(0,g.jsx)(d.ZP,{default:!0,children:"Name"}),(0,g.jsx)(p.Z,{alignRight:!0,noBackground:!0,noBorder:!0,onChange:function(e){return k((function(n){return j(j({},n),{},{name:e.target.value})}))},paddingVertical:b.iI,placeholder:"Enter pipeline name...",value:(null===I||void 0===I?void 0:I.name)||""})]}),(0,g.jsx)(h.gI,{children:(0,g.jsxs)(c.ZP,{flexDirection:"column",fullWidth:!0,children:[(0,g.jsx)(l.Z,{mb:2,pt:1,children:(0,g.jsx)(d.ZP,{default:!0,children:"Describe what the pipeline should do"})}),(0,g.jsxs)(l.Z,{pb:1,pr:b.cd,children:[(0,g.jsx)(s.Z,{fullWidth:!0,onChange:function(e){return k((function(n){return j(j({},n),{},{llm:{request:{pipeline_description:e.target.value},use_case:a.z.GENERATE_PIPELINE_WITH_DESCRIPTION}})}))},placeholder:"Type the pipeline purpose...",ref:Z,rows:8,value:(null===I||void 0===I||null===(n=I.llm)||void 0===n||null===(t=n.request)||void 0===t?void 0:t.pipeline_description)||""}),(y||P)&&(0,g.jsx)(l.Z,{mt:1,children:(0,g.jsx)(d.ZP,{warning:!0,children:"Pipeline is being generated using AI based on your description above..."})})]})]})}),(0,g.jsx)(h.$b,{children:(0,g.jsxs)(c.ZP,{fullWidth:!0,children:[(0,g.jsx)(u.ZP,{bold:!0,centerText:!0,disabled:!(null!==I&&void 0!==I&&I.name)||!(null!==I&&void 0!==I&&null!==(r=I.llm)&&void 0!==r&&null!==(v=r.request)&&void 0!==v&&v.pipeline_description),loading:y||P,onClick:function(){_(!0),x({pipeline:I}).then((function(){return _(!1)}))},primary:!0,tabIndex:0,uuid:"AIControlPanel/CreatePipeline",children:"Create pipeline"}),O&&(0,g.jsx)(l.Z,{ml:1,children:(0,g.jsx)(o.ZP,{onClick:O,tabIndex:0,children:"Cancel"})})]})})]})}},94629:function(e,n,t){"use strict";t.d(n,{Z:function(){return Z}});var r=t(82394),i=t(21831),o=t(82684),c=t(50724),u=t(1402),a=t(97618),l=t(70613),d=t(31557),s=t(68899),p=t(28598);function f(e,n){var t=e.children,r=e.noPadding;return(0,p.jsx)(s.HS,{noPadding:r,ref:n,children:t})}var h=o.forwardRef(f),b=t(62547),m=t(82571),g=t(77417),v=t(46684),j=t(75375);function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?x(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function O(e,n){e.addProjectBreadcrumbToCustomBreadcrumbs;var t=e.after,r=e.afterHeader,o=e.afterHidden,f=e.afterWidth,x=e.afterWidthOverride,O=e.appendBreadcrumbs,Z=e.before,w=e.beforeHeader,P=e.beforeWidth,_=e.breadcrumbs,C=e.children,I=e.contained,k=e.errors,T=e.headerMenuItems,E=e.headerOffset,A=e.hideAfterCompletely,D=e.mainContainerHeader,N=e.navigationItems,S=e.setAfterHidden,M=e.setAfterWidth,B=e.setBeforeWidth,R=e.setErrors,H=e.subheaderChildren,L=e.subheaderNoPadding,Y=e.title,W=e.uuid,F=(0,j.Z)(W,{setWidthAfter:M,setWidthBefore:B,widthAfter:f,widthBefore:P,widthOverrideAfter:x}),U=F.mainContainerRef,q=F.mousedownActiveAfter,V=F.mousedownActiveBefore,z=F.setMousedownActiveAfter,G=F.setMousedownActiveBefore,X=F.setWidthAfter,J=F.setWidthBefore,K=F.widthAfter,$=F.widthBefore,Q=(0,g.Z)().project,ee=[];return _&&ee.push.apply(ee,(0,i.Z)(_)),null!==_&&void 0!==_&&_.length&&!O||!Q||null!==_&&void 0!==_&&_.length||ee.unshift({bold:!O,label:function(){return Y}}),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l.Z,{title:Y}),(0,p.jsx)(d.Z,{breadcrumbs:ee,menuItems:T}),(0,p.jsxs)(s.Nk,{ref:n,children:[0!==(null===N||void 0===N?void 0:N.length)&&(0,p.jsx)(s.lm,{showMore:!0,children:(0,p.jsx)(m.Z,{navigationItems:N,showMore:!0})}),(0,p.jsx)(a.Z,{flex:1,flexDirection:"column",children:(0,p.jsxs)(b.Z,{after:t,afterHeader:r,afterHeightOffset:v.Mz,afterHidden:o,afterMousedownActive:q,afterWidth:K,before:Z,beforeHeader:w,beforeHeightOffset:v.Mz,beforeMousedownActive:V,beforeWidth:Z?$:s.k1,contained:I,headerOffset:E,hideAfterCompletely:!t||A,leftOffset:Z?s.k1:null,mainContainerHeader:D,mainContainerRef:U,setAfterHidden:S,setAfterMousedownActive:z,setAfterWidth:X,setBeforeMousedownActive:G,setBeforeWidth:J,children:[H&&(0,p.jsx)(h,{noPadding:L,children:H}),C]})})]}),k&&(0,p.jsx)(c.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===R||void 0===R?void 0:R(null)},children:(0,p.jsx)(u.Z,y(y({},k),{},{onClose:function(){return null===R||void 0===R?void 0:R(null)}}))})]})}var Z=o.forwardRef(O)},65458:function(e,n,t){"use strict";t.d(n,{d:function(){return d}});var r=t(13507),i=t(72473),o=t(57653),c=t(70515),u=t(81728),a=t(28598),l=1.5*c.iI,d=function(e,n){var t=[{beforeIcon:(0,a.jsx)(i.BatchPipeline,{}),label:function(){return"Standard (batch)"},onClick:function(){return e({pipeline:{name:(0,u.Y6)()}})},uuid:"Pipelines/NewPipelineMenu/standard"},{beforeIcon:(0,a.jsx)(i.DataIntegrationPipeline,{}),label:function(){return"Data integration"},onClick:function(){return e({pipeline:{name:(0,u.Y6)(),type:o.qL.INTEGRATION}})},uuid:"Pipelines/NewPipelineMenu/integration"},{beforeIcon:(0,a.jsx)(r.Z,{size:l}),label:function(){return"Streaming"},onClick:function(){return e({pipeline:{name:(0,u.Y6)(),type:o.qL.STREAMING}})},uuid:"Pipelines/NewPipelineMenu/streaming"}];return null!==n&&void 0!==n&&n.showBrowseTemplates&&t.push({beforeIcon:(0,a.jsx)(i.TemplateShapes,{}),label:function(){return"From a template"},onClick:function(){var e;return null===n||void 0===n||null===(e=n.showBrowseTemplates)||void 0===e?void 0:e.call(n)},uuid:"Pipelines/NewPipelineMenu/custom_template"}),null!==n&&void 0!==n&&n.showAIModal&&t.push({beforeIcon:(0,a.jsx)(i.AISparkle,{}),label:function(){return"Using AI (beta)"},onClick:function(){var e;return null===n||void 0===n||null===(e=n.showAIModal)||void 0===e?void 0:e.call(n)},uuid:"Pipelines/NewPipelineMenu/AI_modal"}),t}},81066:function(e,n,t){"use strict";t.d(n,{B:function(){return p}});var r=t(82394),i=t(46732),o=t(93369),c=t(72473),u=t(8059),a=t(70515),l=t(28598);function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var p={bold:!0,greyBorder:!0,paddingBottom:9,paddingTop:9};n.Z=function(e){var n=e.addButtonMenuOpen,t=e.addButtonMenuRef,r=e.isLoading,d=e.label,f=e.menuItems,h=e.onClick,b=e.onClickCallback;return(0,l.jsx)(i.Z,{disableKeyboardShortcuts:!0,items:f,onClickCallback:b,onClickOutside:b,open:n,parentRef:t,roundedStyle:!0,topOffset:1,uuid:"Table/Toolbar/NewItemMenu",children:(0,l.jsx)(o.ZP,s(s({},p),{},{background:u.eW,beforeElement:(0,l.jsx)(c.Add,{size:2.5*a.iI}),loading:r,onClick:function(e){e.preventDefault(),null===h||void 0===h||h()},uuid:"shared/AddButton/index",children:d}))})}},46568:function(e,n,t){"use strict";var r=t(82394),i=t(26304),o=(t(82684),t(33591)),c=t(28598),u=["children","fullHeight","gutter","style"];function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.children,t=e.fullHeight,r=e.gutter,a=e.style,d=void 0===a?{}:a,s=(0,i.Z)(e,u),p=l({},d);return r&&(p.paddingLeft=r,p.paddingRight=p.paddingLeft),t&&(p.height="100%"),(0,c.jsx)(o.Col,l(l({},s),{},{style:p,children:n}))}},82682:function(e,n,t){"use strict";var r=t(82394),i=t(26304),o=t(82684),c=t(33591),u=t(28598),a=["children","fullHeight","gutter","justifyContent","style"];function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.children,t=e.fullHeight,r=e.gutter,l=e.justifyContent,s=e.style,p=void 0===s?{}:s,f=(0,i.Z)(e,a),h=d({},p);return r&&(h.marginLeft=-1*r,h.marginRight=h.marginLeft),t&&(h.height="100%"),(0,u.jsx)(c.Row,d(d({},f),{},{justifyContent:l,style:h,children:o.Children.map(n,(function(e,n){return e&&o.cloneElement(e,{gutter:r,key:n})}))}))}},94542:function(e,n,t){"use strict";t.d(n,{J:function(){return o},X:function(){return c}});var r=t(46568),i=t(82682),o=r.Z,c=i.Z},29241:function(e,n,t){"use strict";var r=t(25976),i=t(44897),o=r.default.div.withConfig({displayName:"PageSectionHeader",componentId:"sc-1wznrcv-0"})(["left:0;position:sticky;top:0;width:100%;z-index:3;",""],(function(e){return"\n    background-color: ".concat(e.backgroundColor||(e.theme.background||i.Z.background).page,";\n    border-bottom: 1px solid ").concat((e.theme.borders||i.Z.borders).medium,";\n  ")}));n.Z=o},96348:function(e,n,t){"use strict";t.d(n,{g:function(){return g},Z:function(){return v}});var r=t(82684),i=t(25976),o=t(44897),c=t(42631),u=t(47041),a=t(70515),l=1.5*a.iI,d=1.5*a.iI,s=i.default.div.withConfig({displayName:"indexstyle__TableStyle",componentId:"sc-13p7y8j-0"})(["border-radius:","px;overflow:hidden;width:100%;"," "," "," ",""],c.n_,(function(e){return e.width&&"\n    width: ".concat(e.width,"px;\n  ")}),(function(e){return"\n    background-color: ".concat((e.theme||o.Z).background.page,";\n    border: ").concat(c.YF,"px ").concat(c.M8," ").concat((e.theme||o.Z).interactive.defaultBorder,";\n    box-shadow: ").concat((e.theme||o.Z).shadow.frame,";\n  ")}),(function(e){return e.noBackground&&"\n    background-color: transparent;\n  "}),(function(e){return e.noBoxShadow&&"\n    box-shadow: none;\n  "})),p=i.default.div.withConfig({displayName:"indexstyle__RowContainerStyle",componentId:"sc-13p7y8j-1"})(["overflow:auto;border-bottom-left-radius:","px;border-bottom-right-radius:","px;"," "," "," ",""],c.n_,c.n_,u.w5,(function(e){return e.maxHeight>0&&"\n    max-height: ".concat(e.maxHeight,"px;\n  ")}),(function(e){return e.minHeight>0&&"\n    min-height: ".concat(e.minHeight,"px;\n  ")}),(function(e){return e.scrollable&&"\n    margin-bottom: ".concat(a.iI,"px;\n    overflow-y: auto;\n    padding-top: ").concat(3,"px;\n    padding-left: ").concat(3,"px;\n    padding-right: ").concat(3,"px;\n  ")})),f=i.default.div.withConfig({displayName:"indexstyle__HeaderStyle",componentId:"sc-13p7y8j-2"})(["border-top-left-radius:","px;border-top-right-radius:","px;padding:","px ","px;",""],c.n_,c.n_,l,2*a.iI,(function(e){return"\n    border-bottom: ".concat(c.YF,"px ").concat(c.M8," ").concat((e.theme.interactive||o.Z.interactive).defaultBorder,";\n  ")})),h=i.default.div.withConfig({displayName:"indexstyle__RowStyle",componentId:"sc-13p7y8j-3"})(["padding:","px ","px;"," "," "," "," "," ",""],d,2*a.iI,(function(e){return"\n    border-bottom: ".concat(c.YF,"px ").concat(c.M8," ").concat((e.theme||o.Z).borders.medium2,";\n  ")}),(function(e){return e.sameColorBorders&&"\n    border-bottom-color: ".concat((e.theme||o.Z).interactive.defaultBorder,";\n  ")}),(function(e){return e.noHorizontalPadding&&"\n    padding-left: 0;\n    padding-right: 0;\n  "}),(function(e){return e.condensed&&"\n    padding-top: ".concat(9,"px;\n    padding-bottom: ").concat(9,"px;\n  ")}),(function(e){return e.secondary&&"\n    background-color: ".concat((e.theme.background||o.Z.background).row2,";\n  ")}),(function(e){return e.last&&e.noBorder&&"\n    border-bottom-left-radius: ".concat(c.n_,"px;\n    border-bottom-right-radius: ").concat(c.n_,"px;\n    border-bottom: none;\n  ")})),b=i.default.div.withConfig({displayName:"indexstyle__FooterStyle",componentId:"sc-13p7y8j-4"})(["border-bottom-left-radius:","px;border-bottom-right-radius:","px;padding:","px ","px;",""],c.n_,c.n_,l,2*a.iI,(function(e){return"\n    border-top: ".concat(c.YF,"px ").concat(c.M8," ").concat((e.theme||o.Z).borders.medium2,";\n  ")})),m=t(28598),g=h;var v=function(e){var n=e.alternating,t=e.children,i=e.footer,o=e.header,c=e.maxHeight,u=e.minHeight,a=e.noBackground,l=e.noBoxShadow,d=e.sameColorBorders,h=e.scrollable,g=e.width,v=[].concat(t).filter((function(e){return null!==e}));return(0,m.jsxs)(s,{noBackground:a,noBoxShadow:l,width:g,children:[o&&(0,m.jsx)(f,{children:o}),(0,m.jsx)(p,{maxHeight:c,minHeight:u,scrollable:h,children:r.Children.map(v,(function(e,t){return e&&r.cloneElement(e,{last:t===v.length-1,sameColorBorders:d,secondary:n&&t%2===1})}))}),i&&(0,m.jsx)(b,{children:i})]})}},17380:function(e,n,t){"use strict";t.d(n,{i:function(){return d}});t(82684);var r=t(25976),i=(t(97618),t(55485),t(48670),t(38276),t(47329)),o=t.n(i);o().node,o().node,o().node.isRequired,o().bool,o().string.isRequired;t(30160);var c=t(70987),u=t(95363),a=t(70515),l=t(42631),d=(t(28598),"tab");r.default.div.withConfig({displayName:"Tabs__TabHeaderContainerStyle",componentId:"sc-rojme5-0"})(["",""],(function(e){return e.containerWidthPercentage&&"\n    width: ".concat(e.containerWidthPercentage,"%;\n  ")})),r.default.div.withConfig({displayName:"Tabs__TabHeader",componentId:"sc-rojme5-1"})(["border-top-left-radius:","px;border-top-right-radius:","px;margin-right:","px;position:relative;z-index:2;"," "," ",""],l.BG,l.BG,6*a.iI,(function(e){return e.noBottomBorder&&"\n    border-bottom: none;\n  "}),(function(e){return e.active&&"\n    border-bottom: ".concat(a.cd,"px solid;\n    border-color: ").concat((e.theme.interactive||c.Z.interactive).linkPrimary,";\n  ")}),(function(e){return e.fullWidth&&"\n    width: 100%;\n  "})),r.default.div.withConfig({displayName:"Tabs__LinkStyle",componentId:"sc-rojme5-2"})(["align-items:center;display:flex;"," "," ",""],(function(e){return e.bold&&"\n    font-family: ".concat(u.nF,";\n  ")}),(function(e){return e.fullWidth&&"\n    justify-content: center;\n  "}),(function(e){return!e.disabled&&"\n    &:hover {\n      path {\n        fill: ".concat((e.theme.content||c.Z.interactive).linkPrimary," !important;\n      }\n    }\n  ")}))},98941:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return We}});var r=t(77837),i=t(82394),o=t(75582),c=t(38860),u=t.n(c),a=t(69864),l=t(82684),d=t(34376),s=t(92083),p=t.n(s),f=t(52749),h=t(81066),b=t(53998),m=t(39440),g=t(60523),v=t(90299),j=t(94629),x=t(55485),y=t(85854),O=t(48670),Z=t(97618),w=t(38276),P=t(30160),_=t(25976),C=t(44897),I=t(42631),k=t(70515),T=12.5*k.iI,E=8*k.iI,A=5*k.iI,D=3*k.iI,N=_.default.div.withConfig({displayName:"indexstyle__TileContainerStyle",componentId:"sc-c3nc3q-0"})(["padding:","px;border-radius:","px;height:","px;width:","px;"," ",""],2.5*k.iI,I.TR,T,T,(function(e){return"\n    background-color: ".concat((e.theme||C.Z).background.chartBlock,";\n  ")}),(function(e){return e.compact&&"\n    height: ".concat(E,"px;\n    width: ").concat(E,"px;\n  ")})),S=t(28598);var M=function(e){var n=e.Icon,t=e.compact,r=e.label;return(0,S.jsx)(N,{compact:t,children:(0,S.jsxs)(x.ZP,{alignItems:"center",flexDirection:"column",justifyContent:"center",children:[(0,S.jsx)(n,{size:t?D:A}),(0,S.jsx)(w.Z,{mb:"4px"}),(0,S.jsx)(P.ZP,{bold:!0,small:t,children:r})]})})},B=t(12468),R=_.default.div.withConfig({displayName:"indexstyle__MetricsSummaryContainerStyle",componentId:"sc-nu65g1-0"})(["width:100%;padding:","px;border-radius:","px;",""],2*k.iI,I.n_,(function(e){return"\n    border: ".concat(I.YF,"px ").concat(I.M8," ").concat((e.theme||C.Z).interactive.defaultBorder,";\n    box-shadow: ").concat((e.theme||C.Z).shadow.frame,";\n  ")})),H=_.default.div.withConfig({displayName:"indexstyle__MetricContainerStyle",componentId:"sc-nu65g1-1"})(["display:flex;flex:1;align-items:center;justify-content:space-between;",""],(function(e){return e.includeLeftBorder&&"\n    @media (min-width: 1200px) {\n      padding-left: 24px;\n      border-left: ".concat(I.YF,"px ").concat(I.M8," ").concat((e.theme||C.Z).interactive.defaultBorder,";\n    }\n  ")})),L=t(57653),Y=t(94542),W=t(41143),F={muted:!0,size:t(72191)._k,widthFitContent:!0},U=t(81728),q=t(48277),V=t(79221),z=t(70320),G=t(86735);function X(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function J(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?X(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):X(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var K=function(e){var n=e.pipelineRunCountByPipelineType,t=(0,z.qB)(),r=(0,l.useMemo)((function(){if(!n)return[];var e=JSON.parse(JSON.stringify(n)),t=e[L.qL.PYTHON]||{};return Object.entries(e[L.qL.PYSPARK]||{}).forEach((function(e){var n=(0,o.Z)(e,2),r=n[0],i=n[1];t[r]?t[r]+=i:t[r]=i})),e[L.qL.PYTHON]=t,delete e[L.qL.PYSPARK],(0,G.mr)(Object.entries(e).filter((function(e){var n=(0,o.Z)(e,2),t=(n[0],n[1]);return 0!==Object.keys(t).length})))}),[n]),i=(0,l.useMemo)((function(){return t?(0,S.jsx)(w.Z,{ml:"4px",children:(0,S.jsx)(B.Z,J(J({},F),{},{label:"Please note that these metrics are based on UTC time."}))}):null}),[t]);return(0,S.jsxs)(R,{children:[(0,S.jsxs)(x.ZP,{alignItems:"center",children:[(0,S.jsx)(P.ZP,{bold:!0,large:!0,children:"Pipeline run metrics"}),i]}),(0,S.jsx)(w.Z,{mb:2}),(0,S.jsx)(Y.X,{style:{gap:"16px"},children:r.map((function(e,n){var t=(0,o.Z)(e,2),i=t[0],c=t[1];return(0,S.jsxs)(H,{includeLeftBorder:0!==n,children:[(0,S.jsx)(M,{Icon:L.Mj[i],label:L.G7[i]}),(0,G.mr)(Object.entries(c)).map((function(e,n){var t=(0,o.Z)(e,2),r=t[0],i=t[1];return(0,S.jsx)(w.Z,{px:1,children:(0,S.jsxs)(Z.Z,{flexDirection:"column",children:[(0,S.jsx)(P.ZP,{children:(0,U.kC)(r)}),(0,S.jsx)(P.ZP,{bold:!0,danger:r===W.V.FAILED&&i>0,title:(0,q.uf)(i),xlarge:!0,children:(0,V.P5)(i,{maxFractionDigits:1,minAmount:1e3})})]})},"".concat(r,"_").concat(n))})),(0,S.jsx)(w.Z,{pr:n!==r.length-1?2:0})]},"".concat(i,"_metric"))}))})]})},$=t(29241),Q=t(65956),ee=t(55729),ne=t(93808),te=t(82359),re=t(4190),ie=t(12691),oe=t.n(ie),ce=t(71180),ue=t(96348),ae=t(68899),le=t(17380),de=t(3917),se=t(69419);function pe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function fe(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?pe(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):pe(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var he=40*k.iI,be=40*k.iI;var me=function(e){var n=e.pipelineType,t=e.pipelineRuns,r=void 0===t?[]:t,i=(0,d.useRouter)(),o=(0,se.iV)(),c=(null===o||void 0===o?void 0:o[le.i])||de.vk.TODAY,u=(0,z.qB)(),a=n===L.LM,s=a?L.LM:L.G7[n],p=L.Mj[n],f=r.length,h=0===f?"":"(".concat(f,")"),b=(0,l.useMemo)((function(){return u?(0,S.jsx)(w.Z,{ml:"4px",children:(0,S.jsx)(B.Z,fe(fe({},F),{},{label:"The pipeline run failures are displayed in local time.",maxWidth:24*k.iI,widthFitContent:!1}))}):null}),[u]);return(0,S.jsx)(ue.Z,{footer:(0,S.jsx)(x.ZP,{alignItems:"center",justifyContent:"center",children:(0,S.jsx)(oe(),{as:"/pipeline-runs?status=failed",href:"/pipeline-runs",passHref:!0,children:(0,S.jsx)(O.Z,{sameColorAsText:!0,children:"View more"})})}),header:(0,S.jsxs)(x.ZP,{alignItems:"center",children:[(0,S.jsx)(ce.ZP,{beforeIcon:(0,S.jsx)(p,{size:2.5*k.iI}),compact:!0,notClickable:!0,children:(0,U.kC)(s)}),(0,S.jsx)(w.Z,{ml:2}),(0,S.jsxs)(P.ZP,{bold:!0,children:["Latest ",a?"":"".concat((0,U.wX)(s)," "),"pipeline run failures ",h]}),b]}),maxHeight:he,minHeight:be,children:0===f?(0,S.jsx)(x.ZP,{alignItems:"center",fullWidth:!0,justifyContent:"center",children:(0,S.jsx)(w.Z,{px:5,py:10,children:(0,S.jsxs)(x.ZP,{alignItems:"center",flexDirection:"column",children:[(0,S.jsx)(ae.Hn,{imageUrl:"".concat(i.basePath,"/images/blocks/grey_block.webp")}),(0,S.jsx)(w.Z,{mb:3}),(0,S.jsxs)(P.ZP,{large:!0,children:["No ",a?"":"".concat((0,U.wX)(s)," "),"pipeline run failures for ",de.s8[c]]})]})})}):r.map((function(e){var n=e.created_at,t=e.id,r=e.pipeline_uuid;return(0,S.jsx)(ue.g,{children:(0,S.jsxs)(x.ZP,{alignItems:"center",children:[(0,S.jsx)(oe(),{as:"/pipelines/".concat(r),href:"/pipelines/[pipeline]",passHref:!0,children:(0,S.jsx)(O.Z,{monospace:!0,sameColorAsText:!0,small:!0,children:r})}),(0,S.jsx)(P.ZP,{monospace:!0,small:!0,children:"\xa0>\xa0"}),(0,S.jsx)(oe(),{as:"/pipelines/".concat(r,"/runs/").concat(t),href:"/pipelines/[pipeline]/runs/[run]",passHref:!0,children:(0,S.jsxs)(O.Z,{danger:!0,monospace:!0,sameColorAsText:!0,small:!0,children:["Run created on\xa0",u?(0,de.XG)(n,u):n]})})]})},"pipeline_run_".concat(t))}))})},ge=t(35686),ve=t(35058),je=t(64657),xe=t(44425),ye=t(75399),Oe=t(23780),Ze=t(46684),we=t(61556),Pe=t(32929),_e=t(72473),Ce={Icon:_e.Smiley,label:function(){return(0,U.kC)(de.s8[de.vk.TODAY])},uuid:de.vk.TODAY},Ie={Icon:_e.WeekDots,label:function(){return(0,U.kC)(de.s8[de.vk.WEEK])},uuid:de.vk.WEEK},ke={Icon:_e.CalendarRounded,label:function(){return(0,U.kC)(de.s8[de.vk.MONTH])},uuid:de.vk.MONTH},Te={Icon:_e.NavDashboard,label:function(){return"Dashboard"},uuid:"Dashboard"},Ee=[Ce,Ie,ke],Ae=t(24491),De=t(65458),Ne=t(15610),Se=t(72619),Me=t(89538);function Be(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Re(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Be(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Be(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var He={mt:2,mx:3},Le={refreshInterval:6e4,revalidateOnFocus:!1};function Ye(e){var n,t,r=e.tab,c=(0,l.useRef)(null),u=(0,l.useRef)(!1),s=(0,l.useRef)(null),Z=((0,se.iV)(),(0,d.useRouter)()),_=(0,l.useRef)(null),I=(0,l.useState)(Ee.find((function(e){return e.uuid===r}))||Ce),T=I[0],E=I[1],A=(0,l.useState)(!1),D=A[0],N=A[1],M=(0,l.useState)(null),R=M[0],H=M[1],Y=null===T||void 0===T?void 0:T.uuid,V=(0,l.useMemo)((function(){return Ee.concat(Te)}),[]),X=(0,l.useMemo)((function(){return(0,de.jV)(Y,{isoString:!0})}),[Y]),J=(0,l.useMemo)((function(){return{group_by_pipeline_type:1,start_time:X}}),[X]),ne=(0,l.useState)(),ie=ne[0],oe=ne[1],ce=(0,a.Db)((function(){var e,n;return null===(e=ge.ZP.monitor_stats)||void 0===e?void 0:e.detailAsync(we.h.PIPELINE_RUN_COUNT,J,{signal:null===c||void 0===c||null===(n=c.current)||void 0===n?void 0:n.signal})}),{onSuccess:function(e){return(0,Se.wD)(e,{callback:function(e){var n=e.monitor_stat.stats;oe(n)}})}}),ue=(0,o.Z)(ce,2),ae=ue[0],pe=ue[1].isLoading,fe=(0,l.useCallback)((function(e){var n;null!==(null===c||void 0===c?void 0:c.current)&&(null===c||void 0===c||null===(n=c.current)||void 0===n||n.abort());c.current=new AbortController,E((function(n){var t="function"===typeof e?e(n):e;return(null===n||void 0===n?void 0:n.uuid)!==(null===t||void 0===t?void 0:t.uuid)&&((0,Ne.u)((0,i.Z)({},le.i,null===t||void 0===t?void 0:t.uuid),{replaceParams:!0}),ae()),t}))}),[]);(0,l.useEffect)((function(){null!==u&&void 0!==u&&u.current||(u.current=!0,ae())}),[]);var he,be=ge.ZP.pipeline_runs.list({_limit:50,include_pipeline_type:1,"order_by[]":"created_at desc",start_timestamp:(0,de.A5)(X),status:W.V.FAILED},Re({},Le)).data,_e=(0,l.useMemo)((function(){return((null===be||void 0===be?void 0:be.pipeline_runs)||[]).filter((function(e){return null!==e.pipeline_type}))}),[null===be||void 0===be?void 0:be.pipeline_runs]),Ie=(0,l.useMemo)((function(){return(0,G.vM)(_e,(function(e){return e.pipeline_type}))}),[_e]),ke=Ie.integration,Be=void 0===ke?[]:ke,Ye=Ie.python,We=void 0===Ye?[]:Ye,Fe=Ie.streaming,Ue=void 0===Fe?[]:Fe,qe=(0,l.useMemo)((function(){return(0,de.Y_)(de.yD[Y]+1)}),[Y]),Ve=(0,l.useMemo)((function(){return(0,Ae.i)(ie,qe)}),[ie,qe]),ze=Ve.pipelineRunCountByPipelineType,Ge=Ve.totalPipelineRunCount,Xe=Ve.ungroupedPipelineRunData,Je=(0,l.useMemo)((function(){return(0,de.Ro)(de.yD[Y],{endDateOnly:Y===de.vk.TODAY})}),[Y]),Ke=(he=function(e){return Z.push("/pipelines/[pipeline]/edit","/pipelines/".concat(e,"/edit"))},(0,a.Db)(ge.ZP.pipelines.useCreate(),{onSuccess:function(e){return(0,Se.wD)(e,{callback:function(e){var n=e.pipeline.uuid;null===he||void 0===he||he(n)},onErrorCallback:function(e,n){return H({errors:n,response:e})}})}})),$e=(0,o.Z)(Ke,2),Qe=$e[0],en=$e[1].isLoading,nn=ge.ZP.projects.list(),tn=nn.data,rn=nn.mutate,on=(0,l.useMemo)((function(){var e;return null===tn||void 0===tn||null===(e=tn.projects)||void 0===e?void 0:e[0]}),[tn]),cn=(0,l.useMemo)((function(){var e;return(0,z.hY)(null===on||void 0===on||null===(e=on.features)||void 0===e?void 0:e[te.d.LOCAL_TIMEZONE])}),[null===on||void 0===on?void 0:on.features]),un=(0,Me.dd)((function(){return(0,S.jsx)(Oe.BC,{children:(0,S.jsx)(g.Z,{contained:!0,onClickCustomTemplate:function(e){Qe({pipeline:{custom_template_uuid:null===e||void 0===e?void 0:e.template_uuid,name:(0,U.Y6)()}}).then((function(){dn()}))},showBreadcrumbs:!0,tabs:[Pe.A2]})})}),{},[],{background:!0,uuid:"browse_templates"}),an=(0,o.Z)(un,2),ln=an[0],dn=an[1],sn=(0,Me.dd)((function(e){var n=e.cancelButtonText,t=(e.header,e.onCancel),r=e.onSaveSuccess;return(0,S.jsx)(Oe.BC,{children:(0,S.jsx)(ee.Z,{cancelButtonText:n,contained:!0,header:(0,S.jsx)(w.Z,{mb:k.HN,children:(0,S.jsxs)(Q.Z,{children:[(0,S.jsx)(P.ZP,{warning:!0,children:"You need to add an OpenAI API key to your project before you can generate pipelines using AI."}),(0,S.jsx)(w.Z,{mt:1,children:(0,S.jsxs)(P.ZP,{warning:!0,children:["Read ",(0,S.jsx)(O.Z,{href:"https://help.openai.com/en/articles/4936850-where-do-i-find-my-secret-api-key",openNewWindow:!0,children:"OpenAI\u2019s documentation"})," to get your API key."]})})]})}),onCancel:function(){null===t||void 0===t||t(),hn()},onSaveSuccess:function(e){rn(),hn(),null===r||void 0===r||r(e)}})})}),{},[rn],{background:!0,uuid:"configure_project"}),pn=(0,o.Z)(sn,2),fn=pn[0],hn=pn[1],bn=(0,Me.dd)((function(){return(0,S.jsx)(Oe.BC,{children:(0,S.jsx)(f.Z,{createPipeline:Qe,isLoading:en,onClose:vn})})}),{},[Qe,en],{background:!0,disableClickOutside:!0,disableCloseButton:!0,uuid:"AI_modal"}),mn=(0,o.Z)(bn,2),gn=mn[0],vn=mn[1],jn=(0,l.useMemo)((function(){return(0,De.d)(Qe,{showAIModal:function(){null!==on&&void 0!==on&&on.openai_api_key?gn():fn({onSaveSuccess:function(){gn()}})},showBrowseTemplates:ln})}),[Qe,on,gn,ln,fn]),xn=(0,l.useMemo)((function(){return(0,S.jsx)(h.Z,{addButtonMenuOpen:D,addButtonMenuRef:_,isLoading:en,label:"New pipeline",menuItems:jn,onClick:function(){return N((function(e){return!e}))},onClickCallback:function(){return N(!1)}})}),[D,en,jn]),yn=(0,l.useMemo)((function(){return cn?(0,S.jsx)(w.Z,{ml:"4px",children:(0,S.jsx)(B.Z,Re(Re({},F),{},{label:"Please note that these counts are based on UTC time."}))}):null}),[cn]),On=(0,l.useMemo)((function(){var e,n,t,r,o,c,u="Pipelines",a=(0,U.kE)("".concat(u,"_overview_dashboard_").concat((0,U.Lo)())),l="Trigger active status",d=(0,U.kE)("".concat(l,"_overview_dashboard_").concat((0,U.Lo)())),s="Pipeline run status",p=(0,U.kE)("".concat(s,"_overview_dashboard_").concat((0,U.Lo)())),f="Pipeline runs daily",h=(0,U.kE)("".concat(f,"_overview_dashboard_").concat((0,U.Lo)())),b="Completed pipeline runs daily",m=(0,U.kE)("".concat(b,"_overview_dashboard_").concat((0,U.Lo)())),g="Failed pipeline runs daily",v=(0,U.kE)("".concat(g,"_overview_dashboard_").concat((0,U.Lo)())),j="Running pipelines",x=(0,U.kE)("".concat(j,"_overview_dashboard_").concat((0,U.Lo)())),y={type:ye.XO.PIPELINE_SCHEDULES},O={type:ye.XO.PIPELINE_RUNS},Z={configuration:(e={},(0,i.Z)(e,ve.eN,["execution_date"]),(0,i.Z)(e,ve.bE,[{aggregation:ve.os.COUNT_DISTINCT,column:"id"}]),(0,i.Z)(e,ve.Yg,ve.aE.DAY),(0,i.Z)(e,"chart_type",ve.oV.TIME_SERIES_LINE_CHART),e),data_source:O,type:xe.tf.CHART};return{blocks:(c={},(0,i.Z)(c,a,{configuration:(n={},(0,i.Z)(n,ve.eN,["type"]),(0,i.Z)(n,ve.bE,[{aggregation:ve.os.COUNT_DISTINCT,column:"uuid"}]),(0,i.Z)(n,ve.$1,ve.MP.DESCENDING),(0,i.Z)(n,"chart_style",ve.JT.HORIZONTAL),(0,i.Z)(n,"chart_type",ve.oV.BAR_CHART),n),data_source:{type:ye.XO.PIPELINES},name:u,type:xe.tf.CHART,uuid:a}),(0,i.Z)(c,d,{configuration:(t={},(0,i.Z)(t,ve.eN,["status"]),(0,i.Z)(t,ve.bE,[{aggregation:ve.os.COUNT_DISTINCT,column:"id"}]),(0,i.Z)(t,ve.$1,ve.MP.DESCENDING),(0,i.Z)(t,"chart_type",ve.oV.BAR_CHART),t),data_source:y,name:l,type:xe.tf.CHART,uuid:d}),(0,i.Z)(c,p,{configuration:(r={},(0,i.Z)(r,ve.eN,["status"]),(0,i.Z)(r,ve.bE,[{aggregation:ve.os.COUNT_DISTINCT,column:"id"}]),(0,i.Z)(r,ve.$1,ve.MP.DESCENDING),(0,i.Z)(r,"chart_style",ve.JT.HORIZONTAL),(0,i.Z)(r,"chart_type",ve.oV.BAR_CHART),r),data_source:O,name:s,type:xe.tf.CHART,uuid:p}),(0,i.Z)(c,h,Re(Re({},Z),{},{name:f,uuid:h})),(0,i.Z)(c,m,Re(Re({},Z),{},{content:"\n@data_source\ndef d(df):\n    return df[df['status'] == '".concat(W.V.COMPLETED,"']\n"),name:b,uuid:m})),(0,i.Z)(c,v,Re(Re({},Z),{},{content:"\n@data_source\ndef d(df):\n    return df[df['status'] == '".concat(W.V.FAILED,"']\n"),name:g,uuid:v})),(0,i.Z)(c,x,{configuration:(o={},(0,i.Z)(o,ve.eN,["backfill_id","completed_at","created_at","execution_date","executor_type","id","pipeline_schedule_id","pipeline_uuid","started_at","status"]),(0,i.Z)(o,"chart_type",ve.oV.TABLE),o),content:"\n@data_source\ndef d(df):\n    return df[df['status'] == '".concat(W.V.RUNNING,"']\n"),data_source:O,name:j,type:xe.tf.CHART,uuid:x}),c),layout:[[{block_uuid:a,width:1},{block_uuid:d,width:1}],[{block_uuid:p,width:1},{block_uuid:h,width:2}],[{block_uuid:m,width:1},{block_uuid:v,width:1}],[{block_uuid:x,width:1}]]}}),[]);return(0,S.jsxs)(j.Z,{errors:R,setErrors:H,title:"Overview",uuid:"overview/index",children:[(0,S.jsx)($.Z,{backgroundColor:C.Z.background.panel,ref:s,children:(0,S.jsx)(w.Z,{py:2,children:(0,S.jsxs)(x.ZP,{alignItems:"center",children:[(0,S.jsx)(w.Z,{ml:3,children:xn}),(0,S.jsx)(v.Z,{onClickTab:function(e){var n=e.uuid;fe((function(){return Ee.find((function(e){return n===e.uuid}))}))},regularSizeText:!0,selectedTabUUID:Y,tabs:V})]})})}),Te.uuid===(null===T||void 0===T?void 0:T.uuid)&&(0,S.jsx)(m.Z,{leftOffset:9*k.iI,pageBlockLayoutTemplate:On,topOffset:Ze.Mz+(null===s||void 0===s||null===(n=s.current)||void 0===n||null===(t=n.getBoundingClientRect())||void 0===t?void 0:t.height),uuid:"overview/dashboard"}),Te.uuid!==(null===T||void 0===T?void 0:T.uuid)&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(w.Z,{mx:3,my:2,children:[(0,S.jsxs)(y.Z,{level:4,children:[Y===de.vk.TODAY&&"".concat((0,U.kC)(de.vk.TODAY)," (UTC): ").concat(Je),Y!==de.vk.TODAY&&"".concat((0,U.kC)(de.s8[Y])," (UTC): ").concat(Je)]}),(0,S.jsx)(w.Z,{mt:2,children:pe?(0,S.jsx)(w.Z,{mx:2,my:11,children:(0,S.jsx)(re.Z,{inverted:!0})}):(0,S.jsx)(K,{pipelineRunCountByPipelineType:ze})}),(0,S.jsxs)(w.Z,{mt:2,children:[(0,S.jsx)(w.Z,{ml:2,children:(0,S.jsxs)(x.ZP,{alignItems:"center",children:[(0,S.jsxs)(P.ZP,{bold:!0,large:!0,children:[pe?"--":(0,q.uf)(Ge)," total pipeline runs"]}),yn]})}),(0,S.jsx)(w.Z,{mt:1,children:(0,S.jsx)(b.Z,{backgroundColor:C.Z.background.panel,colors:je.NU,data:Xe,getXValue:function(e){return e.date},height:200,keys:je.hu,margin:{bottom:30,left:35,right:0,top:10},tooltipLeftOffset:je.CD,xLabelFormat:function(e){return p()(e).format("MMM DD")}})})]})]}),(0,S.jsx)(w.Z,Re(Re({},He),{},{children:(0,S.jsxs)(x.ZP,{alignItems:"center",justifyContent:"center",children:[(0,S.jsx)(me,{pipelineRuns:_e,pipelineType:L.LM}),(0,S.jsx)(w.Z,{ml:2}),(0,S.jsx)(me,{pipelineRuns:We,pipelineType:L.qL.PYTHON})]})})),(0,S.jsx)(w.Z,Re(Re({},He),{},{children:(0,S.jsxs)(x.ZP,{alignItems:"center",justifyContent:"center",children:[(0,S.jsx)(me,{pipelineRuns:Be,pipelineType:L.qL.INTEGRATION}),(0,S.jsx)(w.Z,{ml:2}),(0,S.jsx)(me,{pipelineRuns:Ue,pipelineType:L.qL.STREAMING})]})})),(0,S.jsx)(w.Z,{mb:2})]})]})}Ye.getInitialProps=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{tab:(null===n||void 0===n||null===(t=n.query)||void 0===t?void 0:t.tab)||de.vk.TODAY});case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var We=(0,ne.Z)(Ye)},56655:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/overview",function(){return t(98941)}])}},function(e){e.O(0,[3662,125,2714,2631,4783,1557,4241,8095,635,523,9440,3548,5831,9774,2888,179],(function(){return n=56655,e(e.s=n);var n}));var n=e.O();_N_E=n}]);