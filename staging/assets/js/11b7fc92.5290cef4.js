"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[7050],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,u=p["".concat(c,".").concat(m)]||p[m]||h[m]||o;return n?a.createElement(u,i(i({ref:t},d),{},{components:n})):a.createElement(u,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8792:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={},i="Ethereum provider API",s={unversionedId:"reference/provider-api",id:"reference/provider-api",title:"Ethereum provider API",description:"MetaMask injects a global JavaScript API into websites visited by its users at window.ethereum.",source:"@site/wallet/reference/provider-api.md",sourceDirName:"reference",slug:"/reference/provider-api",permalink:"/wallet/reference/provider-api",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"walletSidebar",previous:{title:"Reference",permalink:"/wallet/category/reference"},next:{title:"RPC API",permalink:"/wallet/reference/rpc-api"}},c={},l=[{value:"Properties",id:"properties",level:2},{value:"<code>ethereum.isMetaMask</code>",id:"ethereumismetamask",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>ethereum.isConnected()</code>",id:"ethereumisconnected",level:3},{value:"<code>ethereum.request(args)</code>",id:"ethereumrequestargs",level:3},{value:"Example",id:"example",level:4},{value:"Events",id:"events",level:2},{value:"<code>connect</code>",id:"connect",level:3},{value:"<code>disconnect</code>",id:"disconnect",level:3},{value:"<code>accountsChanged</code>",id:"accountschanged",level:3},{value:"<code>chainChanged</code>",id:"chainchanged",level:3},{value:"<code>message</code>",id:"message",level:3},{value:"Errors",id:"errors",level:2},{value:"Experimental API",id:"experimental-api",level:2},{value:"<code>ethereum._metamask.isUnlocked()</code>",id:"ethereum_metamaskisunlocked",level:3}],d={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ethereum-provider-api"},"Ethereum provider API"),(0,r.kt)("p",null,"MetaMask injects a global JavaScript API into websites visited by its users at ",(0,r.kt)("inlineCode",{parentName:"p"},"window.ethereum"),".\nThis API allows websites to request users' Ethereum accounts, read data from blockchains the user is\nconnected to, and suggest that the user sign messages and transactions."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"ethereumismetamask"},(0,r.kt)("inlineCode",{parentName:"h3"},"ethereum.isMetaMask")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This property is non-standard.\nNon-MetaMask providers may also set this property to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),".")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"true")," if the user has MetaMask installed."),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"ethereumisconnected"},(0,r.kt)("inlineCode",{parentName:"h3"},"ethereum.isConnected()")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This method has nothing to do with the user's accounts."),(0,r.kt)("p",{parentName:"admonition"},'You may often encounter the word "connected" in reference to whether a Web3 site can access the\nuser\'s accounts.\nIn the provider interface, however, "connected" and "disconnected" refer to whether the provider can\nmake RPC requests to the current chain.')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"ethereum.isConnected(): boolean;\n")),(0,r.kt)("p",null,"Returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if the provider is connected to the current chain, and ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,r.kt)("p",null,"If the provider is not connected, the page must be reloaded in order for connection to be re-established.\nPlease see the ",(0,r.kt)("a",{parentName:"p",href:"#connect"},(0,r.kt)("inlineCode",{parentName:"a"},"connect"))," and ",(0,r.kt)("a",{parentName:"p",href:"#disconnect"},(0,r.kt)("inlineCode",{parentName:"a"},"disconnect"))," events for more information."),(0,r.kt)("h3",{id:"ethereumrequestargs"},(0,r.kt)("inlineCode",{parentName:"h3"},"ethereum.request(args)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface RequestArguments {\n  method: string;\n  params?: unknown[] | object;\n}\n\nethereum.request(args: RequestArguments): Promise<unknown>;\n")),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"request")," to submit RPC requests to Ethereum via MetaMask.\nIt returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise")," that resolves to the result of the RPC method call."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," and return value vary by RPC method.\nIn practice, if a method has any ",(0,r.kt)("inlineCode",{parentName:"p"},"params"),", they are almost always of type ",(0,r.kt)("inlineCode",{parentName:"p"},"Array<any>"),"."),(0,r.kt)("p",null,"If the request fails for any reason, the Promise rejects with an ",(0,r.kt)("a",{parentName:"p",href:"#errors"},"Ethereum RPC Error"),"."),(0,r.kt)("p",null,"MetaMask supports most standardized Ethereum RPC methods, in addition to a number of methods that\nmay not be supported by other wallets.\nSee the MetaMask ",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/rpc-api"},"RPC API documentation")," for details."),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"params: [\n  {\n    from: '0xb60e8dd61c5d32be8058bb8eb970870f07233155',\n    to: '0xd46e8dd67c5d32be8058bb8eb970870f07244567',\n    gas: '0x76c0', // 30400\n    gasPrice: '0x9184e72a000', // 10000000000000\n    value: '0x9184e72a', // 2441406250\n    data:\n      '0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675',\n  },\n];\n\nethereum\n  .request({\n    method: 'eth_sendTransaction',\n    params,\n  })\n  .then((result) => {\n    // The result varies by RPC method.\n    // For example, this method will return a transaction hash hexadecimal string on success.\n  })\n  .catch((error) => {\n    // If the request fails, the Promise will reject with an error.\n  });\n")),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("p",null,"The MetaMask provider implements the ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/events.html"},"Node.js ",(0,r.kt)("inlineCode",{parentName:"a"},"EventEmitter"))," API.\nThis sections details the events emitted via that API.\nThere are innumerable ",(0,r.kt)("inlineCode",{parentName:"p"},"EventEmitter")," guides elsewhere, but you can listen for events like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"ethereum.on('accountsChanged', (accounts) => {\n  // Handle the new accounts, or lack thereof.\n  // \"accounts\" will always be an array, but it can be empty.\n});\n\nethereum.on('chainChanged', (chainId) => {\n  // Handle the new chain.\n  // Correctly handling chain changes can be complicated.\n  // We recommend reloading the page unless you have good reason not to.\n  window.location.reload();\n});\n")),(0,r.kt)("p",null,"Also, don't forget to remove listeners once you are done listening to them (for example on component\nunmount in React):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function handleAccountsChanged(accounts) {\n  // ...\n}\n\nethereum.on('accountsChanged', handleAccountsChanged);\n\n// Later\n\nethereum.removeListener('accountsChanged', handleAccountsChanged);\n")),(0,r.kt)("p",null,"The first argument of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ethereum.removeListener")," is the event name and the second argument is the\nreference to the same function which has passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"ethereum.on")," for the event name mentioned in the\nfirst argument."),(0,r.kt)("h3",{id:"connect"},(0,r.kt)("inlineCode",{parentName:"h3"},"connect")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ConnectInfo {\n  chainId: string;\n}\n\nethereum.on('connect', handler: (connectInfo: ConnectInfo) => void);\n")),(0,r.kt)("p",null,"The MetaMask provider emits this event when it first becomes able to submit RPC requests to a chain.\nWe recommend using a ",(0,r.kt)("inlineCode",{parentName:"p"},"connect")," event handler and the ",(0,r.kt)("a",{parentName:"p",href:"#ethereum-isconnected"},(0,r.kt)("inlineCode",{parentName:"a"},"ethereum.isConnected()")," method")," in order to determine when/if the provider is connected."),(0,r.kt)("h3",{id:"disconnect"},(0,r.kt)("inlineCode",{parentName:"h3"},"disconnect")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"ethereum.on('disconnect', handler: (error: ProviderRpcError) => void);\n")),(0,r.kt)("p",null,"The MetaMask provider emits this event if it becomes unable to submit RPC requests to any chain.\nIn general, this only happens due to network connectivity issues or some unforeseen error."),(0,r.kt)("p",null,"Once ",(0,r.kt)("inlineCode",{parentName:"p"},"disconnect")," is emitted, the provider doesn't accept any new requests until the connection to\nthe chain is re-established, which requires reloading the page.\nYou can also use the ",(0,r.kt)("a",{parentName:"p",href:"#ethereumisconnected"},(0,r.kt)("inlineCode",{parentName:"a"},"ethereum.isConnected()")," method")," to determine if the\nprovider is disconnected."),(0,r.kt)("h3",{id:"accountschanged"},(0,r.kt)("inlineCode",{parentName:"h3"},"accountsChanged")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"ethereum.on('accountsChanged', handler: (accounts: Array<string>) => void);\n")),(0,r.kt)("p",null,"The MetaMask provider emits this event whenever the return value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_accounts")," RPC method changes.\n",(0,r.kt)("inlineCode",{parentName:"p"},"eth_accounts")," returns an array that is either empty or contains a single account address.\nThe returned address, if any, is the address of the most recently used account that the caller is\npermitted to access.\nCallers are identified by their URL ",(0,r.kt)("em",{parentName:"p"},"origin"),", which means that all sites with the same origin share\nthe same permissions."),(0,r.kt)("p",null,"This means that ",(0,r.kt)("inlineCode",{parentName:"p"},"accountsChanged")," is emitted whenever the user's exposed account address changes."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"We plan to allow the ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_accounts")," array to be able to contain multiple addresses in the near future.")),(0,r.kt)("h3",{id:"chainchanged"},(0,r.kt)("inlineCode",{parentName:"h3"},"chainChanged")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"ethereum.on('chainChanged', handler: (chainId: string) => void);\n")),(0,r.kt)("p",null,"The MetaMask provider emits this event when the currently connected chain changes."),(0,r.kt)("p",null,"All RPC requests are submitted to the currently connected chain.\nTherefore, it's critical to keep track of the current chain ID by listening for this event."),(0,r.kt)("p",null,"We ",(0,r.kt)("em",{parentName:"p"},"strongly")," recommend reloading the page on chain changes, unless you have good reason not to."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"ethereum.on('chainChanged', (_chainId) => window.location.reload());\n")),(0,r.kt)("h3",{id:"message"},(0,r.kt)("inlineCode",{parentName:"h3"},"message")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ProviderMessage {\n  type: string;\n  data: unknown;\n}\n\nethereum.on('message', handler: (message: ProviderMessage) => void);\n")),(0,r.kt)("p",null,"The MetaMask provider emits this event when it receives some message that the consumer should be\nnotified of.\nThe kind of message is identified by the ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," string."),(0,r.kt)("p",null,"RPC subscription updates are a common use case for the ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," event.\nFor example, if you create a subscription using ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_subscribe"),", each subscription update is emitted\nas a ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," event with a ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_subscription"),"."),(0,r.kt)("h2",{id:"errors"},"Errors"),(0,r.kt)("p",null,"All errors thrown or returned by the MetaMask provider follow this interface:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ProviderRpcError extends Error {\n  message: string;\n  code: number;\n  data?: unknown;\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"#ethereumrequestargs"},(0,r.kt)("inlineCode",{parentName:"a"},"ethereum.request(args)")," method")," throws errors eagerly.\nYou can often use the error ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," property to determine why the request failed.\nCommon codes and their meaning include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"4001")," - The request is rejected by the user."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-32602")," - The parameters are invalid."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-32603")," - Internal error.")),(0,r.kt)("p",null,"For the complete list of errors, see ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1193#provider-errors"},"EIP-1193"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1474#error-codes"},"EIP-1474"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("a",{parentName:"p",href:"https://npmjs.com/package/eth-rpc-errors"},(0,r.kt)("inlineCode",{parentName:"a"},"eth-rpc-errors"))," package implements all RPC errors\nthrown by the MetaMask provider, and can help you identify their meaning.")),(0,r.kt)("h2",{id:"experimental-api"},"Experimental API"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"There's no guarantee that the methods and properties defined in this section will remain stable.\nUse it at your own risk.")),(0,r.kt)("p",null,"We expose some experimental, MetaMask-specific methods under the ",(0,r.kt)("inlineCode",{parentName:"p"},"ethereum._metamask")," property."),(0,r.kt)("h3",{id:"ethereum_metamaskisunlocked"},(0,r.kt)("inlineCode",{parentName:"h3"},"ethereum.\\_metamask.isUnlocked()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"ethereum._metamask.isUnlocked(): Promise<boolean>;\n")),(0,r.kt)("p",null,"This method returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise")," that resolves to a ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," indicating if MetaMask is unlocked by\nthe user.\nMetaMask must be unlocked in order to perform any operation involving user accounts.\nNote that this method does not indicate if the user has exposed any accounts to the caller."))}p.isMDXComponent=!0}}]);