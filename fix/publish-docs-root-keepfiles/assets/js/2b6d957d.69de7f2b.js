"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[6250],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,o=e.originalType,p=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=l(a),d=s,h=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=a.length,i=new Array(o);i[0]=d;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[c]="string"==typeof e?e:s,i[1]=r;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2896:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var n=a(7462),s=(a(7294),a(3905));const o={description:"Develop, test, and publish a snap."},i="Develop a snap",r={unversionedId:"how-to/develop-a-snap",id:"how-to/develop-a-snap",title:"Develop a snap",description:"Develop, test, and publish a snap.",source:"@site/snaps/how-to/develop-a-snap.md",sourceDirName:"how-to",slug:"/how-to/develop-a-snap",permalink:"/mm-docs-v2/fix/publish-docs-root-keepfiles/snaps/how-to/develop-a-snap",draft:!1,tags:[],version:"current",frontMatter:{description:"Develop, test, and publish a snap."},sidebar:"snapsSidebar",previous:{title:"How to",permalink:"/mm-docs-v2/fix/publish-docs-root-keepfiles/snaps/category/how-to"},next:{title:"Request permissions",permalink:"/mm-docs-v2/fix/publish-docs-root-keepfiles/snaps/how-to/request-permissions"}},p={},l=[{value:"Detect the user&#39;s MetaMask version",id:"detect-the-users-metamask-version",level:2},{value:"Test your snap",id:"test-your-snap",level:2},{value:"Debug your snap",id:"debug-your-snap",level:2},{value:"Publish your snap",id:"publish-your-snap",level:2},{value:"Distribute your snap",id:"distribute-your-snap",level:2},{value:"Resources and tools",id:"resources-and-tools",level:2}],u={toc:l};function c(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"develop-a-snap"},"Develop a snap"),(0,s.kt)("p",null,"A snap can extend the dapp-facing ",(0,s.kt)("a",{parentName:"p",href:"../../wallet/reference/rpc-api"},"MetaMask JSON-RPC API")," in\narbitrary ways, or integrate with and extend the functionality of MetaMask using the\n",(0,s.kt)("a",{parentName:"p",href:"/mm-docs-v2/fix/publish-docs-root-keepfiles/snaps/reference/rpc-api"},"Snaps JSON-RPC API")," and ",(0,s.kt)("a",{parentName:"p",href:"/mm-docs-v2/fix/publish-docs-root-keepfiles/snaps/how-to/request-permissions"},"permissions"),"."),(0,s.kt)("p",null,"Before developing a snap, it's important to understand:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/mm-docs-v2/fix/publish-docs-root-keepfiles/snaps/concepts/anatomy"},"The snap anatomy"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/mm-docs-v2/fix/publish-docs-root-keepfiles/snaps/concepts/lifecycle"},"The snap lifecycle"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/mm-docs-v2/fix/publish-docs-root-keepfiles/snaps/concepts/user-interface"},"The snap user interface"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/mm-docs-v2/fix/publish-docs-root-keepfiles/snaps/concepts/execution-environment"},"The Snaps execution environment"),".")),(0,s.kt)("p",null,"You can ",(0,s.kt)("a",{parentName:"p",href:"/mm-docs-v2/fix/publish-docs-root-keepfiles/snaps/get-started/quickstart"},"get started quickly using the Snaps template")," or follow a\n",(0,s.kt)("a",{parentName:"p",href:"../category/tutorials"},"tutorial"),"."),(0,s.kt)("p",null,"This page describes additional important steps when developing a snap."),(0,s.kt)("h2",{id:"detect-the-users-metamask-version"},"Detect the user's MetaMask version"),(0,s.kt)("p",null,"When developing a website that depends on Snaps, you need to know whether the user has\n",(0,s.kt)("a",{parentName:"p",href:"/mm-docs-v2/fix/publish-docs-root-keepfiles/snaps/get-started/install-snaps#install-metamask-flask"},"MetaMask Flask")," installed."),(0,s.kt)("p",null,"We recommend calling the\n",(0,s.kt)("a",{parentName:"p",href:"https://metamask.github.io/api-playground/api-documentation/#web3_clientVersion"},(0,s.kt)("inlineCode",{parentName:"a"},"web3_clientVersion")),"\nMetaMask RPC method to obtain this information.\nThe following example uses the\n",(0,s.kt)("a",{parentName:"p",href:"https://npmjs.com/package/@metamask/detect-provider"},(0,s.kt)("inlineCode",{parentName:"a"},"@metamask/detect-provider"))," package to get\nthe provider object from MetaMask first:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import detectEthereumProvider from '@metamask/detect-provider';\n\n// This resolves to the value of window.ethereum or null\nconst provider = await detectEthereumProvider();\n\n// web3_clientVersion returns the installed MetaMask version as a string\nconst isFlask = (\n  await provider?.request({ method: 'web3_clientVersion' })\n)?.includes('flask');\n\nif (provider && isFlask) {\n  console.log('MetaMask Flask successfully detected!');\n\n  // Now you can use Snaps!\n} else {\n  console.error('Please install MetaMask Flask!', error);\n}\n")),(0,s.kt)("h2",{id:"test-your-snap"},"Test your snap"),(0,s.kt)("p",null,"Test your snap by hosting it locally using ",(0,s.kt)("inlineCode",{parentName:"p"},"mm-snap serve"),", installing it in Flask, and calling its\nAPI methods from a web page."),(0,s.kt)("h2",{id:"debug-your-snap"},"Debug your snap"),(0,s.kt)("p",null,"To debug your snap, use ",(0,s.kt)("inlineCode",{parentName:"p"},"console.log")," and inspect the MetaMask background process.\nYou can add your log statements in your source code and build your snap, or add them directly\nto your snap bundle and use ",(0,s.kt)("inlineCode",{parentName:"p"},"mm-snap manifest --fix")," to update the ",(0,s.kt)("inlineCode",{parentName:"p"},"shasum")," in your snap manifest file.\nThe manifest ",(0,s.kt)("inlineCode",{parentName:"p"},"shasum")," must match the contents of your bundle at the time MetaMask fetches your snap."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Because adding logs modifies the snap source code, you must re-install the snap whenever you add a\nlog statement.")),(0,s.kt)("p",null,"The snap log output is only visible in the extension background process console.\nIf you're using a Chromium browser, use the following steps to inspect the background process and\nview its console:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Go to ",(0,s.kt)("inlineCode",{parentName:"li"},"chrome://extensions"),"."),(0,s.kt)("li",{parentName:"ol"},"Toggle ",(0,s.kt)("strong",{parentName:"li"},"Developer mode")," on in the top right corner."),(0,s.kt)("li",{parentName:"ol"},"Find MetaMask Flask, and select ",(0,s.kt)("strong",{parentName:"li"},"Details"),"."),(0,s.kt)("li",{parentName:"ol"},"Under ",(0,s.kt)("strong",{parentName:"li"},"Inspect views"),", select ",(0,s.kt)("inlineCode",{parentName:"li"},"background.html"),".")),(0,s.kt)("p",null,"The log output displays in the console that pops up."),(0,s.kt)("h2",{id:"publish-your-snap"},"Publish your snap"),(0,s.kt)("p",null,"Snaps are npm packages, so publishing a snap is as simple as publishing an npm package.\nRefer to the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v8/commands/npm-publish"},"npm CLI documentation")," for details\non publishing to the public registry.\nThe following details are specific to Snaps:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The version in ",(0,s.kt)("inlineCode",{parentName:"li"},"package.json")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"snap.manifest.json")," must match."),(0,s.kt)("li",{parentName:"ul"},"The image specified in ",(0,s.kt)("inlineCode",{parentName:"li"},"iconPath")," in the manifest file is used as the icon displayed when\ninstalling and displaying confirmations from the snap.")),(0,s.kt)("p",null,"After publishing the snap, any dapp can connect to the snap by using the snap ID ",(0,s.kt)("inlineCode",{parentName:"p"},"npm:[packageName]"),"."),(0,s.kt)("h2",{id:"distribute-your-snap"},"Distribute your snap"),(0,s.kt)("p",null,"Since snaps are currently intended for a developer audience, MetaMask doesn't currently facilitate\ndistributing snaps to a wide audience.\nIf you have a website that expects the user to install a snap, ask the user to install MetaMask\nFlask, and then ask the user to install the snap using the\n",(0,s.kt)("a",{parentName:"p",href:"/mm-docs-v2/fix/publish-docs-root-keepfiles/snaps/reference/rpc-api#wallet_enable"},(0,s.kt)("inlineCode",{parentName:"a"},"wallet_enable"))," API method."),(0,s.kt)("p",null,"In the future, MetaMask will create some way for users to more easily discover snaps, but everyone\ncan always build, publish, and use snaps without MetaMask's permission.\n(Although we may try to make it difficult to use known scams.)"),(0,s.kt)("h2",{id:"resources-and-tools"},"Resources and tools"),(0,s.kt)("p",null,"You can review the growing number of\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps-monorepo/tree/main/packages/examples"},"example snaps")," maintained\nby MetaMask, as well as the following fully functional and open source snaps:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/ConsenSys/starknet-snap"},"StarkNet")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/Chainsafe/filsnap/"},"FilSnap for Filecoin")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/ritave/snap-passwordManager"},"Password Manager Snap")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/Montoya/tx-simulation-with-ganache-snap"},"Transaction Simulation with Ganache"),"\n(uses Truffle for local testing)")),(0,s.kt)("p",null,"MetaMask also maintains tools to help developers build, debug, and maintain snaps:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/MetaMask/template-snap-monorepo"},"Template snap")," - A template that includes\nTypeScript/React and vanilla JavaScript options and a CLI for building, packaging, and deploying\nyour snap and a companion dapp."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://trufflesuite.com/boxes/metamask-snap-box/"},"Snaps Truffle Box")," - A template that combines\nthe TypeScript template snap and Truffle so you can easily test snaps that use smart contracts\nwith Ganache."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/MetaMask/test-snaps"},"Test snaps")," - A collection of test snaps and a dapp for\nevaluating them.")),(0,s.kt)("p",null,"If you have any questions, ask them on\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps-monorepo/discussions"},"GitHub discussions"),", and if you encounter\nany issues, please ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps-monorepo/issues"},"open a GitHub issue"),"."))}c.isMDXComponent=!0}}]);