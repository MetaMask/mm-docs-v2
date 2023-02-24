"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[2928],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=p(n),c=i,u=h["".concat(l,".").concat(c)]||h[c]||m[c]||r;return n?a.createElement(u,o(o({ref:t},d),{},{components:n})):a.createElement(u,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},634:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={},o="Signing methods",s={unversionedId:"concepts/signing-methods",id:"concepts/signing-methods",title:"Signing methods",description:"There are currently six methods used to sign data in MetaMask:",source:"@site/wallet/concepts/signing-methods.md",sourceDirName:"concepts",slug:"/concepts/signing-methods",permalink:"/wallet/concepts/signing-methods",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"walletSidebar",previous:{title:"MetaMask SDK connections",permalink:"/wallet/concepts/sdk-connections"},next:{title:"Onboarding library",permalink:"/wallet/concepts/onboarding-library"}},l={},p=[{value:"History",id:"history",level:2},{value:"<code>signTypedData_v1</code>",id:"signtypeddata_v1",level:3},{value:"<code>signTypedData_v3</code>",id:"signtypeddata_v3",level:3},{value:"<code>signTypedData_v4</code>",id:"signtypeddata_v4",level:3}],d={toc:p};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"signing-methods"},"Signing methods"),(0,i.kt)("p",null,"There are currently six methods used to ",(0,i.kt)("a",{parentName:"p",href:"/wallet/how-to/sign-data"},"sign data")," in MetaMask:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"eth_sign")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"personal_sign")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"signTypedData")," (currently identical to ",(0,i.kt)("inlineCode",{parentName:"li"},"signTypedData_v1"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"signTypedData_v1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"signTypedData_v3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"signTypedData_v4"))),(0,i.kt)("p",null,"You can see the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/eth-sig-util"},"JavaScript implementations of these methods"),"."),(0,i.kt)("h2",{id:"history"},"History"),(0,i.kt)("p",null,"When MetaMask first started, the Provider API wasn't designed to be exposed to untrusted websites,\nand so some considerations weren't taken as seriously as they were later."),(0,i.kt)("p",null,"In particular, the method ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_sign")," is an open-ended signing method that allows signing an\narbitrary hash, which means it can be used to sign transactions, or any other data, making it a\ndangerous phishing risk."),(0,i.kt)("p",null,"For this reason, we make this method show the most frightening possible message to the user, and\ngenerally discourage using this method in production.\nHowever, some applications (usually admin panels internal to teams) use this method for the sake of\nits ease of use, and so we have continued to support it for the sake of not breaking the workflows\nof active projects."),(0,i.kt)("p",null,"Eventually, the ",(0,i.kt)("inlineCode",{parentName:"p"},"personal_sign")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethereum/go-ethereum/pull/2940"},"spec")," was\nproposed, which added a prefix to the data so it couldn't impersonate transactions.\nWe also made this method able to display human-readable text when UTF-8 encoded, making it a popular\nchoice for site logins."),(0,i.kt)("p",null,"However, the text-prefix made those signatures expensive to verify on-chain, so with the help of the\n",(0,i.kt)("a",{parentName:"p",href:"https://0x.org/"},"0xProtocol")," team and ",(0,i.kt)("a",{parentName:"p",href:"https://spankchain.com/"},"SpankChain"),", the\n",(0,i.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-712"},"EIP-712")," spec was written."),(0,i.kt)("p",null,"The strange part of EIP-712, and this decentralized standards ecosystem, is that the proposal\nchanged several times while retaining the same EIP.\nThis means what we initially implemented as ",(0,i.kt)("inlineCode",{parentName:"p"},"signTypedData")," was the earliest proposed version, while\nother groups implemented later versions under the same method name."),(0,i.kt)("p",null,"To avoid compatibility issues between clients, we recommend using the hard-versioned method names\n",(0,i.kt)("inlineCode",{parentName:"p"},"signTypedData_v1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"signTypedData_v3"),".\nThe missing ",(0,i.kt)("inlineCode",{parentName:"p"},"v2")," represents an intermediary design that was implemented by the Cipher browser, so\nthat we have room to implement it if there is ever enough developer demand for it."),(0,i.kt)("p",null,"In the future, it may help to have method names include a hash of their exact proposal, since in a\ndecentralized ecosystem, there is no absolute source of truth of what a given name should map to.\nInstead, we are forced to invent new patterns of collaboration, where we can drive forward and\ninnovate, while simultaneously avoiding creating a brittle ecosystem by changing our meanings out\nfrom under the words."),(0,i.kt)("h3",{id:"signtypeddata_v1"},(0,i.kt)("inlineCode",{parentName:"h3"},"signTypedData_v1")),(0,i.kt)("p",null,"This early version of the spec lacked some later security improvements, and should generally be\nneglected in favor of ",(0,i.kt)("inlineCode",{parentName:"p"},"signTypedData_v3"),"."),(0,i.kt)("p",null,"Also known as ",(0,i.kt)("inlineCode",{parentName:"p"},"signTypedData"),", originally premiered October 2017 in\n",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/metamask/scaling-web3-with-signtypeddata-91d6efc8b290"},"this blog post"),", this\nmethod was the original state-channel-centric signing method."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"signTypedData")," family has a few major design considerations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Cheap to verify on chain"),(0,i.kt)("li",{parentName:"ul"},"Still somewhat human-readable"),(0,i.kt)("li",{parentName:"ul"},"Hard to phish signatures")),(0,i.kt)("p",null,"If on-chain verifiability cost is a high priority for you, you might want to consider it."),(0,i.kt)("h3",{id:"signtypeddata_v3"},(0,i.kt)("inlineCode",{parentName:"h3"},"signTypedData_v3")),(0,i.kt)("p",null,"The method ",(0,i.kt)("inlineCode",{parentName:"p"},"signTypedData_v3")," is a highly used version of the\n",(0,i.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-712"},"EIP-712 spec"),"."),(0,i.kt)("p",null,"You can read the\n",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/metamask/eip712-is-coming-what-to-expect-and-how-to-use-it-bb92fd1a7a26"},"introductory blog post to this method"),"."),(0,i.kt)("h3",{id:"signtypeddata_v4"},(0,i.kt)("inlineCode",{parentName:"h3"},"signTypedData_v4")),(0,i.kt)("p",null,"The method ",(0,i.kt)("inlineCode",{parentName:"p"},"signTypedData_v4")," currently represents the latest version of the\n",(0,i.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-712"},"EIP-712 spec"),", with added support for arrays and with a\nbreaking fix for the way structs are encoded."),(0,i.kt)("p",null,"This doesn't mean it's perfect, and doesn't mean we won't eventually have a ",(0,i.kt)("inlineCode",{parentName:"p"},"v5"),", but we do intend\nto protect this namespace and keep it compatible going forwards."),(0,i.kt)("p",null,"You can read the\n",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/metamask/eip712-is-coming-what-to-expect-and-how-to-use-it-bb92fd1a7a26"},"introductory blog post to this method"),"."),(0,i.kt)("p",null,"Hopefully soon we will also have good examples for parsing method input into structs for\nverification on-chain."))}h.isMDXComponent=!0}}]);