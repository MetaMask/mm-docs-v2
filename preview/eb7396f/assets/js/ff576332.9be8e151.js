"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[4151],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>h});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),l=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=l(e.components);return o.createElement(p.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=l(t),u=r,h=c["".concat(p,".").concat(u)]||c[u]||d[u]||s;return t?o.createElement(h,a(a({ref:n},m),{},{components:t})):o.createElement(h,a({ref:n},m))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,a=new Array(s);a[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[c]="string"==typeof e?e:r,a[1]=i;for(var l=2;l<s;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3932:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=t(7462),r=(t(7294),t(3905));const s={},a="Request permissions",i={unversionedId:"how-to/request-permissions",id:"how-to/request-permissions",title:"Request permissions",description:"To access certain powerful JavaScript globals or API methods, a snap must ask the user for permission.",source:"@site/snaps/how-to/request-permissions.md",sourceDirName:"how-to",slug:"/how-to/request-permissions",permalink:"/mm-docs-v2/preview/eb7396f/snaps/how-to/request-permissions",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"snapsSidebar",previous:{title:"Develop a snap",permalink:"/mm-docs-v2/preview/eb7396f/snaps/how-to/develop-a-snap"},next:{title:"Troubleshoot",permalink:"/mm-docs-v2/preview/eb7396f/snaps/how-to/troubleshoot"}},p={},l=[{value:"RPC API permissions",id:"rpc-api-permissions",level:2},{value:"Endowments",id:"endowments",level:2},{value:"<code>endowment:long-running</code>",id:"endowmentlong-running",level:3},{value:"<code>endowment:network-access</code>",id:"endowmentnetwork-access",level:3},{value:"<code>endowment:transaction-insight</code>",id:"endowmenttransaction-insight",level:3},{value:"<code>endowment:cronjob</code>",id:"endowmentcronjob",level:3}],m={toc:l};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"request-permissions"},"Request permissions"),(0,r.kt)("p",null,"To access certain powerful JavaScript globals or API methods, a snap must ask the user for permission.\nSnaps follow the ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-2255"},"EIP-2255 wallet permissions specification"),",\nand you must specify a snap's required permissions in the ",(0,r.kt)("inlineCode",{parentName:"p"},"initialPermissions")," field of the\n",(0,r.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/eb7396f/snaps/concepts/anatomy#manifest-file"},"manifest file"),"."),(0,r.kt)("h2",{id:"rpc-api-permissions"},"RPC API permissions"),(0,r.kt)("p",null,"You must request permission to use any\n",(0,r.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/eb7396f/snaps/reference/rpc-api#restricted-methods"},"restricted JSON-RPC API methods"),"."),(0,r.kt)("p",null,"For example, to request to use ",(0,r.kt)("inlineCode",{parentName:"p"},"snap_confirm"),", add the following to the manifest file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'...\n"initialPermissions": {\n  "snap_confirm": {}\n},\n...\n')),(0,r.kt)("h2",{id:"endowments"},"Endowments"),(0,r.kt)("p",null,"You can specify the following endowments in the manifest file."),(0,r.kt)("h3",{id:"endowmentlong-running"},(0,r.kt)("inlineCode",{parentName:"h3"},"endowment:long-running")),(0,r.kt)("p",null,"A snap that is computationally heavy and can't finish execution within the\n",(0,r.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/eb7396f/snaps/concepts/lifecycle"},"snap lifecycle requirements")," can request the ",(0,r.kt)("inlineCode",{parentName:"p"},"endowment:long-running")," permission.\nThis permission allows the snap to run indefinitely while processing RPC requests."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'...\n"initialPermissions": {\n  "endowment:long-running": {}\n},\n...\n')),(0,r.kt)("h3",{id:"endowmentnetwork-access"},(0,r.kt)("inlineCode",{parentName:"h3"},"endowment:network-access")),(0,r.kt)("p",null,"A snap that must access the internet must request the ",(0,r.kt)("inlineCode",{parentName:"p"},"endowment:network-access")," permission.\nThis permission exposes the global networking APIs ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"WebSocket")," to the Snaps execution environment."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," is never available in Snaps, and you should replace it with ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch"),".\nIf your dependencies are using ",(0,r.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest"),", you can\n",(0,r.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/eb7396f/snaps/how-to/troubleshoot#patch-the-use-of-xmlhttprequest"},"patch it away"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'...\n"initialPermissions": {\n  "endowment:network-access": {}\n},\n...\n')),(0,r.kt)("h3",{id:"endowmenttransaction-insight"},(0,r.kt)("inlineCode",{parentName:"h3"},"endowment:transaction-insight")),(0,r.kt)("p",null,"For snaps that provide transaction insights, the snap can request the\n",(0,r.kt)("inlineCode",{parentName:"p"},"endowment:transaction-insight")," permission.\nThis permission grants a snap read-only access to raw transaction payloads, before they're accepted\nfor signing by the user, by exporting the ",(0,r.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/eb7396f/snaps/reference/exports#ontransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"onTransaction"))," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'...\n"initialPermissions": {\n  "endowment:transaction-insight": {}\n},\n...\n')),(0,r.kt)("h3",{id:"endowmentcronjob"},(0,r.kt)("inlineCode",{parentName:"h3"},"endowment:cronjob")),(0,r.kt)("p",null,"For snaps that wants to run periodic actions for the user, the snap can request the\n",(0,r.kt)("inlineCode",{parentName:"p"},"endowment:cronjob")," permission.\nThis permission allows a snap to specify periodic requests that trigger the exported\n",(0,r.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/eb7396f/snaps/reference/exports#oncronjob"},(0,r.kt)("inlineCode",{parentName:"a"},"onCronjob"))," method."),(0,r.kt)("p",null,"Cronjobs are specified as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "initialPermissions": {\n    "endowment:cronjob": {\n      "jobs": [\n        {\n          "expression": {\n            "minute": "*",\n            "hour": "*",\n            "dayOfMonth": "*",\n            "month": "*",\n            "dayOfWeek": "*"\n          },\n          "request": {\n            "method": "exampleMethodOne",\n            "params": {\n              "param1": "foo"\n            }\n          }\n        },\n        {\n          "expression": "* * * * *",\n          "request": {\n            "method": "exampleMethodTwo",\n            "params": {\n              "param1": "bar"\n            }\n          }\n        }\n      ]\n    }\n  }\n}\n')))}c.isMDXComponent=!0}}]);