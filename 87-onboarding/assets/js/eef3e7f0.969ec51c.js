"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[218],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8851:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"React Native"},i="Use MetaMask SDK with React Native",s={unversionedId:"how-to/use-sdk/react-native",id:"how-to/use-sdk/react-native",title:"React Native",description:"You can import MetaMask SDK into your React Native dapp to enable your users to easily connect",source:"@site/wallet/how-to/use-sdk/react-native.md",sourceDirName:"how-to/use-sdk",slug:"/how-to/use-sdk/react-native",permalink:"/mm-docs-v2/87-onboarding/wallet/how-to/use-sdk/react-native",draft:!1,tags:[],version:"current",frontMatter:{title:"React Native"},sidebar:"walletSidebar",previous:{title:"Use MetaMask SDK",permalink:"/mm-docs-v2/87-onboarding/wallet/how-to/use-sdk/"},next:{title:"Pure JavaScript",permalink:"/mm-docs-v2/87-onboarding/wallet/how-to/use-sdk/pure-js"}},l={},p=[{value:"How it works",id:"how-it-works",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install the SDK",id:"install-the-sdk",level:2},{value:"Use the SDK",id:"use-the-sdk",level:2}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-metamask-sdk-with-react-native"},"Use MetaMask SDK with React Native"),(0,r.kt)("p",null,"You can import MetaMask SDK into your React Native dapp to enable your users to easily connect\nwith their MetaMask Mobile wallet."),(0,r.kt)("h2",{id:"how-it-works"},"How it works"),(0,r.kt)("p",null,"When a user accesses your mobile React Native dapp, the SDK automatically deeplinks to MetaMask\nMobile (or if the user doesn't already have it, prompts them to install it).\nOnce the user accepts the connection, they're automatically redirected back to your dapp.\nThis happens for all actions that need user approval."),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SDK React Native example",src:n(2763).Z,width:"343",height:"709"}))),(0,r.kt)("p",null,"You can download the\n",(0,r.kt)("a",{parentName:"p",href:"https://c0f4f41c-2f55-4863-921b-sdk-docs.github.io/downloads/reactNativeApp_v0.1.0.zip"},"React Native example"),".\nInstall the example using ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn setup")," and run it using ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn ios")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn android"),"."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A React Native project set up"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-mobile"},"MetaMask Mobile")," v5.8.1 or above"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://yarnpkg.com/getting-started/install"},"Yarn")," or\n",(0,r.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"npm"))),(0,r.kt)("h2",{id:"install-the-sdk"},"Install the SDK"),(0,r.kt)("admonition",{title:"Coming soon",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"A ",(0,r.kt)("inlineCode",{parentName:"p"},"metamask-react-native-sdk")," package that simplifies the installation of the SDK for React Native\ndapps is coming soon.")),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tradle/rn-nodeify"},(0,r.kt)("inlineCode",{parentName:"a"},"rn-nodeify"))," to install the SDK.\nIn your project directory, install ",(0,r.kt)("inlineCode",{parentName:"p"},"rn-nodeify"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev rn-nodeify\nor\nnpm i --dev rn-nodeify\n")),(0,r.kt)("p",null,"Install the ",(0,r.kt)("inlineCode",{parentName:"p"},"rn-nodeify")," libraries:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-crypto\nyarn add react-native-randombytes\nyarn add crypto\nyarn add process\nyarn add stream\nyarn add events\n")),(0,r.kt)("p",null,"In your project's ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file, insert the ",(0,r.kt)("inlineCode",{parentName:"p"},"rn-nodeify")," command into the postinstall script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'"scripts": {\n  ...,\n  "postinstall": "rn-nodeify --install \'crypto,process,stream,events\' --hack"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rn-nodeify")," creates a ",(0,r.kt)("inlineCode",{parentName:"p"},"shim.js")," file in your project root directory.\nImport it in the root file of your application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"import './shim'\n")),(0,r.kt)("p",null,"Install ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-background-timer"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-background-timer\n\ncd ios && pod install && cd ..\n")),(0,r.kt)("p",null,"Install MetaMask SDK:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @metamask/sdk\n")),(0,r.kt)("p",null,"Run the postinstall script after everything is installed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn postinstall\n")),(0,r.kt)("p",null,"Finally, install the necessary pods that come with the libraries:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ios && pod install && cd ..\n")),(0,r.kt)("h2",{id:"use-the-sdk"},"Use the SDK"),(0,r.kt)("p",null,"Import, instantiate, and use the SDK by adding something similar to the following to your project script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import MetaMaskSDK from '@metamask/sdk';\nimport { Linking } from 'react-native';\nimport BackgroundTimer from 'react-native-background-timer';\n\nconst MMSDK = new MetaMaskSDK({\n  openDeeplink: (link) => {\n    Linking.openURL(link); // Use React Native Linking method or another way of opening deeplinks.\n  },\n  timer: BackgroundTimer, // To keep the dapp alive once it goes to background.\n  dappMetadata: {\n    name: 'My dapp', // The name of your dapp.\n    url: 'https://mydapp.com', // The URL of your website.\n  },\n});\n\nconst ethereum = MMSDK.getProvider();\n\nconst accounts = await ethereum.request({ method: 'eth_requestAccounts' });\n")),(0,r.kt)("p",null,"You can configure the SDK using any ",(0,r.kt)("a",{parentName:"p",href:"/mm-docs-v2/87-onboarding/wallet/reference/sdk-js-options"},"options")," and call any\n",(0,r.kt)("a",{parentName:"p",href:"/mm-docs-v2/87-onboarding/wallet/reference/provider-api"},"provider API methods"),".\nAlways call ",(0,r.kt)("a",{parentName:"p",href:"/mm-docs-v2/87-onboarding/wallet/reference/rpc-api#eth_requestaccounts"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_requestAccounts"))," using\n",(0,r.kt)("a",{parentName:"p",href:"/mm-docs-v2/87-onboarding/wallet/reference/provider-api#ethereumrequestargs"},(0,r.kt)("inlineCode",{parentName:"a"},"ethereum.request()"))," first, since it prompts\nthe installation or connection popup to appear."),(0,r.kt)("p",null,"You can use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.ethers.io/v5/getting-started/"},"EthersJS")," with your React Native app:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const provider = new ethers.providers.Web3Provider(ethereum);\n\n// Get the balance of an account (by address or ENS name, if supported by network).\nconst balance = await provider.getBalance(ethereum.selectedAddress);\n\n// Often you need to format the output to something more user-friendly,\n// such as in ether (instead of wei).\nconst balanceInETH = ethers.utils.formatEther(balance);\n// '0.182826475815887608'\n")))}d.isMDXComponent=!0},2763:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sdk-react-native-c931150bc6243e48f8497cf01c2a438c.gif"}}]);