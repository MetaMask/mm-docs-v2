"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[9463],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,d=m["".concat(l,".").concat(u)]||m[u]||h[u]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i="Register a contract's methods names",s={unversionedId:"how-to/register-method-names",id:"how-to/register-method-names",title:"Register a contract's methods names",description:"MetaMask uses the Parity on-chain registry of function signatures to display method names on the",source:"@site/wallet/how-to/register-method-names.md",sourceDirName:"how-to",slug:"/how-to/register-method-names",permalink:"/wallet/how-to/register-method-names",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"walletSidebar",previous:{title:"Register a token with users",permalink:"/wallet/how-to/register-token"},next:{title:"Access a user's MetaMask provider",permalink:"/wallet/how-to/access-provider"}},l={},c=[{value:"Verify",id:"verify",level:2},{value:"Use Remix",id:"use-remix",level:3},{value:"Use <code>eth-method-registry</code>",id:"use-eth-method-registry",level:3}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"register-a-contracts-methods-names"},"Register a contract's methods names"),(0,a.kt)("p",null,"MetaMask uses the Parity on-chain registry of function signatures to display method names on the\nconfirm screen.\nFor many common method names, such as token methods, this allows MetaMask to successfully look up\nthe method names by their ",(0,a.kt)("a",{parentName:"p",href:"https://solidity.readthedocs.io/en/v0.4.21/abi-spec.html"},"method signature"),".\nHowever, sometimes you're using a method that isn't in that on-chain registry, and MetaMask simply\ndisplays ",(0,a.kt)("strong",{parentName:"p"},"Contract Interaction")," to the user."),(0,a.kt)("p",null,"To add your contract's function names to this registry so it shows in the MetaMask interface, follow\nthese steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to the\n",(0,a.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x44691b39d1a75dc4e0a0346cbb15e310e6ed1e86#writeContract"},"Mainnet Parity signature registration contract on Etherscan"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Connect MetaMask.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use Etherscan's write contract feature to input the string value (without quotes or spaces) to\nthe register function.\nFor example:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"getOwners()")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"execTransaction(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,bytes)"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select ",(0,a.kt)("strong",{parentName:"p"},"write"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Approve the transaction in MetaMask (you only pay gas)."))),(0,a.kt)("h2",{id:"verify"},"Verify"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ethers.utils.keccak256('getOwners()') => 0xa0e67e2bdc0a6d8a09ccd6c353c9df590807ad66ff5e6630c4f31a86dfa84821")),(0,a.kt)("p",null,"Input the first 10 characters, ",(0,a.kt)("inlineCode",{parentName:"p"},"0xa0e67e2b"),", into\n",(0,a.kt)("a",{parentName:"p",href:"https://jennypollack.github.io/function_signature_registry/"},"this demo app")," that checks the\non-chain registry (Mainnet or Rinkeby only)."),(0,a.kt)("h3",{id:"use-remix"},"Use Remix"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Paste the contract code from\n",(0,a.kt)("a",{parentName:"li",href:"https://www.bokconsulting.com.au/blog/a-quick-look-at-paritys-signature-registry-contract/"},"bokky's blog post"),"\ninto ",(0,a.kt)("a",{parentName:"li",href:"https://remix.ethereum.org"},"Remix"),"."),(0,a.kt)("li",{parentName:"ol"},"Set the correct compiler version based on the contract."),(0,a.kt)("li",{parentName:"ol"},"Use Remix's write functionality to add to the registry."),(0,a.kt)("li",{parentName:"ol"},"You can look at the ",(0,a.kt)("inlineCode",{parentName:"li"},"FUNCTIONHASHES")," section on Remix by loading the signature registry contract,\nand selecting ",(0,a.kt)("strong",{parentName:"li"},"details")," on the compile tab.")),(0,a.kt)("h3",{id:"use-eth-method-registry"},"Use ",(0,a.kt)("inlineCode",{parentName:"h3"},"eth-method-registry")),(0,a.kt)("p",null,"You can also use the\n",(0,a.kt)("a",{parentName:"p",href:"https://rinkeby.etherscan.io/address/0x0c0831fb1ec7442485fb41a033ba188389a990b4"},"signature registry"),"\ndeployed on Rinkeby."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/eth-method-registry"},(0,a.kt)("inlineCode",{parentName:"a"},"eth-method-registry"))," is used to lookup methods\nin MetaMask."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"MetaMask reads from the mainnet ",(0,a.kt)("inlineCode",{parentName:"p"},"eth-method-registry")," endpoint, regardless of the user's network.")),(0,a.kt)("p",null,"For more details, see ",(0,a.kt)("a",{parentName:"p",href:"https://ethereum.stackexchange.com/questions/59678/metamask-shows-unknown-function-when-calling-method-send-function"},"this StackExchange answer"),"."))}m.isMDXComponent=!0}}]);