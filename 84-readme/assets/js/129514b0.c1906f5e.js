"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[4507],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(a),c=i,h=d["".concat(o,".").concat(c)]||d[c]||u[c]||r;return a?n.createElement(h,l(l({ref:t},m),{},{components:a})):n.createElement(h,l({ref:t},m))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:i,l[1]=s;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7617:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var n=a(7462),i=(a(7294),a(3905)),r=a(5488),l=a(5162);const s={description:"Snaps JSON-RPC API reference"},o="Snaps JSON-RPC API",p={unversionedId:"reference/rpc-api",id:"reference/rpc-api",title:"Snaps JSON-RPC API",description:"Snaps JSON-RPC API reference",source:"@site/snaps/reference/rpc-api.md",sourceDirName:"reference",slug:"/reference/rpc-api",permalink:"/mm-docs-v2/84-readme/snaps/reference/rpc-api",draft:!1,tags:[],version:"current",frontMatter:{description:"Snaps JSON-RPC API reference"},sidebar:"snapsSidebar",previous:{title:"Reference",permalink:"/mm-docs-v2/84-readme/snaps/category/reference"},next:{title:"Snaps exports",permalink:"/mm-docs-v2/84-readme/snaps/reference/exports"}},m={},d=[{value:"Unrestricted methods",id:"unrestricted-methods",level:2},{value:"wallet_getSnaps",id:"wallet_getsnaps",level:3},{value:"Returns",id:"returns",level:4},{value:"Example",id:"example",level:4},{value:"wallet_invokeSnap",id:"wallet_invokesnap",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Example",id:"example-1",level:4},{value:"wallet_requestSnaps",id:"wallet_requestsnaps",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Example",id:"example-2",level:4},{value:"Restricted methods",id:"restricted-methods",level:2},{value:"snap_confirm (deprecated)",id:"snap_confirm-deprecated",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Example",id:"example-3",level:4},{value:"snap_dialog",id:"snap_dialog",level:3},{value:"Alert dialog",id:"alert-dialog",level:4},{value:"Parameters",id:"parameters-3",level:5},{value:"Example",id:"example-4",level:4},{value:"Confirmation dialog",id:"confirmation-dialog",level:4},{value:"Parameters",id:"parameters-4",level:5},{value:"Returns",id:"returns-4",level:5},{value:"Example",id:"example-5",level:4},{value:"Prompt dialog",id:"prompt-dialog",level:4},{value:"Parameters",id:"parameters-5",level:5},{value:"Returns",id:"returns-5",level:5},{value:"Example",id:"example-6",level:4},{value:"snap_getBip32Entropy",id:"snap_getbip32entropy",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Example",id:"example-7",level:4},{value:"snap_getBip32PublicKey",id:"snap_getbip32publickey",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Example",id:"example-8",level:4},{value:"snap_getBip44Entropy",id:"snap_getbip44entropy",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Example",id:"example-9",level:4},{value:"snap_getEntropy",id:"snap_getentropy",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Example",id:"example-10",level:4},{value:"snap_manageState",id:"snap_managestate",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"Returns",id:"returns-10",level:4},{value:"Example",id:"example-11",level:4},{value:"snap_notify",id:"snap_notify",level:3},{value:"Parameters",id:"parameters-11",level:4},{value:"Example",id:"example-12",level:4},{value:"wallet_snap_*",id:"wallet_snap_",level:3},{value:"Parameters",id:"parameters-12",level:4},{value:"Returns",id:"returns-11",level:4},{value:"Example",id:"example-13",level:4}],u={toc:d};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"snaps-json-rpc-api"},"Snaps JSON-RPC API"),(0,i.kt)("p",null,"Snaps communicate with MetaMask using the Snaps JSON-RPC API.\nThese API methods allow snaps to modify the functionality of MetaMask, and websites (dapps) to\ninstall and communicate with individual snaps.\nSome methods are only callable by snaps, and some are only callable by websites."),(0,i.kt)("h2",{id:"unrestricted-methods"},"Unrestricted methods"),(0,i.kt)("p",null,"You can use unrestricted methods without ",(0,i.kt)("a",{parentName:"p",href:"/mm-docs-v2/84-readme/snaps/how-to/request-permissions"},"requesting permission"),"\nto do so."),(0,i.kt)("h3",{id:"wallet_getsnaps"},"wallet_getSnaps"),(0,i.kt)("p",null,"Returns the IDs of the caller's permitted snaps and some relevant metadata."),(0,i.kt)("p",null,"This method is only callable by websites."),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,"An object containing the requester's permitted snaps.\nEach snap is an object containing:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id")," - The ID of the snap."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"initialPermissions")," - The initial permissions of the snap, which will be requested when the snap\nis installed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"permissionName")," - The name of the permission used to invoke the snap."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"version")," - The version of the snap.")),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const result = await window.ethereum.request({ method: 'wallet_getSnaps' });\n\nconsole.log(result);\n"))),(0,i.kt)(l.Z,{value:"result",label:"Result",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// Example result if any snaps are permitted\n{\n  accountRPC methods?s: ['0xa...', '0xb...'],\n  permissions: {\n    eth_accounts: {},\n    'wallet_snap_npm:@metamask/example-snap': {},\n  },\n  snaps: {\n    'npm:@metamask/example-snap': {\n      version: '1.0.0',\n      permissionName: 'wallet_snap_npm:@metamask/example-snap',\n      ...\n    }\n  }\n}\n")))),(0,i.kt)("h3",{id:"wallet_invokesnap"},"wallet_invokeSnap"),(0,i.kt)("p",null,"Invokes the specified JSON-RPC method of the specified snap.\nThe snap must be installed and the caller must have the permission to communicate with the snap, or\nthe request is rejected."),(0,i.kt)("p",null,"Snaps are fully responsible for implementing their JSON-RPC API.\nConsult the snap's documentation for available methods, their parameters, and return values."),(0,i.kt)("p",null,"This method is only callable by websites."),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,"An object containing:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"snapId")," - The ID of the snap to invoke."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"request")," - The JSON-RPC request object to send to the invoked snap.")),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,"Result of the snap method call."),(0,i.kt)("h4",{id:"example-1"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const result = await ethereum.request({\n  method: 'wallet_invokeSnap',\n  params: {\n    snapId: 'npm:@metamask/example-snap',\n    request: {\n      method: 'hello',\n    },\n  },\n});\n\nconsole.log(result); // In this example, the result is a boolean.\n")),(0,i.kt)("h3",{id:"wallet_requestsnaps"},"wallet_requestSnaps"),(0,i.kt)("p",null,"Requests permission for a website to communicate with the specified snaps and attempts to install\nthem if they're not already installed.\nIf the installation of any snap fails, returns the error that caused the failure."),(0,i.kt)("p",null,"You can optionally specify a ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/semver"},"SemVer range")," for a snap.\nMetaMask attempts to install a version of the snap that satisfies the requested range.\nIf a compatible version of a snap is already installed, the request succeeds.\nIf an incompatible version is installed, MetaMask attempts to update the snap to the latest version\nthat satisfies the requested range.\nThe request succeeds if the snap is successfully updated."),(0,i.kt)("p",null,"This method is only callable by websites."),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("p",null,"An object containing the snaps to request permission to communicate with."),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,"An object mapping the IDs of installed snaps to either their metadata or an error if installation fails."),(0,i.kt)("h4",{id:"example-2"},"Example"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"try {\n  const result = await window.ethereum.request({\n    method: 'wallet_requestSnaps',\n    params: {\n      'npm:@metamask/example-snap': {},\n      'npm:fooSnap': {\n        // The optional version argument allows requesting a SemVer version\n        // range, with the same semantics as npm package.json ranges.\n        version: '^1.0.2',\n      },\n    },\n  });\n\n  console.log(result);\n\n} catch (error) {\n  console.log(error);\n}\n"))),(0,i.kt)(l.Z,{value:"result",label:"Result",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n  'npm:@metamask/example-snap': {\n    version: '1.0.0',\n    permissionName: 'wallet_snap_npm:@metamask/example-snap',\n    ...\n  },\n  'npm:fooSnap': {\n    version: '1.0.5',\n    permissionName: 'wallet_snap_npm:fooSnap',\n    ...\n  },\n}\n")))),(0,i.kt)("h2",{id:"restricted-methods"},"Restricted methods"),(0,i.kt)("p",null,"You must\n",(0,i.kt)("a",{parentName:"p",href:"/mm-docs-v2/84-readme/snaps/how-to/request-permissions#rpc-api-permissions"},"request permission")," in the snap manifest file\nto use a restricted method."),(0,i.kt)("h3",{id:"snap_confirm-deprecated"},"snap_confirm (deprecated)"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This method is deprecated.\nPlease migrate all instances of ",(0,i.kt)("inlineCode",{parentName:"p"},"snap_confirm")," to ",(0,i.kt)("a",{parentName:"p",href:"#snapdialog"},(0,i.kt)("inlineCode",{parentName:"a"},"snap_dialog")),".")),(0,i.kt)("p",null,"Displays a confirmation in the MetaMask UI.\nThe contents of the confirmation depend on the parameters.\nThe user can approve or reject the confirmation, which is indicated by the method's return value."),(0,i.kt)("p",null,"Use this method to show a MetaMask popup with custom text and buttons to approve or reject an action.\nYou can use this to create requests, confirmations, and opt-in flows for a snap."),(0,i.kt)("p",null,"This method is only callable by snaps."),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("p",null,"An object containing the contents of the confirmation."),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"true")," if the user accepted the confirmation, and ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,i.kt)("h4",{id:"example-3"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const result = await snap.request({\n  method: 'snap_confirm',\n  params: [\n    {\n      prompt: 'Would you like to take the action?',\n      description: 'The action is...',\n      textAreaContent: 'Very detailed information about the action...',\n    },\n  ],\n});\n\nif (result === true) {\n  // Take the action\n} else {\n  // Do not take the action\n}\n")),(0,i.kt)("h3",{id:"snap_dialog"},"snap_dialog"),(0,i.kt)("p",null,"Displays a dialog in the MetaMask UI.\nThere are three types of dialogs with different parameters and return types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#alert-dialog"},"Alert")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#confirmation-dialog"},"Confirmation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#prompt-dialog"},"Prompt"))),(0,i.kt)("p",null,"This method is only callable by snaps."),(0,i.kt)("h4",{id:"alert-dialog"},"Alert dialog"),(0,i.kt)("p",null,"Displays an alert that can only be acknowledged."),(0,i.kt)("h5",{id:"parameters-3"},"Parameters"),(0,i.kt)("p",null,"An object containing the contents of the alert dialog:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type")," - The type of dialog (",(0,i.kt)("inlineCode",{parentName:"li"},"'Alert'"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"content")," - The content of the alert, as a ",(0,i.kt)("a",{parentName:"li",href:"/mm-docs-v2/84-readme/snaps/how-to/use-custom-ui"},"custom UI")," component.")),(0,i.kt)("h4",{id:"example-4"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { panel, text, heading } from '@metamask/snaps-ui';\n\nawait snap.request({\n  method: 'snap_dialog',\n  params: {\n    type: 'Alert',\n    content: panel([\n      heading('Something happened in the system'),\n      text('The thing that happened is...'),\n    ]),\n  },\n});\n\n// Code that should execute after the alert has been acknowledged\n")),(0,i.kt)("h4",{id:"confirmation-dialog"},"Confirmation dialog"),(0,i.kt)("p",null,"Displays a confirmation that can be accepted or rejected."),(0,i.kt)("h5",{id:"parameters-4"},"Parameters"),(0,i.kt)("p",null,"An object containing the contents of the confirmation dialog:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type")," - The type of dialog (",(0,i.kt)("inlineCode",{parentName:"li"},"'Confirmation'"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"content")," - The content of the confirmation, as a ",(0,i.kt)("a",{parentName:"li",href:"/mm-docs-v2/84-readme/snaps/how-to/use-custom-ui"},"custom UI")," component.")),(0,i.kt)("h5",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"true")," if the confirmation was accepted, ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,i.kt)("h4",{id:"example-5"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { panel, text, heading } from '@metamask/snaps-ui';\n\nconst result = await snap.request({\n  method: 'snap_dialog',\n  params: {\n    type: 'Confirmation',\n    content: panel([\n      heading('Would you like to take the action?'),\n      text('The action is...'),\n    ]),\n  },\n});\n\nif (result === true) {\n  // Do the action\n}\n")),(0,i.kt)("h4",{id:"prompt-dialog"},"Prompt dialog"),(0,i.kt)("p",null,"Displays a prompt where the user can enter a text response."),(0,i.kt)("h5",{id:"parameters-5"},"Parameters"),(0,i.kt)("p",null,"An object containing the contents of the prompt dialog:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type")," - The type of dialog (",(0,i.kt)("inlineCode",{parentName:"li"},"'Prompt'"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"content")," - The content of the prompt, as a ",(0,i.kt)("a",{parentName:"li",href:"/mm-docs-v2/84-readme/snaps/how-to/use-custom-ui"},"custom UI")," component."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"placeholder")," - Text that will be in the input field when nothing is typed.")),(0,i.kt)("h5",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,"The text entered by the user."),(0,i.kt)("h4",{id:"example-6"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { panel, text, heading } from '@metamask/snaps-ui';\n\nconst walletAddress = await snap.request({\n  method: 'snap_dialog',\n  params: {\n    type: 'Prompt',\n    content: panel([\n      heading('What is the wallet address?'),\n      text('Please enter the wallet address to be monitored'),\n    ]),\n    placeholder: '0x123...',\n  },\n});\n\n// `walletAddress` will be a string containing the address entered by the user\n")),(0,i.kt)("h3",{id:"snap_getbip32entropy"},"snap_getBip32Entropy"),(0,i.kt)("admonition",{title:"important",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"If you call this method, you receive the user's parent key for the derivation path they request.\nYou're managing the user's keys and assets on their behalf.\nTheir safety is your responsibility.")),(0,i.kt)("p",null,"Gets the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/satoshilabs/slips/blob/master/slip-0010.md"},"SLIP-10")," key for the ",(0,i.kt)("inlineCode",{parentName:"p"},"path"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"curve")," specified by the method name."),(0,i.kt)("p",null,"This method is designed to be used with the\n",(0,i.kt)("a",{parentName:"p",href:"https://npmjs.com/package/@metamask/key-tree"},(0,i.kt)("inlineCode",{parentName:"a"},"@metamask/key-tree"))," module.\n",(0,i.kt)("inlineCode",{parentName:"p"},"@metamask/key-tree")," can help you get the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki#extended-keys"},"extended private keys"),"\nfor user addresses, but it's your responsibility to know how to use those keys to, for example,\nderive an address for the relevant protocol or sign a transaction for the user."),(0,i.kt)("p",null,"This method is only callable by snaps."),(0,i.kt)("h4",{id:"parameters-6"},"Parameters"),(0,i.kt)("p",null,"An object containing:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path")," - An array, starting with ",(0,i.kt)("inlineCode",{parentName:"li"},"m"),", containing the BIP-32 derivation path to the key to\nretrieve.\nFor example, ",(0,i.kt)("inlineCode",{parentName:"li"},'["m", "44\'", "60\'"]'),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"curve")," - The curve to use for the key derivation.\nMust be ",(0,i.kt)("inlineCode",{parentName:"li"},"'ed25519'")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"'secp256k1'"),".")),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,"An object representing the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/satoshilabs/slips/blob/master/slip-0010.md"},"SLIP-10")," HD tree node and containing\nits corresponding key material:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"depth")," - The 0-indexed path depth of the node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"parentFingerprint")," - The fingerprint of the parent key, or 0 if this is a master node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"index")," - The index of the node, or 0 if this is a master node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"privateKey")," - The private key of the node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"publicKey")," - The public key of the node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"chainCode")," - The chain code of the node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"curve")," - The name of the curve used by the node: ",(0,i.kt)("inlineCode",{parentName:"li"},"'ed25519'")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"'secp256k1'"),".")),(0,i.kt)("h4",{id:"example-7"},"Example"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"manifest",label:"Manifest file",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "initialPermissions": {\n    "snap_getBip32Entropy": [\n      {\n        "path": ["m", "44\'", "3\'"],\n        "curve": "secp256k1" // Or "ed25519"\n      }\n    ]\n  }\n}\n'))),(0,i.kt)(l.Z,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { SLIP10Node } from '@metamask/key-tree';\n\n// This example uses Dogecoin, which has a derivation path starting with `m/44'/3'`.\nconst dogecoinNode = await snap.request({\n  method: 'snap_getBip32Entropy',\n  params: {\n    // Must be specified exactly in the manifest\n    path: ['m', \"44'\", \"3'\"],\n    curve: 'secp256k1',\n  },\n});\n\n// Next, create an instance of a SLIP-10 node for the Dogecoin node.\nconst dogecoinSlip10Node = await SLIP10Node.fromJSON(dogecoinNode);\n\n// m / 44' / 3' / 0'\nconst accountKey0 = await dogecoinSlip10Node.derive([\"bip32:0'\"]);\n\n// m / 44' / 3' / 1'\nconst accountKey1 = await dogecoinSlip10Node.derive([\"bip32:1'\"]);\n\n// Now, you can ask the user to sign transactions, etc.\n")))),(0,i.kt)("h3",{id:"snap_getbip32publickey"},"snap_getBip32PublicKey"),(0,i.kt)("p",null,"Gets the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki"},"BIP-32")," public key for the\nderivation path specified by the ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," parameter.\nNote that this returns the public key, not the extended public key (",(0,i.kt)("inlineCode",{parentName:"p"},"xpub"),"), or Ethereum address."),(0,i.kt)("p",null,"This method is only callable by snaps."),(0,i.kt)("h4",{id:"parameters-7"},"Parameters"),(0,i.kt)("p",null,"An object containing:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path")," - An array, starting with ",(0,i.kt)("inlineCode",{parentName:"li"},"m"),", containing the BIP-32 derivation path to the public key to\nretrieve.\nFor example, ",(0,i.kt)("inlineCode",{parentName:"li"},'["m", "44\'", "60\'"]'),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"curve")," - The curve to use for the key derivation.\nMust be ",(0,i.kt)("inlineCode",{parentName:"li"},"'ed25519'")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"'secp256k1'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"compressed")," - Indicates whether the public key should be compressed.\nThe default is ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,i.kt)("h4",{id:"returns-7"},"Returns"),(0,i.kt)("p",null,"The public key as hexadecimal string."),(0,i.kt)("h4",{id:"example-8"},"Example"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"manifest",label:"Manifest file",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "initialPermissions": {\n    "snap_getBip32PublicKey": [\n      {\n        "path": ["m", "44\'", "3\'", "0\'", "0", "0"],\n        "curve": "secp256k1" // Or "ed25519"\n      }\n    ]\n  }\n}\n'))),(0,i.kt)(l.Z,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// This example uses Dogecoin, which has a derivation path starting with `m/44'/3'`.\nconst dogecoinPublicKey = await snap.request({\n  method: 'snap_getBip32PublicKey',\n  params: {\n    // The path and curve must be specified in the initial permissions.\n    path: ['m', \"44'\", \"3'\", \"0'\", '0', '0'],\n    curve: 'secp256k1',\n    compressed: false,\n  },\n});\n\n// `0x...`\nconsole.log(dogecoinPublicKey);\n")))),(0,i.kt)("h3",{id:"snap_getbip44entropy"},"snap_getBip44Entropy"),(0,i.kt)("admonition",{title:"important",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"If you call this method, you receive the user's parent key for the protocol they request.\nYou're managing the user's keys and assets on their behalf.\nTheir safety is your responsibility.")),(0,i.kt)("p",null,"Gets the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki"},"BIP-44")," ",(0,i.kt)("inlineCode",{parentName:"p"},"coin_type")," key\nfor the ",(0,i.kt)("inlineCode",{parentName:"p"},"coin_type")," number specified by the method name.\nSee ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/satoshilabs/slips/blob/master/slip-0044.md"},"SLIP-44")," for the list of\navailable protocols and their ",(0,i.kt)("inlineCode",{parentName:"p"},"coin_type")," values."),(0,i.kt)("p",null,"This method is designed to be used with the\n",(0,i.kt)("a",{parentName:"p",href:"https://npmjs.com/package/@metamask/key-tree"},(0,i.kt)("inlineCode",{parentName:"a"},"@metamask/key-tree"))," module.\n",(0,i.kt)("inlineCode",{parentName:"p"},"@metamask/key-tree")," can help you get the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki#extended-keys"},"extended private keys"),"\nfor user addresses, but it's your responsibility to know how to use those keys to, for example,\nderive an address for the relevant protocol or sign a transaction for the user."),(0,i.kt)("p",null,"This method is only callable by snaps."),(0,i.kt)("h4",{id:"parameters-8"},"Parameters"),(0,i.kt)("p",null,"An object containing ",(0,i.kt)("inlineCode",{parentName:"p"},"coinType"),", the BIP-44 coin type to get the entropy for."),(0,i.kt)("h4",{id:"returns-8"},"Returns"),(0,i.kt)("p",null,"An object representing the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki"},"BIP-44")," ",(0,i.kt)("inlineCode",{parentName:"p"},"coin_type")," HD tree node\nand containing its corresponding key material:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"coin_type")," - The BIP-44 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/satoshilabs/slips/blob/master/slip-0044.md"},"coin type"),"\nvalue of the node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"depth")," - The 0-indexed BIP-44 path depth of the node.\nSince this is a ",(0,i.kt)("inlineCode",{parentName:"li"},"coin_type")," node, the depth is ",(0,i.kt)("inlineCode",{parentName:"li"},"2"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"privateKey")," - The hexadecimal-encoded string representation of the private key for the node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"publicKey")," - The hexadecimal-encoded string representation of the public key for the node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"chainCode")," - The hexadecimal-encoded string representation of the chain code for the node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path")," - A human-readable representation of the BIP-44 HD tree path of the node.\nSince this is a ",(0,i.kt)("inlineCode",{parentName:"li"},"coin_type")," node, the path is of the form ",(0,i.kt)("inlineCode",{parentName:"li"},"m / 44' / coin_type'"),".")),(0,i.kt)("h4",{id:"example-9"},"Example"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"manifest",label:"Manifest file",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "initialPermissions": {\n    "snap_getBip44Entropy": [\n      {\n        "coinType": 3\n      }\n    ]\n  }\n}\n'))),(0,i.kt)(l.Z,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getBIP44AddressKeyDeriver } from '@metamask/key-tree';\n\n// This example uses Dogecoin, which has `coin_type` 3.\nconst dogecoinNode = await snap.request({\n  method: 'snap_getBip44Entropy',\n  params: {\n    coinType: 3,\n  },\n});\n\n// Next, create an address key deriver function for the Dogecoin coin_type node.\n// In this case, its path is: m / 44' / 3' / 0' / 0 / address_index\nconst deriveDogecoinAddress = await getBIP44AddressKeyDeriver(dogecoinNode);\n\n// These are BIP-44 nodes containing the extended private keys for\n// the respective derivation paths.\n\n// m / 44' / 3' / 0' / 0 / 0\nconst addressKey0 = await deriveDogecoinAddress(0);\n\n// m / 44' / 3' / 0' / 0 / 1\nconst addressKey1 = await deriveDogecoinAddress(1);\n\n// Now, you can ask the user to sign transactions, etc.\n")))),(0,i.kt)("h3",{id:"snap_getentropy"},"snap_getEntropy"),(0,i.kt)("p",null,"Gets a deterministic 256-bit entropy value, specific to the snap and the user's account.\nYou can use this entropy to generate a private key, or any other value that requires a high level of\nrandomness.\nOther snaps can't access this entropy, and it changes if the user's secret recovery phrase changes."),(0,i.kt)("p",null,"You can optionally specify a salt to generate different entropy for different purposes.\nUsing a salt results in entropy unrelated to the entropy generated without a salt."),(0,i.kt)("p",null,"This value is deterministic: it's always the same for the same snap, user account, and salt."),(0,i.kt)("p",null,"This method is only callable by snaps."),(0,i.kt)("h4",{id:"parameters-9"},"Parameters"),(0,i.kt)("p",null,"An object containing:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"version")," - The number ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),".\nThis is reserved for future use."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"salt")," (optional) - An arbitrary string to be used as a salt for the entropy.\nThis can be used to generate different entropy for different purposes.")),(0,i.kt)("h4",{id:"returns-9"},"Returns"),(0,i.kt)("p",null,"The entropy as a hexadecimal string."),(0,i.kt)("h4",{id:"example-10"},"Example"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"manifest",label:"Manifest file",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "initialPermissions": {\n    "snap_getEntropy": {}\n  }\n}\n'))),(0,i.kt)(l.Z,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const entropy = await snap.request({\n  method: 'snap_getEntropy',\n  params: {\n    version: 1,\n    salt: 'foo', // Optional\n  },\n});\n\n// `0x...`\nconsole.log(entropy);\n")))),(0,i.kt)("h3",{id:"snap_managestate"},"snap_manageState"),(0,i.kt)("p",null,"Allows the snap to persist up to 100 MB of data to disk and retrieve it at will.\nThe data is automatically encrypted using a snap-specific key and automatically decrypted when retrieved."),(0,i.kt)("p",null,"This method is only callable by snaps."),(0,i.kt)("h4",{id:"parameters-10"},"Parameters"),(0,i.kt)("p",null,"An object containing:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"operation")," - The state operation to perform (",(0,i.kt)("inlineCode",{parentName:"li"},"'clear'"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"'get'"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"'update'"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"newState")," - The value to update state with if the operation is ",(0,i.kt)("inlineCode",{parentName:"li"},"update"),", and nothing otherwise.")),(0,i.kt)("h4",{id:"returns-10"},"Returns"),(0,i.kt)("p",null,"The value stored in state if the operation is ",(0,i.kt)("inlineCode",{parentName:"p"},"get"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," otherwise."),(0,i.kt)("h4",{id:"example-11"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// Persist some data.\nawait snap.request({\n  method: 'snap_manageState',\n  params: { operation: 'update', newState: { hello: 'world' } },\n});\n\n// At a later time, get the data stored.\nconst persistedData = await snap.request({\n  method: 'snap_manageState',\n  params: { operation: 'get' },\n});\n\nconsole.log(persistedData);\n// { hello: 'world' }\n\n// If there's no need to store data anymore, clear it out.\nawait snap.request({\n  method: 'snap_manageState',\n  params: { operation: 'clear' },\n});\n")),(0,i.kt)("h3",{id:"snap_notify"},"snap_notify"),(0,i.kt)("p",null,"Displays a notification in MetaMask or natively in the browser.\nSnaps can trigger a short notification text for actionable or time sensitive information."),(0,i.kt)("p",null,"This method is only callable by snaps."),(0,i.kt)("h4",{id:"parameters-11"},"Parameters"),(0,i.kt)("p",null,"An object containing the contents of the notification:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type")," - The notification type.\nSpecify ",(0,i.kt)("inlineCode",{parentName:"li"},"inApp")," to display the notification in the MetaMask UI, and ",(0,i.kt)("inlineCode",{parentName:"li"},"native")," to display the\nnotification in the browser.\nWe recommend using ",(0,i.kt)("inlineCode",{parentName:"li"},"inApp")," because there's no guarantee that native notifications are displayed to\nthe user."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"message")," - A message to show in the notification.")),(0,i.kt)("h4",{id:"example-12"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"await snap.request({\n  method: 'snap_notify',\n  params: {\n      type: 'inApp',\n      message: `Hello, world!`,\n  },\n});\n")),(0,i.kt)("h3",{id:"wallet_snap_"},"wallet","_","snap","_","*"),(0,i.kt)("p",null,"Invokes the specified JSON-RPC method of the snap corresponding to the specified permission name.\nThe snap must be installed and the caller must have permission to communicate with the snap, or the\nrequest is rejected."),(0,i.kt)("p",null,"Snaps are responsible for implementing their JSON-RPC API.\nConsult the snap's documentation for available methods, their parameters, and return values."),(0,i.kt)("p",null,"This method is only callable by websites."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This is a namespaced method.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," in the name is always substituted for a string, in this case a snap ID.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"#walletinvokesnap"},(0,i.kt)("inlineCode",{parentName:"a"},"wallet_invokeSnap"))," provides a more convenient way of calling this method.")),(0,i.kt)("h4",{id:"parameters-12"},"Parameters"),(0,i.kt)("p",null,"The JSON-RPC request object to send to the invoked snap."),(0,i.kt)("h4",{id:"returns-11"},"Returns"),(0,i.kt)("p",null,"The result of the snap method call."),(0,i.kt)("h4",{id:"example-13"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const result = await ethereum.request({\n  method: 'wallet_snap_npm:@metamask/example-snap',\n  params: {\n    method: 'hello',\n  },\n});\n\nconsole.log(result); // In this example, the result is a boolean.\n")))}c.isMDXComponent=!0},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),i=a(6010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7462),i=a(7294),r=a(6010),l=a(2389),s=a(7392),o=a(7094),p=a(2466);const m="tabList__CuJ",d="tabItem_LNqP";function u(e){const{lazy:t,block:a,defaultValue:l,values:u,groupId:c,className:h}=e,k=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=u??k.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,s.l)(f,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===l?l:l??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:b}=(0,o.U)(),[N,w]=(0,i.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=c){const e=g[c];null!=e&&e!==N&&f.some((t=>t.value===e))&&w(e)}const C=e=>{const t=e.currentTarget,a=x.indexOf(t),n=f[a].value;n!==N&&(T(t),w(n),null!=c&&b(c,String(n)))},_=e=>{let t=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const a=x.indexOf(e.currentTarget)+1;t=x[a]??x[0];break}case"ArrowLeft":{const a=x.indexOf(e.currentTarget)-1;t=x[a]??x[x.length-1];break}}t?.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",m)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},h)},f.map((e=>{let{value:t,label:a,attributes:l}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>x.push(e),onKeyDown:_,onClick:C},l,{className:(0,r.Z)("tabs__item",d,l?.className,{"tabs__item--active":N===t})}),a??t)}))),t?(0,i.cloneElement)(k.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function c(e){const t=(0,l.Z)();return i.createElement(u,(0,n.Z)({key:String(t)},e))}}}]);