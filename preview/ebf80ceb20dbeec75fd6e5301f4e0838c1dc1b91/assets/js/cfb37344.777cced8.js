"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[535],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},b="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(r),f=o,u=b["".concat(c,".").concat(f)]||b[f]||d[f]||a;return r?n.createElement(u,i(i({ref:t},p),{},{components:r})):n.createElement(u,i({ref:t},p))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[b]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1385:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={},i="Onboarding library",s={unversionedId:"concepts/onboarding-library",id:"concepts/onboarding-library",title:"Onboarding library",description:"As an Ethereum enabled site developer, sending users offsite to install MetaMask presents challenges.",source:"@site/wallet/concepts/onboarding-library.md",sourceDirName:"concepts",slug:"/concepts/onboarding-library",permalink:"/mm-docs-v2/preview/ebf80ceb20dbeec75fd6e5301f4e0838c1dc1b91/wallet/concepts/onboarding-library",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"walletSidebar",previous:{title:"Signing methods",permalink:"/mm-docs-v2/preview/ebf80ceb20dbeec75fd6e5301f4e0838c1dc1b91/wallet/concepts/signing-methods"},next:{title:"Convenience libraries",permalink:"/mm-docs-v2/preview/ebf80ceb20dbeec75fd6e5301f4e0838c1dc1b91/wallet/concepts/convenience-libraries"}},c={},l=[],p={toc:l};function b(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"onboarding-library"},"Onboarding library"),(0,o.kt)("p",null,"As an Ethereum enabled site developer, sending users offsite to install MetaMask presents challenges.\nMost notably, you must inform the user to return to your site and refresh their browser after the\ninstallation.\nYour site detects the user's newly installed MetaMask extension only after that refresh."),(0,o.kt)("p",null,"MetaMask now provides an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-onboarding"},"onboarding library"),"\ndesigned to improve and simplify the onboarding experience.\nThe new library exposes an API to initiate the onboarding process.\nIn the process, it registers your site as the origin of the onboarding request.\nMetaMask checks for this origin after the user completes the onboarding flow.\nIf it finds an origin, the final confirmation button of the MetaMask onboarding flow indicates that\nthe user will be redirected back to your site."),(0,o.kt)("p",null,"Learn how to ",(0,o.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/ebf80ceb20dbeec75fd6e5301f4e0838c1dc1b91/wallet/how-to/use-onboarding-library"},"use the onboarding library"),"."),(0,o.kt)("p",null,"The following is a diagram of the interactions between the onboarding library, the forwarder, and\nthe extension:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/2459287/67541693-439c9600-f6c0-11e9-93f8-112a8941384a.png",alt:"Onboarding Library Diagram"})))}b.isMDXComponent=!0}}]);