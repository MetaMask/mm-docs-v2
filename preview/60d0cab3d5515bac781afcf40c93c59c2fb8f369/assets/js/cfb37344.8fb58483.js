"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[535],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},f="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(r),d=a,u=f["".concat(s,".").concat(d)]||f[d]||b[d]||o;return r?n.createElement(u,i(i({ref:t},p),{},{components:r})):n.createElement(u,i({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[f]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1385:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={},i="Onboarding library",c={unversionedId:"concepts/onboarding-library",id:"concepts/onboarding-library",title:"Onboarding library",description:"As an Ethereum enabled site developer, sending users offsite to install MetaMask presents challenges.",source:"@site/wallet/concepts/onboarding-library.md",sourceDirName:"concepts",slug:"/concepts/onboarding-library",permalink:"/mm-docs-v2/preview/60d0cab3d5515bac781afcf40c93c59c2fb8f369/wallet/concepts/onboarding-library",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"walletSidebar",previous:{title:"Signing methods",permalink:"/mm-docs-v2/preview/60d0cab3d5515bac781afcf40c93c59c2fb8f369/wallet/concepts/signing-methods"},next:{title:"Convenience libraries",permalink:"/mm-docs-v2/preview/60d0cab3d5515bac781afcf40c93c59c2fb8f369/wallet/concepts/convenience-libraries"}},s={},l=[],p={toc:l};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"onboarding-library"},"Onboarding library"),(0,a.kt)("p",null,"As an Ethereum enabled site developer, sending users offsite to install MetaMask presents challenges.\nMost notably, you must inform the user to return to your site and refresh their browser after the\ninstallation.\nYour site detects the user's newly installed MetaMask extension only after that refresh."),(0,a.kt)("p",null,"MetaMask now provides an ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-onboarding"},"onboarding library"),"\ndesigned to improve and simplify the onboarding experience.\nThe new library exposes an API to initiate the onboarding process.\nIn the process, it registers your site as the origin of the onboarding request.\nMetaMask checks for this origin after the user completes the onboarding flow.\nIf it finds an origin, the final confirmation button of the MetaMask onboarding flow indicates that\nthe user will be redirected back to your site."),(0,a.kt)("p",null,"Learn how to ",(0,a.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/60d0cab3d5515bac781afcf40c93c59c2fb8f369/wallet/how-to/use-onboarding-library"},"use the onboarding library"),"."),(0,a.kt)("p",null,"The following is a diagram of the interactions between the onboarding library, the forwarder, and\nthe extension:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/2459287/67541693-439c9600-f6c0-11e9-93f8-112a8941384a.png",alt:"Onboarding Library Diagram"})))}f.isMDXComponent=!0}}]);