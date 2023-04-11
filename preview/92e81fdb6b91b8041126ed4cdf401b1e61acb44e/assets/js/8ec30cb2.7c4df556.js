"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[5709],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1735:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={title:"Snap execution environment",description:"Learn about the Snaps execution environment."},o="Snaps execution environment",l={unversionedId:"concepts/execution-environment",id:"concepts/execution-environment",title:"Snap execution environment",description:"Learn about the Snaps execution environment.",source:"@site/snaps/concepts/execution-environment.md",sourceDirName:"concepts",slug:"/concepts/execution-environment",permalink:"/mm-docs-v2/preview/92e81fdb6b91b8041126ed4cdf401b1e61acb44e/snaps/concepts/execution-environment",draft:!1,tags:[],version:"current",frontMatter:{title:"Snap execution environment",description:"Learn about the Snaps execution environment."},sidebar:"snapsSidebar",previous:{title:"Snap user interface",permalink:"/mm-docs-v2/preview/92e81fdb6b91b8041126ed4cdf401b1e61acb44e/snaps/concepts/user-interface"},next:{title:"Tutorials",permalink:"/mm-docs-v2/preview/92e81fdb6b91b8041126ed4cdf401b1e61acb44e/snaps/category/tutorials"}},s={},p=[{value:"Secure ECMAScript (SES)",id:"secure-ecmascript-ses",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"snaps-execution-environment"},"Snaps execution environment"),(0,a.kt)("p",null,"Snaps are untrusted JavaScript programs that execute safely in a sandboxed environment that runs\n",(0,a.kt)("a",{parentName:"p",href:"#secure-ecmascript-ses"},"Secure ECMAScript (SES)"),".\nThere's no DOM, no Node.js built-ins, and no platform-specific APIs other than MetaMask's ",(0,a.kt)("inlineCode",{parentName:"p"},"wallet"),"\nglobal object.\nAlmost all standard JavaScript globals contained in\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects"},"this list")," that\nare also in Node.js are available as normal.\nThis includes globals such as ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Error"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Math"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Set"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"Reflect"),"."),(0,a.kt)("p",null,"The following globals are also available:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"console")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"crypto")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fetch")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"WebSocket")," (with the ",(0,a.kt)("a",{parentName:"li",href:"/mm-docs-v2/preview/92e81fdb6b91b8041126ed4cdf401b1e61acb44e/snaps/how-to/request-permissions#endowmentnetwork-access"},"appropriate permission"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"setTimeout")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"clearTimeout")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"setInterval")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"clearInterval")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SubtleCrypto")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"WebAssembly")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TextEncoder")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"TextDecoder")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"atob")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"btoa")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"URL"))),(0,a.kt)("p",null,"The execution environment is instrumented in this way to:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Prevent snaps from influencing any other running code, including MetaMask itself.\nThat is, prevent all snaps from polluting the global environment and malicious snaps from\nstealing the user's stuff."),(0,a.kt)("li",{parentName:"ol"},"Prevent snaps from accessing sensitive JavaScript APIs (such as ",(0,a.kt)("inlineCode",{parentName:"li"},"fetch"),") without permission."),(0,a.kt)("li",{parentName:"ol"},'Ensure that the execution environment is "fully virtualizable," that is, platform-independent.')),(0,a.kt)("p",null,"This allows you to safely execute snaps anywhere, without the snap needing to worry about where and\nhow it's executed."),(0,a.kt)("h2",{id:"secure-ecmascript-ses"},"Secure ECMAScript (SES)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/endojs/endo/tree/master/packages/ses"},"Secure ECMAScript (SES)"),", is a subset of\nthe JavaScript language designed to enable mutually suspicious programs to execute in the same\nJavaScript process (or more accurately, the same ",(0,a.kt)("a",{parentName:"p",href:"https://tc39.es/ecma262/#realm"},"realm"),").\nYou can think of it as a more severe form of\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode"},"strict mode"),"."))}m.isMDXComponent=!0}}]);