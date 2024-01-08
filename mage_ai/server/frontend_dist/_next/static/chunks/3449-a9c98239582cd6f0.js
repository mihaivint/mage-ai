"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3449],{1589:function(e,n,t){var o=t(82684);var i="function"===typeof Object.is?Object.is:function(e,n){return e===n&&(0!==e||1/e===1/n)||e!==e&&n!==n},u=o.useState,l=o.useEffect,r=o.useLayoutEffect,c=o.useDebugValue;function a(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!i(e,t)}catch(o){return!0}}var s="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(e,n){return n()}:function(e,n){var t=n(),o=u({inst:{value:t,getSnapshot:n}}),i=o[0].inst,s=o[1];return r((function(){i.value=t,i.getSnapshot=n,a(i)&&s({inst:i})}),[e,t,n]),l((function(){return a(i)&&s({inst:i}),e((function(){a(i)&&s({inst:i})}))}),[e]),c(t),t};n.useSyncExternalStore=void 0!==o.useSyncExternalStore?o.useSyncExternalStore:s},73847:function(e,n,t){var o=t(82684),i=t(48216);var u="function"===typeof Object.is?Object.is:function(e,n){return e===n&&(0!==e||1/e===1/n)||e!==e&&n!==n},l=i.useSyncExternalStore,r=o.useRef,c=o.useEffect,a=o.useMemo,s=o.useDebugValue;n.useSyncExternalStoreWithSelector=function(e,n,t,o,i){var d=r(null);if(null===d.current){var f={hasValue:!1,value:null};d.current=f}else f=d.current;d=a((function(){function e(e){if(!c){if(c=!0,l=e,e=o(e),void 0!==i&&f.hasValue){var n=f.value;if(i(n,e))return r=n}return r=e}if(n=r,u(l,e))return n;var t=o(e);return void 0!==i&&i(n,t)?n:(l=e,r=t)}var l,r,c=!1,a=void 0===t?null:t;return[function(){return e(n())},null===a?void 0:function(){return e(a())}]}),[n,t,o,i]);var v=l(e,d[0],d[1]);return c((function(){f.hasValue=!0,f.value=v}),[v]),s(v),v}},48216:function(e,n,t){e.exports=t(1589)},81550:function(e,n,t){e.exports=t(73847)},43449:function(e,n,t){var o=t(82394),i=t(75582),u=t(17717),l=t(82684),r=t(49555),c=t(69864),a=t(40761),s=t(44425),d=t(71180),f=t(92677),v=t(89083),p=t(89706),h=t(55485),b=t(93369),S=t(57653),g=t(38276),y=t(35686),m=t(39643),k=t(11498),E=t(85385),O=t(68669),j=t(86735),w=t(81728),P=t(72619),x=t(42041),C=t(44688),D=t(19183),Z=t(28598);function _(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function T(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?_(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n,t=e.active,_=e.addNewBlock,R=e.disableRefreshWarning,M=e.fetchPipeline,V=e.fetchVariables,I=e.filePath,N=e.codeEditorMaximumHeightOffset,U=e.hideHeaderButtons,F=e.onContentChange,A=e.onUpdateFileSuccess,G=e.openSidekickView,L=e.originalContent,B=e.pipeline,H=e.saveFile,W=e.selectedFilePath,X=e.sendTerminalMessage,q=e.setDisableShortcuts,J=e.setErrors,z=e.setFilesTouched,K=e.setSelectedBlock,Q=(0,r.j)("apiReloads"),Y=(0,i.Z)(Q,2)[1],$=(0,l.useState)(null),ee=$[0],ne=$[1],te=(0,l.useState)(!1),oe=te[0],ie=(te[1],(0,l.useRef)(null)),ue=(0,D.i)().height,le=(0,l.useMemo)((function(){return new a.Z}),[]),re=(0,l.useMemo)((function(){return{api_key:k.lG,token:le.decodedToken.token}}),[le]),ce=y.ZP.statuses.list().data,ae=(0,l.useMemo)((function(){var e,n;return null===ce||void 0===ce||null===(e=ce.statuses)||void 0===e||null===(n=e[0])||void 0===n?void 0:n.repo_path}),[ce]),se=y.ZP.file_contents.detail(I).data;(0,l.useEffect)((function(){null!==se&&void 0!==se&&se.file_content?ne(se.file_content):null!==se&&void 0!==se&&se.error&&(0,P.h$)(se,{onErrorCallback:function(e,n){return J({errors:n,response:e})}})}),[se,J]);var de=(0,l.useState)(null===ee||void 0===ee?void 0:ee.content),fe=de[0],ve=de[1],pe=(0,l.useCallback)((function(e){ve(e),F&&(null===F||void 0===F||F(e))}),[F]),he=(0,l.useState)(!1),be=he[0],Se=he[1];(0,l.useEffect)((function(){var e;W&&(null===ie||void 0===ie||null===(e=ie.current)||void 0===e||e.scrollIntoView())}),[W]);var ge=(0,c.Db)(y.ZP.file_contents.useUpdate((null===ee||void 0===ee?void 0:ee.path)&&encodeURIComponent(null===ee||void 0===ee?void 0:ee.path)),{onSuccess:function(e){return(0,P.wD)(e,{callback:function(e){var n=e.file_content;Y((function(e){return T(T({},e),{},(0,o.Z)({},"FileVersions/".concat(null===ee||void 0===ee?void 0:ee.path),Number(new Date)))})),A&&(null===A||void 0===A||A(n))},onErrorCallback:function(e,n){return null===J||void 0===J?void 0:J({errors:n,response:e})}})}}),ye=(0,i.Z)(ge,1)[0],me=(0,l.useCallback)((function(e,n){if(H)return H(e,n);ye({file_content:T(T({},n),{},{content:e})}).then((function(){decodeURIComponent(I).split(u.sep).pop()===p.dT.METADATA_YAML&&V&&(null===V||void 0===V||V())})),null===z||void 0===z||z((function(e){return T(T({},e),{},(0,o.Z)({},null===n||void 0===n?void 0:n.path,!1))})),Se(!1)}),[V,I,H,z,ye]),ke=(0,l.useMemo)((function(){return(0,O.lU)()}),[]),Ee=(0,l.useMemo)((function(){var e,n,t,o;return null===(null===ee||void 0===ee||null===(e=ee.path)||void 0===e?void 0:e.match(ke))?p.Lu.TXT:null===ee||void 0===ee||null===(n=ee.path)||void 0===n||null===(t=n.match(ke))||void 0===t||null===(o=t[0])||void 0===o?void 0:o.split(".")[1]}),[ke,ee]),Oe=(0,l.useMemo)((function(){return null===L||void 0===L?void 0:L[null===ee||void 0===ee?void 0:ee.path]}),[ee,L]),je=(0,l.useMemo)((function(){if(null!==ee&&void 0!==ee&&ee.path){var e=!!Oe&&(null===Oe||void 0===Oe?void 0:Oe.content_from_base);return(0,Z.jsx)(v.Z,{autoHeight:!0,height:N?ue-N:null,language:p.nB[Ee],onChange:function(e){pe(e),z&&z((function(e){return null!==e&&void 0!==e&&e[null===ee||void 0===ee?void 0:ee.path]?e:T(T({},e),{},(0,o.Z)({},null===ee||void 0===ee?void 0:ee.path,!0))})),Se(!0)},onMountCallback:function(e){q&&(e.onDidFocusEditorWidget=function(){null===q||void 0===q||q(!0)}),q&&(e.onDidBlurEditorWidget=function(){null===q||void 0===q||q(!1)})},onSave:function(e){me(e,ee)},originalValue:null===Oe||void 0===Oe?void 0:Oe.content_from_base,padding:10,readOnly:!!e,selected:!0,showDiffs:!!e,textareaFocused:!0,value:(0,w.Pb)(null===ee||void 0===ee?void 0:ee.content)?JSON.stringify(JSON.parse(null===ee||void 0===ee?void 0:ee.content),null,2):null===ee||void 0===ee?void 0:ee.content,width:"100%"})}}),[N,ee,Ee,ue,Oe,me,pe,z]),we=null!==B&&void 0!==B&&B.blocks?(0,j.sE)(null===B||void 0===B?void 0:B.blocks,(function(e){var n=e.type;return s.tf.DATA_EXPORTER===n})):null,Pe=(0,c.Db)(y.ZP.blocks.pipelines.useUpdate(encodeURIComponent(null===B||void 0===B?void 0:B.uuid),encodeURIComponent(null===we||void 0===we?void 0:we.uuid)),{onSuccess:function(e){return(0,P.wD)(e,{callback:function(){null===M||void 0===M||M()}})}}),xe=(0,i.Z)(Pe,1)[0],Ce=_&&B&&ee&&p.tE.includes(Ee)&&(0,O.ck)(null===ee||void 0===ee||null===(n=ee.path)||void 0===n?void 0:n.split(u.sep))&&(0,Z.jsx)(d.ZP,{onClick:function(){var e=(null===B||void 0===B?void 0:B.type)===S.qL.INTEGRATION,n=(0,O.TU)(ee,ae,B);_(n,(function(n){e&&we&&xe({block:T(T({},we),{},{upstream_blocks:[n.uuid]})}),null===K||void 0===K||K(n)}))},primary:!0,children:"Add to current pipeline"}),De=X&&(0,Z.jsx)(g.Z,{m:2,children:(0,Z.jsx)(b.ZP,{disabled:!ae,inline:!0,loading:oe,onClick:function(){null===G||void 0===G||G(E.cH.TERMINAL),null===X||void 0===X||X(JSON.stringify(T(T({},re),{},{command:["stdin","pip install -r ".concat(ae,"/requirements.txt\r")]})))},title:ae?"Pip install packages from your saved requirements.txt file (\u2318+S to save).":"Please use right panel terminal to install packages.",uuid:"FileEditor/InstallPackages",children:"Install packages"})}),Ze="FileEditor/".concat((null===ee||void 0===ee?void 0:ee.path)||I),_e=(0,C.y)(),Te=_e.registerOnKeyDown,Re=_e.unregisterOnKeyDown;return(0,l.useEffect)((function(){return function(){Re(Ze)}}),[Re,Ze]),Te(Ze,(function(e,n){if(t&&!R)if((0,x.y)([m.zX,m.Um],n)||(0,x.y)([m.PQ,m.Um],n))e.preventDefault(),me(fe,ee);else if(be&&(0,x.y)([m.zX,m.hS],n)){e.preventDefault();var o="".concat(ee.path," has changes that are unsaved. ")+"Click cancel and save your changes before reloading page.";"undefined"!==typeof location&&window.confirm(o)&&location.reload()}}),[t,fe,R,ee,me,be]),(0,Z.jsxs)("div",{ref:ie,children:[!U&&(0,Z.jsx)(g.Z,{p:2,children:(0,Z.jsxs)(h.ZP,{justifyContent:"space-between",children:[(0,Z.jsxs)(f.Z,{children:[Ce,(0,Z.jsx)(d.ZP,{disabled:!fe,onClick:function(e){e.preventDefault(),me(fe,ee)},title:fe?null:"No changes have been made to this file.",children:"Save file content"})]}),G&&(0,Z.jsx)(f.Z,{children:(0,Z.jsx)(d.ZP,{compact:!0,onClick:function(){G(E.cH.FILE_VERSIONS)},small:!0,title:"View previous changes to this file.",children:"Show versions"})})]})}),je,I===p.dT.REQS_TXT&&De]})}},49555:function(e,n,t){t.d(n,{j:function(){return s}});var o=t(82684);const i=e=>{let n;const t=new Set,o=(e,o)=>{const i="function"===typeof e?e(n):e;if(i!==n){const e=n;n=o?i:Object.assign({},n,i),t.forEach((t=>t(n,e)))}},i=()=>n,u={setState:o,getState:i,subscribe:e=>(t.add(e),()=>t.delete(e)),destroy:()=>t.clear()};return n=e(o,i,u),u};var u=t(81550);const{useSyncExternalStoreWithSelector:l}=u;const r=e=>{const n="function"===typeof e?(e=>e?i(e):i)(e):e,t=(e,t)=>function(e,n=e.getState,t){const i=l(e.subscribe,e.getState,e.getServerState||e.getState,n,t);return(0,o.useDebugValue)(i),i}(n,e,t);return Object.assign(t,n),t};var c=e=>e?r(e):r;var a=(e=>{const n=c((()=>e)),t=(Object.keys(e),(e,t)=>{n.setState((n=>{return{[e]:(o=n[e],i=t,"function"==typeof i?i(o):i)};var o,i}))});return{useGlobalState:e=>{const i=(0,o.useCallback)((n=>n[e]),[e]);return[n(i),(0,o.useCallback)((n=>t(e,n)),[e])]},getGlobalState:e=>n.getState()[e],setGlobalState:t,subscribe:(e,t)=>{n.subscribe(((n,o)=>{n[e]!==o[e]&&t(n[e])}))}}})({apiReloads:{}}),s=a.useGlobalState}}]);