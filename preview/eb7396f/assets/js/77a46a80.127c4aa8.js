"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[6423],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,h=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[m]="string"==typeof e?e:r,s[1]=p;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5833:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={},s="Snaps quickstart",p={unversionedId:"get-started/quickstart",id:"get-started/quickstart",title:"Snaps quickstart",description:"Get started with Snaps using the",source:"@site/snaps/get-started/quickstart.md",sourceDirName:"get-started",slug:"/get-started/quickstart",permalink:"/mm-docs-v2/preview/eb7396f/snaps/get-started/quickstart",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"snapsSidebar",previous:{title:"Install Snaps",permalink:"/mm-docs-v2/preview/eb7396f/snaps/get-started/install-snaps"},next:{title:"How to",permalink:"/mm-docs-v2/preview/eb7396f/snaps/category/how-to"}},i={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create the project",id:"create-the-project",level:2},{value:"Start the snap",id:"start-the-snap",level:2},{value:"Connect to the snap",id:"connect-to-the-snap",level:2},{value:"Customize the snap",id:"customize-the-snap",level:2}],c={toc:l};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"snaps-quickstart"},"Snaps quickstart"),(0,r.kt)("p",null,"Get started with Snaps using the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/template-snap-monorepo"},"Snaps template")," built with TypeScript and React."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/eb7396f/snaps/get-started/install-snaps"},"Snaps installed")),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Snaps works with the latest LTS version of Node.js, but we recommend using the version specified in\nthe template's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/template-snap-monorepo/blob/main/.nvmrc"},(0,r.kt)("inlineCode",{parentName:"a"},".nvmrc"))," file."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A text editor (for example, ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"VS Code"),")"))),(0,r.kt)("h2",{id:"create-the-project"},"Create the project"),(0,r.kt)("p",null,"Use the Snaps template by\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/template-snap-monorepo/generate"},"creating a new repository from the template"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository"},"Clone the repository"),"\nusing the command line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:<your-username>/template-snap-monorepo.git\n")),(0,r.kt)("p",null,"You can learn about the ",(0,r.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/eb7396f/snaps/concepts/anatomy"},"anatomy of your snap project files"),"."),(0,r.kt)("h2",{id:"start-the-snap"},"Start the snap"),(0,r.kt)("p",null,"From the root of the repository, install the project dependencies using Yarn:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn\n")),(0,r.kt)("p",null,"Start the development server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn start\n")),(0,r.kt)("p",null,"You're now serving the snap and its front-end at ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8000/"},(0,r.kt)("inlineCode",{parentName:"a"},"http://localhost:8000")),"."),(0,r.kt)("h2",{id:"connect-to-the-snap"},"Connect to the snap"),(0,r.kt)("p",null,"On the front-end, select the ",(0,r.kt)("strong",{parentName:"p"},"Connect")," button and the MetaMask Flask extension pops up and\nrequires you to approve the snap's permissions."),(0,r.kt)("p",null,"Once connected, select the ",(0,r.kt)("strong",{parentName:"p"},"Send message")," button to display a custom message within a confirmation\nscreen in MetaMask."),(0,r.kt)("h2",{id:"customize-the-snap"},"Customize the snap"),(0,r.kt)("p",null,"Open the project in a text editor.\nYou can customize your snap by editing ",(0,r.kt)("inlineCode",{parentName:"p"},"index.ts")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/snap/src")," folder."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"index.ts")," contains an example request that uses the\n",(0,r.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/eb7396f/snaps/reference/rpc-api#snap_confirm"},(0,r.kt)("inlineCode",{parentName:"a"},"snap_confirm"))," method to display a custom confirmation screen:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { OnRpcRequestHandler } from '@metamask/snap-types';\nimport { getMessage } from './message';\n\nexport const onRpcRequest: OnRpcRequestHandler = ({ origin, request }) => {\n  switch (request.method) {\n    case 'hello':\n      return wallet.request({\n        method: 'snap_confirm',\n        params: [\n          {\n            prompt: getMessage(origin),\n            description:\n              'This custom confirmation is just for display purposes.',\n            textAreaContent:\n              'Edit the source code to make your snap do what you want.',\n          },\n        ],\n      });\n    default:\n      throw new Error('Method not found.');\n  }\n};\n")),(0,r.kt)("p",null,"Edit the text in the ",(0,r.kt)("inlineCode",{parentName:"p"},"description")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"textAreaContent")," field and select the ",(0,r.kt)("strong",{parentName:"p"},"Reconnect")," button\non the front-end to re-install the snap."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"MetaMask automatically re-installs locally hosted snaps whenever it receives a connection request\nfor them.")),(0,r.kt)("p",null,"The next time you select the ",(0,r.kt)("strong",{parentName:"p"},"Send message")," button, you see the updated text in the confirmation screen."),(0,r.kt)("p",null,"You've now successfully connected, installed, interacted with, and customized your snap!\nLearn more about ",(0,r.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/eb7396f/snaps/how-to/develop-a-snap"},"developing a snap"),"."))}m.isMDXComponent=!0}}]);