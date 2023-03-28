"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[6655],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(7462),r=n(7294),o=n(6010),s=n(2389),i=n(7392),l=n(7094),c=n(2466);const u="tabList__CuJ",d="tabItem_LNqP";function p(e){const{lazy:t,block:n,defaultValue:s,values:p,groupId:h,className:m}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=p??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,i.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===s?s:s??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==k&&!b.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:g}=(0,l.U)(),[w,T]=(0,r.useState)(k),x=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=h){const e=y[h];null!=e&&e!==w&&b.some((t=>t.value===e))&&T(e)}const N=e=>{const t=e.currentTarget,n=x.indexOf(t),a=b[n].value;a!==w&&(E(t),T(a),null!=h&&g(h,String(a)))},M=e=>{let t=null;switch(e.key){case"Enter":N(e);break;case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;t=x[n]??x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;t=x[n]??x[x.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},m)},b.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>x.push(e),onKeyDown:M,onClick:N},s,{className:(0,o.Z)("tabs__item",d,s?.className,{"tabs__item--active":w===t})}),n??t)}))),t?(0,r.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function h(e){const t=(0,s.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},6125:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),o=n(5488),s=n(5162);const i={},l="Send transactions",c={unversionedId:"how-to/send-transactions",id:"how-to/send-transactions",title:"Send transactions",description:"Transactions are a formal action on a blockchain.",source:"@site/wallet/how-to/send-transactions.md",sourceDirName:"how-to",slug:"/how-to/send-transactions",permalink:"/mm-docs-v2/preview/13cce44ec20731c1c921656894c4ca23d6908fd3/wallet/how-to/send-transactions",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"walletSidebar",previous:{title:"Interact with smart contracts",permalink:"/mm-docs-v2/preview/13cce44ec20731c1c921656894c4ca23d6908fd3/wallet/how-to/interact-with-smart-contracts"},next:{title:"Sign data",permalink:"/mm-docs-v2/preview/13cce44ec20731c1c921656894c4ca23d6908fd3/wallet/how-to/sign-data"}},u={},d=[{value:"Example",id:"example",level:2},{value:"Transaction parameters",id:"transaction-parameters",level:2},{value:"Nonce",id:"nonce",level:3},{value:"Gas price",id:"gas-price",level:3},{value:"Gas limit",id:"gas-limit",level:3},{value:"To",id:"to",level:3},{value:"Value",id:"value",level:3},{value:"Data",id:"data",level:3},{value:"Chain ID",id:"chain-id",level:3}],p={toc:d};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"send-transactions"},"Send transactions"),(0,r.kt)("p",null,"Transactions are a formal action on a blockchain.\nThey're always initiated in MetaMask with a call to the ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_sendTransaction")," method.\nThey can involve a simple sending of ether, sending tokens, creating a new smart contract, or\nchanging state on the blockchain in any number of ways.\nThey're always initiated by a signature from an ",(0,r.kt)("em",{parentName:"p"},"external account"),", or a simple key pair."),(0,r.kt)("p",null,"In MetaMask, using the ",(0,r.kt)("inlineCode",{parentName:"p"},"ethereum.request")," method directly, sending a transaction involves\ncomposing an options object like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const transactionParameters = {\n  nonce: '0x00', // ignored by MetaMask\n  gasPrice: '0x09184e72a000', // customizable by user during MetaMask confirmation.\n  gas: '0x2710', // customizable by user during MetaMask confirmation.\n  to: '0x0000000000000000000000000000000000000000', // Required except during contract publications.\n  from: ethereum.selectedAddress, // must match user's active address.\n  value: '0x00', // Only required to send ether to the recipient from the initiating external account.\n  data:\n    '0x7f7465737432000000000000000000000000000000000000000000000000000000600057', // Optional, but used for defining smart contract creation and interaction.\n  chainId: '0x3', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.\n};\n\n// txHash is a hex string\n// As with any RPC call, it may throw an error\nconst txHash = await ethereum.request({\n  method: 'eth_sendTransaction',\n  params: [transactionParameters],\n});\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"html",label:"HTML",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<button class="enableEthereumButton btn">Enable Ethereum</button>\n<button class="sendEthButton btn">Send Eth</button>\n'))),(0,r.kt)(s.Z,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const ethereumButton = document.querySelector('.enableEthereumButton');\nconst sendEthButton = document.querySelector('.sendEthButton');\n\nlet accounts = [];\n\n//Sending Ethereum to an address\nsendEthButton.addEventListener('click', () => {\n  ethereum\n    .request({\n      method: 'eth_sendTransaction',\n      params: [\n        {\n          from: accounts[0],\n          to: '0x2f318C334780961FB129D2a6c30D0763d9a5C970',\n          value: '0x29a2241af62c0000',\n          gasPrice: '0x09184e72a000',\n          gas: '0x2710',\n        },\n      ],\n    })\n    .then((txHash) => console.log(txHash))\n    .catch((error) => console.error);\n});\n\nethereumButton.addEventListener('click', () => {\n  getAccount();\n});\n\nasync function getAccount() {\n  accounts = await ethereum.request({ method: 'eth_requestAccounts' });\n}\n")))),(0,r.kt)("h2",{id:"transaction-parameters"},"Transaction parameters"),(0,r.kt)("p",null,"Many transaction parameters are handled by MetaMask, but it's good to know what all the parameters do."),(0,r.kt)("h3",{id:"nonce"},"Nonce"),(0,r.kt)("p",null,"MetaMask ignores this field."),(0,r.kt)("p",null,"In Ethereum every transaction has a nonce.\nThis is so that each transaction can only be processed by the blockchain once.\nAdditionally, to be a valid transaction, the nonce must either be ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),", or a transaction with the\nprevious number must have already been processed."),(0,r.kt)("p",null,"That means that transactions are always processed in order for a given account, and so incrementing\nnonces is very sensitive and easy to mess up, especially when a user is interacting with multiple\napplications with pending transactions using the same account, potentially across multiple devices."),(0,r.kt)("p",null,"For these reasons, MetaMask currently doesn't provide application developers any way to customize\nthe nonce of transactions it suggests.\nInstead, MetaMask\n",(0,r.kt)("a",{parentName:"p",href:"https://metamask.zendesk.com/hc/en-us/articles/360015489251"},"assists the user in managing their transaction queue themselves"),"."),(0,r.kt)("h3",{id:"gas-price"},"Gas price"),(0,r.kt)("p",null,"Gas price is an optional parameter, and best used on private blockchains."),(0,r.kt)("p",null,"In Ethereum, every transaction specifies a price for the gas that it consumes.\nTo maximize their profit, block producers pick pending transactions with higher gas prices first\nwhen creating the next block.\nThis means that a high gas price usually causes your transaction to be processed faster, at the cost\nof greater transaction fees.\nNote that this may not be true for, for example, Layer 2 networks, which may have a constant gas\nprice or no gas price at all."),(0,r.kt)("p",null,"In other words, while you can ignore this parameter on MetaMask's default networks, you may want to\ninclude it in situations where your application knows more about the target network than we do.\nOn our default networks, MetaMask allows users to choose between slow, medium, and fast options for\ntheir gas price."),(0,r.kt)("p",null,"Read about ",(0,r.kt)("a",{parentName:"p",href:"https://metamask.zendesk.com/hc/en-us/articles/360022895972"},"how to use advanced gas controls"),"."),(0,r.kt)("h3",{id:"gas-limit"},"Gas limit"),(0,r.kt)("p",null,"Gas limit is an optional parameter, since MetaMask automatically calculates a reasonable gas price."),(0,r.kt)("h3",{id:"to"},"To"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"to")," parameter is a hex-encoded Ethereum address.\nIt's required for transactions with a recipient (all transactions except for contract creation)."),(0,r.kt)("p",null,"Contract creation occurs when there is no ",(0,r.kt)("inlineCode",{parentName:"p"},"to")," value but there is a ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," value."),(0,r.kt)("h3",{id:"value"},"Value"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," parameter is a hex-encoded value of the network's native currency to send.\nOn mainnet, this is ",(0,r.kt)("a",{parentName:"p",href:"https://www.ethereum.org/eth"},"ether"),", which is denominated in wei."),(0,r.kt)("p",null,"Please note that these numbers often used in Ethereum are far higher precision than native\nJavaScript numbers, and can cause unpredictable behavior if not anticipated.\nFor this reason, we recommend using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/indutny/bn.js/"},"BN.js")," when manipulating\nvalues intended for the blockchain."),(0,r.kt)("h3",{id:"data"},"Data"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," parameter is required for smart contract creation."),(0,r.kt)("p",null,"This field is also used for specifying contract methods and their parameters.\nSee the ",(0,r.kt)("a",{parentName:"p",href:"https://solidity.readthedocs.io/en/develop/abi-spec.html"},"solidity ABI spec")," for more\ninformation on how the data is encoded."),(0,r.kt)("h3",{id:"chain-id"},"Chain ID"),(0,r.kt)("p",null,"MetaMask currently ignores this field.\nThe chain ID is derived from the user's current selected network at ",(0,r.kt)("inlineCode",{parentName:"p"},"ethereum.networkVersion"),"."),(0,r.kt)("p",null,"In the future, we might allow a way to connect to multiple networks at once, at which point this\nparameter will become important, so it may be useful to be in the habit of including it now."))}h.isMDXComponent=!0}}]);