"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[4647],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=p(a),c=r,m=h["".concat(o,".").concat(c)]||h[c]||u[c]||i;return a?n.createElement(m,s(s({ref:t},d),{},{components:a})):n.createElement(m,s({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[h]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7380:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={description:"MetaMask Ethereum JSON-RPC API reference"},s="JSON-RPC API",l={unversionedId:"reference/rpc-api",id:"reference/rpc-api",title:"JSON-RPC API",description:"MetaMask Ethereum JSON-RPC API reference",source:"@site/wallet/reference/rpc-api.md",sourceDirName:"reference",slug:"/reference/rpc-api",permalink:"/aakers/search/wallet/reference/rpc-api",draft:!1,tags:[],version:"current",frontMatter:{description:"MetaMask Ethereum JSON-RPC API reference"},sidebar:"walletSidebar",previous:{title:"Ethereum provider API",permalink:"/aakers/search/wallet/reference/provider-api"},next:{title:"MetaMask JavaScript SDK options",permalink:"/aakers/search/wallet/reference/sdk-js-options"}},o={},p=[{value:"Restricted methods",id:"restricted-methods",level:2},{value:"Unrestricted methods",id:"unrestricted-methods",level:2},{value:"eth_requestAccounts",id:"eth_requestaccounts",level:3},{value:"Returns",id:"returns",level:4},{value:"Example",id:"example",level:4},{value:"wallet_getPermissions",id:"wallet_getpermissions",level:3},{value:"Returns",id:"returns-1",level:4},{value:"wallet_requestPermissions",id:"wallet_requestpermissions",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Example",id:"example-1",level:4},{value:"wallet_addEthereumChain",id:"wallet_addethereumchain",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Example",id:"example-2",level:4},{value:"wallet_switchEthereumChain",id:"wallet_switchethereumchain",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Example",id:"example-3",level:4},{value:"wallet_registerOnboarding",id:"wallet_registeronboarding",level:3},{value:"Returns",id:"returns-5",level:4},{value:"wallet_watchAsset",id:"wallet_watchasset",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Example",id:"example-4",level:4},{value:"wallet_scanQRCode",id:"wallet_scanqrcode",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Example",id:"example-5",level:4}],d={toc:p};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"json-rpc-api"},"JSON-RPC API"),(0,r.kt)("p",null,"MetaMask uses the ",(0,r.kt)("a",{parentName:"p",href:"/aakers/search/wallet/reference/provider-api#windowethereumrequest--args-"},(0,r.kt)("inlineCode",{parentName:"a"},"window.ethereum.request(args)")),"\nprovider method to wrap a JSON-RPC API.\nThe API contains standard Ethereum JSON-RPC API methods and MetaMask-specific methods."),(0,r.kt)("admonition",{title:"MetaMask API playground",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The RPC methods are documented in the interactive\n",(0,r.kt)("a",{parentName:"p",href:"https://metamask.github.io/api-playground/api-documentation/"},"MetaMask JSON-RPC API Playground"),".")),(0,r.kt)("p",null,"Methods in the API playground may have the following tags:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MetaMask")," - These methods behave in ways specific to MetaMask, and may or may not be supported\nby other wallets.\nSome of these methods are documented in more detail on this page."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Restricted")," - These methods are ",(0,r.kt)("a",{parentName:"li",href:"#restricted-methods"},"restricted"),", which require requesting\npermission using ",(0,r.kt)("a",{parentName:"li",href:"#walletrequestpermissions"},(0,r.kt)("inlineCode",{parentName:"a"},"wallet_requestPermissions")),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Mobile")," - These methods are only available on MetaMask Mobile.")),(0,r.kt)("p",null,"For more information on the standard Ethereum RPC methods, see the\n",(0,r.kt)("a",{parentName:"p",href:"https://eth.wiki/json-rpc/API#json-rpc-methods"},"Ethereum wiki"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"All RPC method requests can return errors.\nMake sure to handle errors for every call to\n",(0,r.kt)("a",{parentName:"p",href:"/aakers/search/wallet/reference/provider-api#windowethereumrequest--args-"},(0,r.kt)("inlineCode",{parentName:"a"},"window.ethereum.request(args)")),".")),(0,r.kt)("h2",{id:"restricted-methods"},"Restricted methods"),(0,r.kt)("p",null,"MetaMask introduced web3 wallet permissions in ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-2255"},"EIP-2255"),".\nIn this permissions system, each RPC method is restricted or unrestricted.\nIf a method is restricted, the caller must request permission to call it using\n",(0,r.kt)("a",{parentName:"p",href:"#walletrequestpermissions"},(0,r.kt)("inlineCode",{parentName:"a"},"wallet_requestPermssions")),".\nUnder the hood, permissions are plain, JSON-compatible objects, with fields that are mostly used\ninternally by MetaMask."),(0,r.kt)("p",null,"Outside of ",(0,r.kt)("a",{parentName:"p",href:"../../snaps/reference/rpc-api#restricted-methods"},"Snaps restricted methods"),", the only\nrestricted method is\n",(0,r.kt)("a",{parentName:"p",href:"https://metamask.github.io/api-playground/api-documentation/#eth_accounts"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_accounts")),", which\nallows you to access the user's Ethereum accounts.\nMore restricted methods will be added in the future."),(0,r.kt)("h2",{id:"unrestricted-methods"},"Unrestricted methods"),(0,r.kt)("p",null,"Unrestricted methods have no corresponding permission, but they might still rely on permissions to\nsucceed (for example, the signing methods require calling the restricted\n",(0,r.kt)("a",{parentName:"p",href:"https://metamask.github.io/api-playground/api-documentation/#eth_accounts"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_accounts"))," method),\nor they might require confirmation by the user (for example,\n",(0,r.kt)("a",{parentName:"p",href:"#walletaddethereumchain"},(0,r.kt)("inlineCode",{parentName:"a"},"wallet_addEthereumChain")),")."),(0,r.kt)("p",null,"The following are some MetaMask-specific unrestricted methods.\nFor the full list of MetaMask JSON-RPC API methods, see the\n",(0,r.kt)("a",{parentName:"p",href:"https://metamask.github.io/api-playground/api-documentation/"},"API playground"),"."),(0,r.kt)("h3",{id:"eth_requestaccounts"},"eth_requestAccounts"),(0,r.kt)("p",null,"Requests that the user provide an Ethereum address to be identified by.\nUse this method to ",(0,r.kt)("a",{parentName:"p",href:"/aakers/search/wallet/get-started/access-accounts"},"access a user's accounts"),"."),(0,r.kt)("p",null,"This method is specified by ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1102"},"EIP-1102"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Internally, this method calls ",(0,r.kt)("a",{parentName:"p",href:"#walletrequestpermissions"},(0,r.kt)("inlineCode",{parentName:"a"},"wallet_requestPermissions"))," for\npermission to call ",(0,r.kt)("a",{parentName:"p",href:"https://metamask.github.io/api-playground/api-documentation/#eth_accounts"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_accounts")),".")),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,"If the user accepts the request, this method returns an array of a single, hexadecimal Ethereum\naddress string.\nIf they reject the request, this method rejects with a ",(0,r.kt)("inlineCode",{parentName:"p"},"4001")," error."),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"document.getElementById('connectButton', connect);\n\nfunction connect() {\n  ethereum\n    .request({ method: 'eth_requestAccounts' })\n    .then(handleAccountsChanged)\n    .catch((error) => {\n      if (error.code === 4001) {\n        // EIP-1193 userRejectedRequest error\n        console.log('Please connect to MetaMask.');\n      } else {\n        console.error(error);\n      }\n    });\n}\n")),(0,r.kt)("h3",{id:"wallet_getpermissions"},"wallet_getPermissions"),(0,r.kt)("p",null,"Gets the caller's current ",(0,r.kt)("a",{parentName:"p",href:"#restricted-methods"},"permissions"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This method is not yet available on MetaMask Mobile.")),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,"An array of the caller's permission objects.\nIf the caller has no permissions, the array is empty."),(0,r.kt)("h3",{id:"wallet_requestpermissions"},"wallet_requestPermissions"),(0,r.kt)("p",null,"Requests ",(0,r.kt)("a",{parentName:"p",href:"#restricted-methods"},"permissions")," from the user.\nCurrently only ",(0,r.kt)("a",{parentName:"p",href:"https://metamask.github.io/api-playground/api-documentation/#eth_accounts"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_accounts")),"\nrequires requesting permission."),(0,r.kt)("p",null,"The request causes a MetaMask popup to appear.\nYou should only request permissions in response to a direct user action, such as a button click."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This method is not yet available on MetaMask Mobile.")),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,"An array containing the requested permission objects."),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,"An array of the caller's permission objects.\nIf the user denies the request, a ",(0,r.kt)("inlineCode",{parentName:"p"},"4001")," error is returned."),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"document.getElementById('requestPermissionsButton', requestPermissions);\n\nfunction requestPermissions() {\n  ethereum\n    .request({\n      method: 'wallet_requestPermissions',\n      params: [{ eth_accounts: {} }],\n    })\n    .then((permissions) => {\n      const accountsPermission = permissions.find(\n        (permission) => permission.parentCapability === 'eth_accounts'\n      );\n      if (accountsPermission) {\n        console.log('eth_accounts permission successfully requested!');\n      }\n    })\n    .catch((error) => {\n      if (error.code === 4001) {\n        // EIP-1193 userRejectedRequest error\n        console.log('Permissions needed to continue.');\n      } else {\n        console.error(error);\n      }\n    });\n}\n")),(0,r.kt)("h3",{id:"wallet_addethereumchain"},"wallet_addEthereumChain"),(0,r.kt)("p",null,"Creates a confirmation asking the user to add the specified chain to MetaMask.\nThe user may choose to switch to the chain once it has been added."),(0,r.kt)("p",null,"You should only call this method in response to a direct user action, such as a button click."),(0,r.kt)("p",null,"MetaMask validates the parameters for this method, and rejects the request if any parameter is\nincorrectly formatted.\nMetaMask also rejects the request if any of the following occurs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The RPC endpoint doesn't respond to RPC calls.",(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Calls are made from the extension's background page, not the foreground page.\nIf you use an origin allowlist, they're blocked."))),(0,r.kt)("li",{parentName:"ul"},"The RPC endpoint returns a different chain ID when\n",(0,r.kt)("a",{parentName:"li",href:"https://metamask.github.io/api-playground/api-documentation/#eth_chainId"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_chainId"))," is called."),(0,r.kt)("li",{parentName:"ul"},"The chain ID corresponds to any default MetaMask chains.")),(0,r.kt)("p",null,"This method is specified by ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-3085"},"EIP-3085"),"."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("p",null,"An array containing an object containing the following metadata about the chain to be added to MetaMask:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"chainId")," - The chain ID as a ",(0,r.kt)("inlineCode",{parentName:"li"},"0x"),"-prefixed hexadecimal string."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"chainName")," - The name of the chain."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nativeCurrency")," - An object containing:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," - The name of the currency."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"symbol")," - The symbol of the currency, as a 2-6 character string."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"decimals")," - The number of decimals of the currency.\nCurrently only accepts ",(0,r.kt)("inlineCode",{parentName:"li"},"18"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rpcUrls")," - An array of RPC URL strings.\nAt least one item is required, and only the first item is used."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"blockExplorerUrls")," (optional) - An array of block explorer URL strings.\nAt least one item is required, and only the first item is used."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"iconUrls")," (optional, currently ignored) - An array of icon URL strings.")),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"null")," if the request was successful, and an error otherwise."),(0,r.kt)("h4",{id:"example-2"},"Example"),(0,r.kt)("p",null,"We recommend using this method with ",(0,r.kt)("a",{parentName:"p",href:"#walletaddethereumchain"},(0,r.kt)("inlineCode",{parentName:"a"},"wallet_addEthereumChain")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"try {\n  await ethereum.request({\n    method: 'wallet_switchEthereumChain',\n    params: [{ chainId: '0xf00' }],\n  });\n} catch (switchError) {\n  // This error code indicates that the chain has not been added to MetaMask.\n  if (switchError.code === 4902) {\n    try {\n      await ethereum.request({\n        method: 'wallet_addEthereumChain',\n        params: [\n          {\n            chainId: '0xf00',\n            chainName: '...',\n            rpcUrls: ['https://...'] /* ... */,\n          },\n        ],\n      });\n    } catch (addError) {\n      // handle \"add\" error\n    }\n  }\n  // handle other \"switch\" errors\n}\n")),(0,r.kt)("h3",{id:"wallet_switchethereumchain"},"wallet_switchEthereumChain"),(0,r.kt)("p",null,"Creates a confirmation asking the user to switch to the chain with the specified chain ID."),(0,r.kt)("p",null,"You should only call this method in response to a direct user action, such as a button click."),(0,r.kt)("p",null,"MetaMask rejects the request if any of the following occurs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The chain ID is malformed."),(0,r.kt)("li",{parentName:"ul"},"The chain with the specified chain ID hasn't been added to MetaMask.")),(0,r.kt)("p",null,"This method is specified by ",(0,r.kt)("a",{parentName:"p",href:"https://ethereum-magicians.org/t/eip-3326-wallet-switchethereumchain"},"EIP-3326"),"."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("p",null,"An array containing an object containing ",(0,r.kt)("inlineCode",{parentName:"p"},"chainId"),", the chain ID as a ",(0,r.kt)("inlineCode",{parentName:"p"},"0x"),"-prefixed hexadecimal string."),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"null")," if the request was successful, and an error otherwise."),(0,r.kt)("p",null,"If the error code is ",(0,r.kt)("inlineCode",{parentName:"p"},"4902"),", the requested chain hasn't been added by MetaMask, and you must request\nto add it using ",(0,r.kt)("a",{parentName:"p",href:"#walletaddethereumchain"},(0,r.kt)("inlineCode",{parentName:"a"},"wallet_addEthereumChain")),"."),(0,r.kt)("h4",{id:"example-3"},"Example"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"#walletaddethereumchain"},(0,r.kt)("inlineCode",{parentName:"a"},"wallet_addEthereumChain"))," example."),(0,r.kt)("h3",{id:"wallet_registeronboarding"},"wallet_registerOnboarding"),(0,r.kt)("p",null,"Registers the requesting site with MetaMask as the initiator of onboarding, enabling MetaMask to\nredirect the user back to the site after onboarding has completed."),(0,r.kt)("p",null,"This method is intended to be called after MetaMask has been installed, but before the MetaMask\nonboarding has completed."),(0,r.kt)("p",null,"Instead of calling this method directly, you should\n",(0,r.kt)("a",{parentName:"p",href:"/aakers/search/wallet/how-to/use-onboarding-library"},"use the MetaMask onboarding library"),"."),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"true")," if the request was successful, ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,r.kt)("h3",{id:"wallet_watchasset"},"wallet_watchAsset"),(0,r.kt)("p",null,"Requests that the user track the specified token in MetaMask."),(0,r.kt)("p",null,"Most Ethereum wallets support some set of tokens, usually from a centrally curated registry of tokens.\nThis method enables dapp developers to ask their users to track tokens in their wallets, at runtime.\nOnce added, the token is indistinguishable from those added using legacy methods, such as a\ncentralized registry."),(0,r.kt)("p",null,"This method is specified by ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-747"},"EIP-747"),"."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("p",null,"An object containing the following metadata of the token to watch:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type")," - Currently only supports ",(0,r.kt)("inlineCode",{parentName:"li"},"ERC20"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options")," - An object containing:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"address")," - The address of the token contract."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"symbol")," - The symbol of the token, up to 11 characters."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"decimals")," - The number of token decimals."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"image")," - A URL string of the token logo.")))),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"true")," if the token was added, ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,r.kt)("h4",{id:"example-4"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"ethereum\n  .request({\n    method: 'wallet_watchAsset',\n    params: {\n      type: 'ERC20',\n      options: {\n        address: '0xb60e8dd61c5d32be8058bb8eb970870f07233155',\n        symbol: 'FOO',\n        decimals: 18,\n        image: 'https://foo.io/token-image.svg',\n      },\n    },\n  })\n  .then((success) => {\n    if (success) {\n      console.log('FOO successfully added to wallet!');\n    } else {\n      throw new Error('Something went wrong.');\n    }\n  })\n  .catch(console.error);\n")),(0,r.kt)("h3",{id:"wallet_scanqrcode"},"wallet_scanQRCode"),(0,r.kt)("p",null,"Requests that the user scan a QR code using their device camera."),(0,r.kt)("p",null,"MetaMask previously introduced this feature in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/issues/945"},"EIP-945"),".\nThe functionality was temporarily removed before being re-introduced as this RPC method."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This method is only available on MetaMask Mobile.")),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("p",null,"An array containing an optional regular expression (regex) string for matching arbitrary QR code strings."),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,"A string corresponding to the scanned QR code.\nIf a regex string is provided, the resulting string matches it.\nIf no regex string is provided, the resulting string matches an Ethereum address.\nIf neither condition is met, the method returns an error."),(0,r.kt)("h4",{id:"example-5"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"ethereum\n  .request({\n    method: 'wallet_scanQRCode',\n    // The regex string must be valid input to the RegExp constructor, if provided\n    params: ['\\\\D'],\n  })\n  .then((result) => {\n    console.log(result);\n  })\n  .catch((error) => {\n    console.log(error);\n  });\n")))}h.isMDXComponent=!0}}]);