"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[4359],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(d,s(s({ref:t},l),{},{components:n})):r.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={description:"Learn about the user interface of a snap."},s="Snap user interface",i={unversionedId:"concepts/user-interface",id:"concepts/user-interface",title:"Snap user interface",description:"Learn about the user interface of a snap.",source:"@site/snaps/concepts/user-interface.md",sourceDirName:"concepts",slug:"/concepts/user-interface",permalink:"/mm-docs-v2/87-onboarding/snaps/concepts/user-interface",draft:!1,tags:[],version:"current",frontMatter:{description:"Learn about the user interface of a snap."},sidebar:"snapsSidebar",previous:{title:"Snap lifecycle",permalink:"/mm-docs-v2/87-onboarding/snaps/concepts/lifecycle"},next:{title:"Snap execution environment",permalink:"/mm-docs-v2/87-onboarding/snaps/concepts/execution-environment"}},c={},p=[],l={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"snap-user-interface"},"Snap user interface"),(0,a.kt)("p",null,"Any snap must represent itself and what it does to the end user.\nUsing the MetaMask settings page, the user can see their installed snaps.\nFor each snap, the user can:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"See most of its manifest data."),(0,a.kt)("li",{parentName:"ul"},"See its execution status (running, stopped, or crashed)."),(0,a.kt)("li",{parentName:"ul"},"Enable and disable the snap.")),(0,a.kt)("p",null,"Other than the settings page, a snap can modify the MetaMask UI using\n",(0,a.kt)("a",{parentName:"p",href:"/mm-docs-v2/87-onboarding/snaps/how-to/use-custom-ui"},"custom UI")," in only two ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"By opening a dialog using the ",(0,a.kt)("a",{parentName:"li",href:"/mm-docs-v2/87-onboarding/snaps/reference/rpc-api#snapdialog"},(0,a.kt)("inlineCode",{parentName:"a"},"snap_dialog"))," RPC method."),(0,a.kt)("li",{parentName:"ul"},"By returning transaction insights from the ",(0,a.kt)("a",{parentName:"li",href:"/mm-docs-v2/87-onboarding/snaps/reference/exports#ontransaction"},(0,a.kt)("inlineCode",{parentName:"a"},"onTransaction")),"\nexport.")),(0,a.kt)("p",null,"This means that most snaps must rely on dapps/websites and their own RPC methods to present their\ndata to the user."),(0,a.kt)("p",null,"Providing more ways for snaps to modify the MetaMask UI is an important goal of the Snaps system,\nand over time more and more snaps will be able to contain their user interfaces entirely within\nMetaMask itself."))}u.isMDXComponent=!0}}]);