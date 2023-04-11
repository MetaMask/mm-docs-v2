"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[6754],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>h});var r=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,i=e.originalType,p=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),c=l(t),d=s,h=c["".concat(p,".").concat(d)]||c[d]||u[d]||i;return t?r.createElement(h,o(o({ref:n},m),{},{components:t})):r.createElement(h,o({ref:n},m))}));function h(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=t.length,o=new Array(i);o[0]=d;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a[c]="string"==typeof e?e:s,o[1]=a;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4671:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=t(7462),s=(t(7294),t(3905));const i={description:"Snaps permissions reference"},o="Snaps permissions",a={unversionedId:"reference/permissions",id:"reference/permissions",title:"Snaps permissions",description:"Snaps permissions reference",source:"@site/snaps/reference/permissions.md",sourceDirName:"reference",slug:"/reference/permissions",permalink:"/snaps/reference/permissions",draft:!1,tags:[],version:"current",frontMatter:{description:"Snaps permissions reference"},sidebar:"snapsSidebar",previous:{title:"Subcommands",permalink:"/snaps/reference/cli/subcommands"}},p={},l=[{value:"endowment:cronjob",id:"endowmentcronjob",level:2},{value:"endowment:ethereum-provider",id:"endowmentethereum-provider",level:2},{value:"endowment:long-running",id:"endowmentlong-running",level:2},{value:"endowment:network-access",id:"endowmentnetwork-access",level:2},{value:"endowment:rpc",id:"endowmentrpc",level:2},{value:"endowment:transaction-insight",id:"endowmenttransaction-insight",level:2}],m={toc:l};function c(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"snaps-permissions"},"Snaps permissions"),(0,s.kt)("p",null,"You can ",(0,s.kt)("a",{parentName:"p",href:"/snaps/how-to/request-permissions"},"request the following permissions")," in your snap manifest\nfile."),(0,s.kt)("h2",{id:"endowmentcronjob"},"endowment:cronjob"),(0,s.kt)("p",null,"To run periodic actions for the user (cron jobs), a snap must request the ",(0,s.kt)("inlineCode",{parentName:"p"},"endowment:cronjob")," permission.\nThis permission allows the snap to specify cron jobs that trigger the exported\n",(0,s.kt)("a",{parentName:"p",href:"/snaps/reference/exports#oncronjob"},(0,s.kt)("inlineCode",{parentName:"a"},"onCronjob"))," method."),(0,s.kt)("p",null,"Specify this permission in the manifest file as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "initialPermissions": {\n    "endowment:cronjob": {\n      "jobs": [\n        {\n          "expression": {\n            "minute": "*",\n            "hour": "*",\n            "dayOfMonth": "*",\n            "month": "*",\n            "dayOfWeek": "*"\n          },\n          "request": {\n            "method": "exampleMethodOne",\n            "params": {\n              "param1": "foo"\n            }\n          }\n        },\n        {\n          "expression": "* * * * *",\n          "request": {\n            "method": "exampleMethodTwo",\n            "params": {\n              "param1": "bar"\n            }\n          }\n        }\n      ]\n    }\n  }\n}\n')),(0,s.kt)("h2",{id:"endowmentethereum-provider"},"endowment:ethereum-provider"),(0,s.kt)("p",null,"To communicate with a node using MetaMask, a snap must request the ",(0,s.kt)("inlineCode",{parentName:"p"},"endowment:ethereum-provider")," permission.\nThis permission exposes the global API ",(0,s.kt)("inlineCode",{parentName:"p"},"ethereum")," to the snap execution environment.\nThis global is an EIP-1193 provider."),(0,s.kt)("p",null,"Specify this permission in the manifest file as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"initialPermissions": {\n  "endowment:ethereum-provider": {}\n},\n')),(0,s.kt)("h2",{id:"endowmentlong-running"},"endowment:long-running"),(0,s.kt)("p",null,"A snap that is computationally heavy and can't finish execution within the\n",(0,s.kt)("a",{parentName:"p",href:"/snaps/concepts/lifecycle"},"snap lifecycle requirements")," must request the ",(0,s.kt)("inlineCode",{parentName:"p"},"endowment:long-running")," permission.\nThis permission allows the snap to run indefinitely while processing RPC requests."),(0,s.kt)("p",null,"Specify this permission in the manifest file as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"initialPermissions": {\n  "endowment:long-running": {}\n},\n')),(0,s.kt)("h2",{id:"endowmentnetwork-access"},"endowment:network-access"),(0,s.kt)("p",null,"To access the internet, a snap must request the ",(0,s.kt)("inlineCode",{parentName:"p"},"endowment:network-access")," permission.\nThis permission exposes the global networking APIs ",(0,s.kt)("inlineCode",{parentName:"p"},"fetch")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"WebSocket")," to the Snaps execution environment."),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," isn't available in Snaps, and you should replace it with ",(0,s.kt)("inlineCode",{parentName:"p"},"fetch"),".\nIf your dependencies use ",(0,s.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest"),", you can\n",(0,s.kt)("a",{parentName:"p",href:"/snaps/how-to/troubleshoot#patch-the-use-of-xmlhttprequest"},"patch it away"),".")),(0,s.kt)("p",null,"Specify this permission in the manifest file as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"initialPermissions": {\n  "endowment:network-access": {}\n},\n')),(0,s.kt)("h2",{id:"endowmentrpc"},"endowment:rpc"),(0,s.kt)("p",null,"To handle arbitrary JSON-RPC requests, a snap must request the ",(0,s.kt)("inlineCode",{parentName:"p"},"endowment:rpc")," permission.\nThis permission grants a snap access to JSON-RPC requests sent to the snap, using the exported\n",(0,s.kt)("a",{parentName:"p",href:"/snaps/reference/exports#onrpcrequest"},(0,s.kt)("inlineCode",{parentName:"a"},"onRpcRequest"))," method."),(0,s.kt)("p",null,"This permission requires an object with a ",(0,s.kt)("inlineCode",{parentName:"p"},"snaps")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"dapps")," property (or both), to signal if the\nsnap can receive JSON-RPC requests from other snaps, or dapps, respectively.\nThe default for both properties is ",(0,s.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,s.kt)("p",null,"Specify this permission in the manifest file as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "initialPermissions": {\n    "endowment:rpc": {\n      "dapps": true,\n      "snaps": false\n    }\n  }\n}\n')),(0,s.kt)("h2",{id:"endowmenttransaction-insight"},"endowment:transaction-insight"),(0,s.kt)("p",null,"To provide transaction insights, a snap must request the ",(0,s.kt)("inlineCode",{parentName:"p"},"endowment:transaction-insight")," permission.\nThis permission grants a snap read-only access to raw transaction payloads, before they're accepted\nfor signing by the user, by exporting the ",(0,s.kt)("a",{parentName:"p",href:"/snaps/reference/exports#ontransaction"},(0,s.kt)("inlineCode",{parentName:"a"},"onTransaction"))," method."),(0,s.kt)("p",null,"This permission requires an object with an ",(0,s.kt)("inlineCode",{parentName:"p"},"allowTransactionOrigin")," property to signal if the snap\nshould pass the ",(0,s.kt)("inlineCode",{parentName:"p"},"transactionOrigin")," property as part of the ",(0,s.kt)("inlineCode",{parentName:"p"},"onTransaction")," parameters.\nThis property represents the transaction initiator origin.\nThe default is ",(0,s.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,s.kt)("p",null,"Specify this permission in the manifest file as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"initialPermissions": {\n  "endowment:transaction-insight": {\n    "allowTransactionOrigin": true\n  }\n},\n')))}c.isMDXComponent=!0}}]);