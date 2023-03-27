"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[6754],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,i=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=c(t),u=s,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return t?r.createElement(f,a(a({ref:n},l),{},{components:t})):r.createElement(f,a({ref:n},l))}));function f(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=t.length,a=new Array(i);a[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[m]="string"==typeof e?e:s,a[1]=o;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4671:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(7462),s=(t(7294),t(3905));const i={description:"Snaps permissions reference"},a="Snaps permissions",o={unversionedId:"reference/permissions",id:"reference/permissions",title:"Snaps permissions",description:"Snaps permissions reference",source:"@site/snaps/reference/permissions.md",sourceDirName:"reference",slug:"/reference/permissions",permalink:"/mm-docs-v2/preview/60d0cab3d5515bac781afcf40c93c59c2fb8f369/snaps/reference/permissions",draft:!1,tags:[],version:"current",frontMatter:{description:"Snaps permissions reference"},sidebar:"snapsSidebar",previous:{title:"Subcommands",permalink:"/mm-docs-v2/preview/60d0cab3d5515bac781afcf40c93c59c2fb8f369/snaps/reference/cli/subcommands"}},p={},c=[{value:"endowment:cronjob",id:"endowmentcronjob",level:2},{value:"endowment:ethereum-provider",id:"endowmentethereum-provider",level:2},{value:"endowment:long-running",id:"endowmentlong-running",level:2},{value:"endowment:network-access",id:"endowmentnetwork-access",level:2},{value:"endowment:rpc",id:"endowmentrpc",level:2},{value:"endowment:transaction-insight",id:"endowmenttransaction-insight",level:2}],l={toc:c};function m(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"snaps-permissions"},"Snaps permissions"),(0,s.kt)("p",null,"You can ",(0,s.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/60d0cab3d5515bac781afcf40c93c59c2fb8f369/snaps/how-to/request-permissions"},"request the following permissions")," in your snap manifest\nfile."),(0,s.kt)("h2",{id:"endowmentcronjob"},"endowment:cronjob"),(0,s.kt)("p",null,"To run periodic actions for the user (cron jobs), a snap must request the ",(0,s.kt)("inlineCode",{parentName:"p"},"endowment:cronjob")," permission.\nThis permission allows the snap to specify cron jobs that trigger the exported\n",(0,s.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/60d0cab3d5515bac781afcf40c93c59c2fb8f369/snaps/reference/exports#oncronjob"},(0,s.kt)("inlineCode",{parentName:"a"},"onCronjob"))," method."),(0,s.kt)("p",null,"Specify this permission in the manifest file as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "initialPermissions": {\n    "endowment:cronjob": {\n      "jobs": [\n        {\n          "expression": {\n            "minute": "*",\n            "hour": "*",\n            "dayOfMonth": "*",\n            "month": "*",\n            "dayOfWeek": "*"\n          },\n          "request": {\n            "method": "exampleMethodOne",\n            "params": {\n              "param1": "foo"\n            }\n          }\n        },\n        {\n          "expression": "* * * * *",\n          "request": {\n            "method": "exampleMethodTwo",\n            "params": {\n              "param1": "bar"\n            }\n          }\n        }\n      ]\n    }\n  }\n}\n')),(0,s.kt)("h2",{id:"endowmentethereum-provider"},"endowment:ethereum-provider"),(0,s.kt)("p",null,"To communicate with a node using MetaMask, a snap must request the ",(0,s.kt)("inlineCode",{parentName:"p"},"endowment:ethereum-provider")," permission.\nThis permission exposes the global API ",(0,s.kt)("inlineCode",{parentName:"p"},"ethereum")," to the snap execution environment.\nThis global is an EIP-1193 provider."),(0,s.kt)("p",null,"Specify this permission in the manifest file as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"initialPermissions": {\n  "endowment:ethereum-provider": {}\n},\n')),(0,s.kt)("h2",{id:"endowmentlong-running"},"endowment:long-running"),(0,s.kt)("p",null,"A snap that is computationally heavy and can't finish execution within the\n",(0,s.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/60d0cab3d5515bac781afcf40c93c59c2fb8f369/snaps/concepts/lifecycle"},"snap lifecycle requirements")," must request the ",(0,s.kt)("inlineCode",{parentName:"p"},"endowment:long-running")," permission.\nThis permission allows the snap to run indefinitely while processing RPC requests."),(0,s.kt)("p",null,"Specify this permission in the manifest file as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"initialPermissions": {\n  "endowment:long-running": {}\n},\n')),(0,s.kt)("h2",{id:"endowmentnetwork-access"},"endowment:network-access"),(0,s.kt)("p",null,"To access the internet, a snap must request the ",(0,s.kt)("inlineCode",{parentName:"p"},"endowment:network-access")," permission.\nThis permission exposes the global networking APIs ",(0,s.kt)("inlineCode",{parentName:"p"},"fetch")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"WebSocket")," to the Snaps execution environment."),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," isn't available in Snaps, and you should replace it with ",(0,s.kt)("inlineCode",{parentName:"p"},"fetch"),".\nIf your dependencies use ",(0,s.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest"),", you can\n",(0,s.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/60d0cab3d5515bac781afcf40c93c59c2fb8f369/snaps/how-to/troubleshoot#patch-the-use-of-xmlhttprequest"},"patch it away"),".")),(0,s.kt)("p",null,"Specify this permission in the manifest file as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"initialPermissions": {\n  "endowment:network-access": {}\n},\n')),(0,s.kt)("h2",{id:"endowmentrpc"},"endowment:rpc"),(0,s.kt)("p",null,"To handle arbitrary JSON-RPC requests, a snap must request the ",(0,s.kt)("inlineCode",{parentName:"p"},"endowment:rpc")," permission.\nThis permission grants a snap access to JSON-RPC requests sent to the snap, using the exported\n",(0,s.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/60d0cab3d5515bac781afcf40c93c59c2fb8f369/snaps/reference/exports#onrpcrequest"},(0,s.kt)("inlineCode",{parentName:"a"},"onRpcRequest"))," method."),(0,s.kt)("p",null,"This permission requires an object with a ",(0,s.kt)("inlineCode",{parentName:"p"},"snaps")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"dapps")," property (or both), to signal if the\nsnap can receive JSON-RPC requests from other snaps, or dapps, respectively.\nThe default for both properties is ",(0,s.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,s.kt)("p",null,"Specify this permission in the manifest file as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "initialPermissions": {\n    "endowment:rpc": {\n      "dapps": true,\n      "snaps": false\n    }\n  }\n}\n')),(0,s.kt)("h2",{id:"endowmenttransaction-insight"},"endowment:transaction-insight"),(0,s.kt)("p",null,"To provide transaction insights, a snap must request the ",(0,s.kt)("inlineCode",{parentName:"p"},"endowment:transaction-insight")," permission.\nThis permission grants a snap read-only access to raw transaction payloads, before they're accepted\nfor signing by the user, by exporting the ",(0,s.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/60d0cab3d5515bac781afcf40c93c59c2fb8f369/snaps/reference/exports#ontransaction"},(0,s.kt)("inlineCode",{parentName:"a"},"onTransaction"))," method."),(0,s.kt)("p",null,"This permission requires an object with an ",(0,s.kt)("inlineCode",{parentName:"p"},"allowTransactionOrigin")," property to signal if the snap\nshould pass the ",(0,s.kt)("inlineCode",{parentName:"p"},"transactionOrigin")," property as part of the ",(0,s.kt)("inlineCode",{parentName:"p"},"onTransaction")," parameters.\nThis property represents the transaction initiator origin.\nThe default is ",(0,s.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,s.kt)("p",null,"Specify this permission in the manifest file as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"initialPermissions": {\n  "endowment:transaction-insight": {\n    "allowTransactionOrigin": true\n  }\n},\n')))}m.isMDXComponent=!0}}]);