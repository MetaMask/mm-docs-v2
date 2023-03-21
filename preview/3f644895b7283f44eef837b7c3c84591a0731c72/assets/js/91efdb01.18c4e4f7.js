"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[3805],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5294:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={description:"Access a user's MetaMask provider using metamask-extension-provider."},i="Access a user's MetaMask provider",s={unversionedId:"how-to/access-provider",id:"how-to/access-provider",title:"Access a user's MetaMask provider",description:"Access a user's MetaMask provider using metamask-extension-provider.",source:"@site/wallet/how-to/access-provider.md",sourceDirName:"how-to",slug:"/how-to/access-provider",permalink:"/mm-docs-v2/preview/3f644895b7283f44eef837b7c3c84591a0731c72/wallet/how-to/access-provider",draft:!1,tags:[],version:"current",frontMatter:{description:"Access a user's MetaMask provider using metamask-extension-provider."},sidebar:"walletSidebar",previous:{title:"Register a contract's method names",permalink:"/mm-docs-v2/preview/3f644895b7283f44eef837b7c3c84591a0731c72/wallet/how-to/register-method-names"},next:{title:"Use the onboarding library",permalink:"/mm-docs-v2/preview/3f644895b7283f44eef837b7c3c84591a0731c72/wallet/how-to/use-onboarding-library"}},p={},l=[{value:"Run the example",id:"run-the-example",level:2}],c={toc:l};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"access-a-users-metamask-provider"},"Access a user's MetaMask provider"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/extension-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"metamask-extension-provider"))," module to\naccess a user's MetaMask provider from other web extensions."),(0,a.kt)("p",null,"The account provided by this provider is the user's MetaMask account.\nWhen sending signing requests to this provider, MetaMask prompts the user to sign with their accounts."),(0,a.kt)("p",null,"This module works in Chrome and Firefox."),(0,a.kt)("p",null,"Install ",(0,a.kt)("inlineCode",{parentName:"p"},"metamask-extension-provider")," using the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install metamask-extension-provider -s\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can use a bundler such as ",(0,a.kt)("a",{parentName:"p",href:"https://browserify.org/"},"Browserify")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"metamask-extension-provider"),".")),(0,a.kt)("p",null,"To use the module, add something like the following to your project script:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const createMetaMaskProvider = require('metamask-extension-provider');\n\nconst provider = createMetaMaskProvider();\n\nprovider.on('error', (error) => {\n  // Failed to connect to MetaMask, fallback logic.\n});\n")),(0,a.kt)("p",null,"To add support for an additional browser, add MetaMask's extension ID for that browser's store to\nthe configuration file.\nFor example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "CHROME_ID": "nkbihfbeogaeaoehlefnkodbefgpgknn",\n  "FIREFOX_ID": "webextension@metamask.io"\n}\n')),(0,a.kt)("h2",{id:"run-the-example"},"Run the example"),(0,a.kt)("p",null,"The\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/extension-provider/tree/master/sample-extension"},(0,a.kt)("inlineCode",{parentName:"a"},"sample-extension")),"\ndirectory contains an example web extension implementation.\nYou can easily add it to Chrome or Firefox Developer Edition."),(0,a.kt)("p",null,"You must have Browserify installed (",(0,a.kt)("inlineCode",{parentName:"p"},"npm i -g browserify"),") to edit the example."),(0,a.kt)("p",null,"You can edit the sample file ",(0,a.kt)("inlineCode",{parentName:"p"},"sample-extension/index.js")," and rebuild the file using\n",(0,a.kt)("inlineCode",{parentName:"p"},"npm run buildSample"),"."),(0,a.kt)("p",null,"You must edit the method ",(0,a.kt)("inlineCode",{parentName:"p"},"getMetaMaskId()")," to return your local development MetaMask instance's ID.\nYou can get that from your MetaMask console using ",(0,a.kt)("inlineCode",{parentName:"p"},"chrome.runtime.id"),"."))}m.isMDXComponent=!0}}]);