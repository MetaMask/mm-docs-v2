"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[5715],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(6010);const i="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,s),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),r=n(7294),i=n(6010),s=n(2389),o=n(7392),l=n(7094),c=n(2466);const u="tabList__CuJ",p="tabItem_LNqP";function m(e){const{lazy:t,block:n,defaultValue:s,values:m,groupId:d,className:h}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,o.l)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===s?s:s??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:k}=(0,l.U)(),[w,N]=(0,r.useState)(y),C=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=d){const e=v[d];null!=e&&e!==w&&g.some((t=>t.value===e))&&N(e)}const E=e=>{const t=e.currentTarget,n=C.indexOf(t),a=g[n].value;a!==w&&(T(t),N(a),null!=d&&k(d,String(a)))},D=e=>{let t=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;t=C[n]??C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;t=C[n]??C[C.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},h)},g.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>C.push(e),onKeyDown:D,onClick:E},s,{className:(0,i.Z)("tabs__item",p,s?.className,{"tabs__item--active":w===t})}),n??t)}))),t?(0,r.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,s.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},2872:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),i=n(5488),s=n(5162);const o={},l="Sign data",c={unversionedId:"how-to/sign-data",id:"how-to/sign-data",title:"Sign data",description:"Since MetaMask makes cryptographic keys available to each user, websites can use these signatures",source:"@site/wallet/how-to/sign-data.md",sourceDirName:"how-to",slug:"/how-to/sign-data",permalink:"/mm-docs-v2/preview/eb7396f/wallet/how-to/sign-data",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"walletSidebar",previous:{title:"Send transactions",permalink:"/mm-docs-v2/preview/eb7396f/wallet/how-to/send-transactions"},next:{title:"Register a token with users",permalink:"/mm-docs-v2/preview/eb7396f/wallet/how-to/register-token"}},u={},p=[{value:"Sign typed data message parameters",id:"sign-typed-data-message-parameters",level:2},{value:"Example",id:"example",level:2}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sign-data"},"Sign data"),(0,r.kt)("p",null,"Since MetaMask makes cryptographic keys available to each user, websites can use these signatures\nfor a variety of uses.\nHere are a few guides related to specific use cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/hackernoon/writing-for-blockchain-wallet-signature-request-messages-6ede721160d5"},"Authenticating websites")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/metamask/our-metatransaction-hackathon-winner-a620551ccb9b"},"Signing off-chain messages for an on-chain protocol"))),(0,r.kt)("p",null,"There are currently six signing methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"eth_sign")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"personal_sign")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"signTypedData")," (currently identical to ",(0,r.kt)("inlineCode",{parentName:"li"},"signTypedData_v1"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"signTypedData_v1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"signTypedData_v3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"signTypedData_v4"))),(0,r.kt)("p",null,"We recommend using ",(0,r.kt)("inlineCode",{parentName:"p"},"signTypedData_v4")," for most use cases.\nRead more about the ",(0,r.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/eb7396f/wallet/concepts/signing-methods"},"history of the signing methods"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"MetaMask supports signing transactions with Trezor and Ledger hardware wallets.\nThese hardware wallets currently only support signing data using the ",(0,r.kt)("inlineCode",{parentName:"p"},"personal_sign")," method.\nIf you have trouble logging in to a website or dapp when using a Ledger or Trezor, the site may be\nrequesting you to sign data via an unsupported method, in which case we recommend using your\nstandard MetaMask account.")),(0,r.kt)("h2",{id:"sign-typed-data-message-parameters"},"Sign typed data message parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"domain"),": Domain or domain signature.\nThis:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Is only accepted for a specific website/contract."),(0,r.kt)("li",{parentName:"ul"},"Makes sure signatures are valid only where they are intended to be valid."),(0,r.kt)("li",{parentName:"ul"},"Allows you to have a unique contract that verifies the address."),(0,r.kt)("li",{parentName:"ul"},"Is a bunch of information that restricts where the signature is valid."),(0,r.kt)("li",{parentName:"ul"},"Is the domain of validity. It could be a contract, URL, etc."),(0,r.kt)("li",{parentName:"ul"},"Contains specifically what the dapp tells you."),(0,r.kt)("li",{parentName:"ul"},"Makes sure your signature(s) don't collide with other signatures."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"chainId"),": Chain ID.\nThis makes sure signatures signed on one chain aren't valid on another chain."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),": This parameter is primarily for UX purposes.\nFor example, as a user, if you're using an Ether Mail app and a dialog comes up for Cryptokitties\nexchange, this would arouse suspicion due to what the name is on the signature."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"verifyingContract"),": This is an extra layer of assurance.\nEven if two developers end up creating an app with the same name, they will never have the same\ncontract address.\nIf you're unsure of the name, this shows the contract responsible for message verification.\nThis field also takes a URL."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"version"),": Current version of the domain object."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"message"),": This parameter is completely open to any structure.\nEvery field is optional.")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"This is an example of signing typed data with MetaMask.\nSee the ",(0,r.kt)("a",{parentName:"p",href:"https://metamask.github.io/test-dapp/#signTypedDataV4"},"reference"),"."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"html",label:"HTML",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div>\n  <h3>Sign Typed Data V4</h3>\n  <button type="button" id="signTypedDataV4Button">sign typed data v4</button>\n</div>\n'))),(0,r.kt)(s.Z,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"signTypedDataV4Button.addEventListener('click', async function (event) {\n  event.preventDefault();\n\n  const msgParams = JSON.stringify({\n    domain: {\n      // Defining the chain aka Rinkeby testnet or Ethereum Main Net\n      chainId: 1,\n      // Give a user friendly name to the specific contract you are signing for.\n      name: 'Ether Mail',\n      // If name isn't enough add verifying contract to make sure you are establishing contracts with the proper entity\n      verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',\n      // Just let's you know the latest version. Definitely make sure the field name is correct.\n      version: '1',\n    },\n\n    // Defining the message signing data content.\n    message: {\n      /*\n       - Anything you want. Just a JSON Blob that encodes the data you want to send\n       - No required fields\n       - This is DApp Specific\n       - Be as explicit as possible when building out the message schema.\n      */\n      contents: 'Hello, Bob!',\n      attachedMoneyInEth: 4.2,\n      from: {\n        name: 'Cow',\n        wallets: [\n          '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',\n          '0xDeaDbeefdEAdbeefdEadbEEFdeadbeEFdEaDbeeF',\n        ],\n      },\n      to: [\n        {\n          name: 'Bob',\n          wallets: [\n            '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',\n            '0xB0BdaBea57B0BDABeA57b0bdABEA57b0BDabEa57',\n            '0xB0B0b0b0b0b0B000000000000000000000000000',\n          ],\n        },\n      ],\n    },\n    // Refers to the keys of the *types* object below.\n    primaryType: 'Mail',\n    types: {\n      // TODO: Clarify if EIP712Domain refers to the domain the contract is hosted on\n      EIP712Domain: [\n        { name: 'name', type: 'string' },\n        { name: 'version', type: 'string' },\n        { name: 'chainId', type: 'uint256' },\n        { name: 'verifyingContract', type: 'address' },\n      ],\n      // Not an EIP712Domain definition\n      Group: [\n        { name: 'name', type: 'string' },\n        { name: 'members', type: 'Person[]' },\n      ],\n      // Refer to PrimaryType\n      Mail: [\n        { name: 'from', type: 'Person' },\n        { name: 'to', type: 'Person[]' },\n        { name: 'contents', type: 'string' },\n      ],\n      // Not an EIP712Domain definition\n      Person: [\n        { name: 'name', type: 'string' },\n        { name: 'wallets', type: 'address[]' },\n      ],\n    },\n  });\n\n  var from = await web3.eth.getAccounts();\n\n  var params = [from[0], msgParams];\n  var method = 'eth_signTypedData_v4';\n\n  web3.currentProvider.sendAsync(\n    {\n      method,\n      params,\n      from: from[0],\n    },\n    function (err, result) {\n      if (err) return console.dir(err);\n      if (result.error) {\n        alert(result.error.message);\n      }\n      if (result.error) return console.error('ERROR', result);\n      console.log('TYPED SIGNED:' + JSON.stringify(result.result));\n\n      const recovered = sigUtil.recoverTypedSignature_v4({\n        data: JSON.parse(msgParams),\n        sig: result.result,\n      });\n\n      if (\n        ethUtil.toChecksumAddress(recovered) === ethUtil.toChecksumAddress(from)\n      ) {\n        alert('Successfully recovered signer as ' + from);\n      } else {\n        alert(\n          'Failed to verify signer when comparing ' + result + ' to ' + from\n        );\n      }\n    }\n  );\n});\n")))))}d.isMDXComponent=!0}}]);