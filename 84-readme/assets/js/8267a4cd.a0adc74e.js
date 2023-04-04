"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[1687],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},579:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={description:"Solve common issues."},s="Troubleshoot",i={unversionedId:"how-to/troubleshoot",id:"how-to/troubleshoot",title:"Troubleshoot",description:"Solve common issues.",source:"@site/snaps/how-to/troubleshoot.md",sourceDirName:"how-to",slug:"/how-to/troubleshoot",permalink:"/mm-docs-v2/84-readme/snaps/how-to/troubleshoot",draft:!1,tags:[],version:"current",frontMatter:{description:"Solve common issues."},sidebar:"snapsSidebar",previous:{title:"Use custom UI",permalink:"/mm-docs-v2/84-readme/snaps/how-to/use-custom-ui"},next:{title:"Concepts",permalink:"/mm-docs-v2/84-readme/snaps/category/concepts"}},l={},p=[{value:"Fix build and evaluation issues",id:"fix-build-and-evaluation-issues",level:2},{value:"Use other build tools",id:"use-other-build-tools",level:3},{value:"Patch dependencies",id:"patch-dependencies",level:2},{value:"Patch the use of <code>XMLHttpRequest</code>",id:"patch-the-use-of-xmlhttprequest",level:3},{value:"<code>cross-fetch</code>",id:"cross-fetch",level:3},{value:"<code>axios</code>",id:"axios",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"troubleshoot"},"Troubleshoot"),(0,o.kt)("p",null,"This page describes common issues you may encounter when developing a snap, and how to resolve them."),(0,o.kt)("p",null,"If you encounter any issues that you can't solve on your own, please\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps-monorepo/issues"},"open a GitHub issue"),"."),(0,o.kt)("h2",{id:"fix-build-and-evaluation-issues"},"Fix build and evaluation issues"),(0,o.kt)("p",null,"Because ",(0,o.kt)("a",{parentName:"p",href:"/mm-docs-v2/84-readme/snaps/concepts/execution-environment"},"Secure ECMAScript (SES)")," adds additional restrictions\non the JavaScript runtime on top of strict mode, code that executes normally under strict mode might\nnot under SES.\n",(0,o.kt)("inlineCode",{parentName:"p"},"mm-snap build")," by default attempts to execute a snap in a stubbed SES environment.\nYou can also disable this behavior and run the evaluation step separately using ",(0,o.kt)("inlineCode",{parentName:"p"},"mm-snap eval"),".\nIf an error is thrown during this step, it's likely due to a SES incompatibility, and you must fix\nthe issues manually.\nThese incompatibilities tend to occur in dependencies."),(0,o.kt)("p",null,"While the errors you get from SES may seem scary, they're usually not that hard to fix.\nThe actual file, function, and variable names in the ",(0,o.kt)("inlineCode",{parentName:"p"},"mm-snap eval")," error stack trace might not make\na lot of sense to you, but the line numbers should correspond to your snap\n",(0,o.kt)("a",{parentName:"p",href:"/mm-docs-v2/84-readme/snaps/concepts/anatomy#bundle-file"},"bundle file"),".\nThus, you can identify if the error is due to your code or one of your dependencies.\nIf the problem is in a dependency, you can try a different version or to fix the issue locally by\nusing tools such as ",(0,o.kt)("a",{parentName:"p",href:"https://npmjs.com/package/patch-package"},(0,o.kt)("inlineCode",{parentName:"a"},"patch-package"))," (see how to\n",(0,o.kt)("a",{parentName:"p",href:"#patch-dependencies"},"patch dependencies"),") or by modifying the bundle file directly."),(0,o.kt)("p",null,'To give you an idea of a common error and how to fix it, "sloppily" declared variables (i.e.\nassigning to a new variable without an explicit variable declaration) are forbidden in strict mode,\nand therefore in SES as well.\nIf you get an error during the ',(0,o.kt)("inlineCode",{parentName:"p"},"eval")," step that says something like ",(0,o.kt)("inlineCode",{parentName:"p"},"variableName is not defined"),",\nsimply prepending ",(0,o.kt)("inlineCode",{parentName:"p"},"var variableName;")," to your snap bundle may solve the problem.\n(This actually happened so frequently with ",(0,o.kt)("a",{parentName:"p",href:"https://babeljs.io/"},"Babel's")," ",(0,o.kt)("inlineCode",{parentName:"p"},"regeneratorRuntime")," that\n",(0,o.kt)("inlineCode",{parentName:"p"},"mm-snap build")," automatically handles that one.)"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"mm-snap manifest --fix")," if you modified your snap bundle after building.\nOtherwise your manifest ",(0,o.kt)("inlineCode",{parentName:"p"},"shasum")," value won't be correct, and attempting to install your snap fails.")),(0,o.kt)("h3",{id:"use-other-build-tools"},"Use other build tools"),(0,o.kt)("p",null,"If you prefer building your snap with a build system you're more comfortable with, Snaps implements\nplugins for several other build systems:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@metamask/snaps-webpack-plugin"},"Webpack")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@metamask/rollup-plugin-snaps"},"Rollup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@metamask/snaps-browserify-plugin"},"Browserify"))),(0,o.kt)("p",null,"For examples on how to set up these build systems yourself, please see the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps-monorepo/tree/main/packages/examples/examples"},"examples"),"."),(0,o.kt)("p",null,"We still recommend using the Snaps CLI to make sure your manifest ",(0,o.kt)("inlineCode",{parentName:"p"},"shasum")," value is correct, by\nrunning ",(0,o.kt)("inlineCode",{parentName:"p"},"mm-snap manifest --fix")," after creating your bundle.\nYou may also benefit from running ",(0,o.kt)("inlineCode",{parentName:"p"},"mm-snap eval")," to detect any SES issues up front."),(0,o.kt)("h2",{id:"patch-dependencies"},"Patch dependencies"),(0,o.kt)("p",null,"Some dependencies might make use of APIs that aren't available in the\n",(0,o.kt)("a",{parentName:"p",href:"/mm-docs-v2/84-readme/snaps/concepts/execution-environment"},"Snaps execution environment"),".\nTo work around this, we recommend checking if another library is available that makes use of those APIs."),(0,o.kt)("p",null,"If you can't find another library (or version) that works with the Snaps execution environment, you\ncan patch the dependency yourself using ",(0,o.kt)("a",{parentName:"p",href:"https://npmjs.com/package/patch-package"},(0,o.kt)("inlineCode",{parentName:"a"},"patch-package")),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"patch-package")," allows you to make changes to your dependencies, saving the changes as a patch and\nreplaying it when installing dependencies."),(0,o.kt)("p",null,"Install ",(0,o.kt)("inlineCode",{parentName:"p"},"patch-package")," using Yarn:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add -D patch-package postinstall-postinstall\n")),(0,o.kt)("p",null,"Then add a postinstall script to your ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},' "scripts": {\n+  "postinstall": "patch-package"\n }\n')),(0,o.kt)("p",null,"Now you can make changes to your dependencies inside ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," and run\n",(0,o.kt)("inlineCode",{parentName:"p"},"yarn patch-package package-name")," to save the changes as a patch.\nThis creates a ",(0,o.kt)("inlineCode",{parentName:"p"},".patch")," file containing your dependency patch.\nThese patches can be committed to your Git repository and are replayed when you re-install your dependencies."),(0,o.kt)("h3",{id:"patch-the-use-of-xmlhttprequest"},"Patch the use of ",(0,o.kt)("inlineCode",{parentName:"h3"},"XMLHttpRequest")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," API is not exposed in the Snaps execution environment and won't be in the future.\nBecause of this, you may run into issues with dependencies in your dependency tree attempting to\nuse this API for their network requests."),(0,o.kt)("p",null,"The following are examples of popular libraries that use ",(0,o.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," and are thus ",(0,o.kt)("strong",{parentName:"p"},"not"),"\ncompatible with the Snaps execution environment.\nThis section also describes patching strategies for fixing dependencies that try to use these libraries."),(0,o.kt)("h3",{id:"cross-fetch"},(0,o.kt)("inlineCode",{parentName:"h3"},"cross-fetch")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cross-fetch")," is a popular library used for cross-platform access to the ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch")," API across multiple\nenvironments.\nUnder the hood, however, the library uses ",(0,o.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," and thus causes issues when used in a snap."),(0,o.kt)("p",null,"You can easily patch this issue using ",(0,o.kt)("inlineCode",{parentName:"p"},"patch-package"),".\nOpen ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules/cross-fetch/browser-ponyfill.js")," and find the following lines near the bottom of\nthe file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Choose between native implementation (global) or custom implementation (__self__)\n// var ctx = global.fetch ? global : __self__;\nvar ctx = __self__; // this line disable service worker support temporarily\n")),(0,o.kt)("p",null,"You can replace that with the following snippet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Choose between native implementation (global) or custom implementation (__self__)\nvar ctx = global.fetch\n  ? { ...global, fetch: global.fetch.bind(global) }\n  : __self__;\n// var ctx = __self__; // this line disable service worker support temporarily\n")),(0,o.kt)("p",null,"After replacing it, run ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn patch-package cross-fetch"),", which saves the patch for future use."),(0,o.kt)("p",null,"Alternatively, you can use the following patch, copy and paste it to\n",(0,o.kt)("inlineCode",{parentName:"p"},"patches/cross-fetch+3.1.5.patch"),", and re-install your dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"diff --git a/node_modules/cross-fetch/dist/browser-ponyfill.js b/node_modules/cross-fetch/dist/browser-ponyfill.js\nindex f216aa3..6b3263b 100644\n--- a/node_modules/cross-fetch/dist/browser-ponyfill.js\n+++ b/node_modules/cross-fetch/dist/browser-ponyfill.js\n@@ -543,8 +543,8 @@ __self__.fetch.ponyfill = true;\n // Remove \"polyfill\" property added by whatwg-fetch\n delete __self__.fetch.polyfill;\n // Choose between native implementation (global) or custom implementation (__self__)\n-// var ctx = global.fetch ? global : __self__;\n-var ctx = __self__; // this line disable service worker support temporarily\n+var ctx = global.fetch ? { ...global, fetch: global.fetch.bind(global) } : __self__;\n+// var ctx = __self__; // this line disable service worker support temporarily\n exports = ctx.fetch // To enable: import fetch from 'cross-fetch'\n exports.default = ctx.fetch // For TypeScript consumers without esModuleInterop.\n exports.fetch = ctx.fetch // To enable: import {fetch} from 'cross-fetch'\n")),(0,o.kt)("p",null,"Using either of these methods allows your dependencies to access the ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch")," API correctly and\n",(0,o.kt)("inlineCode",{parentName:"p"},"cross-fetch")," compatible with the Snaps execution environment."),(0,o.kt)("h3",{id:"axios"},(0,o.kt)("inlineCode",{parentName:"h3"},"axios")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"axios")," is a popular networking library that uses ",(0,o.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," under the hood."),(0,o.kt)("p",null,"Currently, there's no known way of patching ",(0,o.kt)("inlineCode",{parentName:"p"},"axios")," to work with the Snaps execution environment.\nInstead, you must replace ",(0,o.kt)("inlineCode",{parentName:"p"},"axios")," with another library such as ",(0,o.kt)("inlineCode",{parentName:"p"},"isomorphic-fetch")," or\n",(0,o.kt)("inlineCode",{parentName:"p"},"isomorphic-unfetch"),", or simply use the Snaps execution environment global ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch"),"."),(0,o.kt)("p",null,"The following is an example of how you can rewrite your dependency to use ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"axios"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"In a production environment this may be a large task depending on the usage of ",(0,o.kt)("inlineCode",{parentName:"p"},"axios"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"axios")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const instance = axios.create({\n  baseURL: 'https://api.github.com/',\n});\n\ninstance\n  .get('users/MetaMask')\n  .then((res) => {\n    if (res.status >= 400) {\n      throw new Error('Bad response from server');\n    }\n    return res.data;\n  })\n  .then((user) => {\n    console.log(user);\n  })\n  .catch((err) => {\n    console.error(err);\n  });\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"fetch")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"fetch('https://api.github.com/users/MetaMask')\n  .then((res) => {\n    if (!res.ok) {\n      throw new Error('Bad response from server');\n    }\n    return res.json();\n  })\n  .then((json) => console.log(json))\n  .catch((err) => console.error(err));\n")),(0,o.kt)("p",null,"More resources:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper"},"Replace axios with a simple custom fetch wrapper"))))}u.isMDXComponent=!0}}]);