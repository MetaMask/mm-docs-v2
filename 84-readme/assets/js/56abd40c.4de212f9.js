"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[2841],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(t),d=o,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return t?a.createElement(h,r(r({ref:n},c),{},{components:t})):a.createElement(h,r({ref:n},c))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[m]="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6138:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=t(7462),o=(t(7294),t(3905));const i={description:"Learn about the anatomy of a snap project."},r="Snap anatomy",s={unversionedId:"concepts/anatomy",id:"concepts/anatomy",title:"Snap anatomy",description:"Learn about the anatomy of a snap project.",source:"@site/snaps/concepts/anatomy.md",sourceDirName:"concepts",slug:"/concepts/anatomy",permalink:"/mm-docs-v2/84-readme/snaps/concepts/anatomy",draft:!1,tags:[],version:"current",frontMatter:{description:"Learn about the anatomy of a snap project."},sidebar:"snapsSidebar",previous:{title:"Concepts",permalink:"/mm-docs-v2/84-readme/snaps/category/concepts"},next:{title:"Snap lifecycle",permalink:"/mm-docs-v2/84-readme/snaps/concepts/lifecycle"}},p={},l=[{value:"Source code",id:"source-code",level:2},{value:"Manifest file",id:"manifest-file",level:2},{value:"Configuration file",id:"configuration-file",level:2},{value:"Bundle file",id:"bundle-file",level:2}],c={toc:l};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"snap-anatomy"},"Snap anatomy"),(0,o.kt)("p",null,"If you look at the directory structure of the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/template-snap-monorepo"},"Snaps template repository")," used in the\n",(0,o.kt)("a",{parentName:"p",href:"/mm-docs-v2/84-readme/snaps/get-started/quickstart"},"Snaps quickstart"),", it looks something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"template-snap-monorepo/\n\u251c\u2500 packages/\n\u2502  \u251c\u2500 site/\n|  |  |- src/\n|  |  |  |- App.tsx\n|  |  \u251c\u2500 package.json\n|  |  |- ...(react app content)\n|  |\n\u2502  \u251c\u2500 snap/\n|  |  \u251c\u2500 src/\n|  |  |  |- index.ts\n|  |  \u251c\u2500 snap.manifest.json\n|  |  \u251c\u2500 package.json\n|  |  |- ... (snap content)\n\u251c\u2500 package.json\n\u251c\u2500 ... (other stuff)\n")),(0,o.kt)("p",null,"Source files other than ",(0,o.kt)("inlineCode",{parentName:"p"},"index.ts")," are located through its imports.\nThe defaults can be overwritten in the ",(0,o.kt)("a",{parentName:"p",href:"#configuration-file"},"configuration file"),"."),(0,o.kt)("admonition",{title:"Create a snap project",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"When you create a new snap project using ",(0,o.kt)("inlineCode",{parentName:"p"},"mm-snap init"),", it has all these files.\nStill, we recommend\n",(0,o.kt)("a",{parentName:"p",href:"/mm-docs-v2/84-readme/snaps/get-started/quickstart"},"cloning the template snap repository to get started"),".")),(0,o.kt)("p",null,"This page examines the major components of a snap:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#source-code"},"The source code")," contains the primary code of the snap."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#manifest-file"},"The manifest file")," tells MetaMask important information about the snap."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#configuration-file"},"The configuration file")," specifies configuration options for the snap."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#bundle-file"},"The bundle file")," is the output file of the published snap.")),(0,o.kt)("h2",{id:"source-code"},"Source code"),(0,o.kt)("p",null,"If you're familiar with JavaScript or TypeScript development, developing a snap might feel familiar\nto you.\nConsider this simple snap, ",(0,o.kt)("inlineCode",{parentName:"p"},"hello-snap"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},"module.exports.onRpcRequest = async ({ origin, request }) => {\n  switch (request.method) {\n    // Expose a \"hello\" RPC method to dapps\n    case 'hello':\n      return 'world!';\n\n    default:\n      throw new Error('Method not found.');\n  }\n};\n")),(0,o.kt)("p",null,"To communicate with the outside world, the snap must implement its own JSON-RPC API by exposing\nthe exported function ",(0,o.kt)("a",{parentName:"p",href:"/mm-docs-v2/84-readme/snaps/reference/exports#onrpcrequest"},(0,o.kt)("inlineCode",{parentName:"a"},"onRpcRequest")),".\nWhenever the snap receives a JSON-RPC request from a dapp or another snap, this handler function is\ncalled with the specified parameters."),(0,o.kt)("p",null,"In addition to being able to expose a JSON-RPC API, snaps can access the global object ",(0,o.kt)("inlineCode",{parentName:"p"},"snap"),".\nYou can use this object to make Snaps-specific JSON-RPC requests."),(0,o.kt)("p",null,"If a dapp wants to use ",(0,o.kt)("inlineCode",{parentName:"p"},"hello-snap"),", it can implement something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Connect to the snap, enabling its usage inside the dapp\nawait window.ethereum.request({\n  method: 'wallet_enable',\n  params: [\n    {\n      wallet_snap: {\n        'npm:hello-snap': {\n          version: '^1.0.0',\n        },\n      },\n    },\n  ],\n});\n\n// Invoke the \"hello\" RPC method exposed by the snap\nconst hello = await window.ethereum.request({\n  method: 'wallet_invokeSnap',\n  params: { snapId: 'npm:hello-snap', request: { method: 'hello' } },\n});\n\nconsole.log(hello); // 'world!'\n")),(0,o.kt)("p",null,"The snap's RPC API is completely up to you, as long as it's a valid\n",(0,o.kt)("a",{parentName:"p",href:"https://www.jsonrpc.org/specification"},"JSON-RPC")," API."),(0,o.kt)("admonition",{title:"Does my snap need to have an RPC API?",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"No, that's also up to you!\nIf your snap can do something useful without receiving and responding to JSON-RPC requests, such as\nproviding ",(0,o.kt)("a",{parentName:"p",href:"/mm-docs-v2/84-readme/snaps/reference/exports#ontransaction"},"transaction insights"),", then you can skip exporting\n",(0,o.kt)("inlineCode",{parentName:"p"},"onRpcRequest"),".\nHowever, if you want to do something such as manage the user's keys for a particular protocol and\ncreate a dapp that, for example, sends transactions for that protocol using your snap, you must\nspecify an RPC API.")),(0,o.kt)("h2",{id:"manifest-file"},"Manifest file"),(0,o.kt)("p",null,"To get MetaMask to execute your snap, you must have a valid manifest file named ",(0,o.kt)("inlineCode",{parentName:"p"},"snap.manifest.json"),",\nlocated in your package root directory.\nThe manifest file of ",(0,o.kt)("inlineCode",{parentName:"p"},"hello-snap")," would look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": "1.0.0",\n  "proposedName": "hello-snap",\n  "description": "A snap that says hello!",\n  "repository": {\n    "type": "git",\n    "url": "https://github.com/Hello/hello-snap.git"\n  },\n  "source": {\n    "shasum": "w3FltkDjKQZiPwM+AThnmypt0OFF7hj4ycg/kxxv+nU=",\n    "location": {\n      "npm": {\n        "filePath": "dist/bundle.js",\n        "iconPath": "images/icon.svg",\n        "packageName": "hello-snap",\n        "registry": "https://registry.npmjs.org/"\n      }\n    }\n  },\n  "initialPermissions": {},\n  "manifestVersion": "0.1"\n}\n')),(0,o.kt)("p",null,"The manifest tells MetaMask important information about your snap, such as where it's published\n(using ",(0,o.kt)("inlineCode",{parentName:"p"},"source.location"),") and how to verify the integrity of the snap source code (by attempting to\nreproduce the ",(0,o.kt)("inlineCode",{parentName:"p"},"source.shasum")," value)."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Currently, snaps can only be\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry"},"published to the official npm registry"),",\nand the manifest must also match the corresponding fields of the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file.\nIn the future, developers will be able to distribute snaps in different ways, and the manifest will\nexpand to support different publishing solutions."),(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/SIPs/blob/main/SIPS/sip-9.md"},"snaps publishing specification"),"\ndetails the requirements of both ",(0,o.kt)("inlineCode",{parentName:"p"},"snap.manifest.json")," and its relationship to ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),".")),(0,o.kt)("p",null,"You might need to modify some manifest fields manually.\nFor example, if you change the location of the (optional) icon SVG file, you must update\n",(0,o.kt)("inlineCode",{parentName:"p"},"source.location.npm.iconPath")," to match.\nYou can also use the ",(0,o.kt)("a",{parentName:"p",href:"/mm-docs-v2/84-readme/snaps/reference/cli/"},"command line")," to update some fields for you.\nFor example, ",(0,o.kt)("inlineCode",{parentName:"p"},"mm-snap build")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"mm-snap manifest --fix")," updates ",(0,o.kt)("inlineCode",{parentName:"p"},"source.shasum"),"."),(0,o.kt)("h2",{id:"configuration-file"},"Configuration file"),(0,o.kt)("p",null,"The snap configuration file, ",(0,o.kt)("inlineCode",{parentName:"p"},"snap.config.js"),", should be placed in the project root directory.\nYou can override the default values of the ",(0,o.kt)("a",{parentName:"p",href:"/mm-docs-v2/84-readme/snaps/reference/cli/options"},"Snaps CLI options")," by specifying\nthem in the ",(0,o.kt)("inlineCode",{parentName:"p"},"cliOptions")," property of the configuration file.\nFor example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  cliOptions: {\n    src: 'lib/index.js',\n    dist: 'out',\n    port: 9000,\n  },\n};\n")),(0,o.kt)("p",null,"If you want to customize the Browserify build process, you can provide the ",(0,o.kt)("inlineCode",{parentName:"p"},"bundlerCustomizer")," property.\nIt's a function that takes one argument, the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/browserify/browserify#api-example"},"browserify object")," which MetaMask uses\ninternally to bundle the snap.\nYou can transform it in any way you want, for example, adding plugins.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"bundleCustomizer")," function looks something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const brfs = require('brfs');\n\nmodule.exports = {\n  cliOptions: {\n    /* ... */\n  },\n  bundlerCustomizer: (bundler) => {\n    bundler.transform(brfs);\n  },\n};\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You should not publish the configuration file to NPM, since it's only used for development and\nbuilding.\nHowever, you can commit the file to GitHub to share the configuration with your team, since it\nshouldn't contain any secrets.")),(0,o.kt)("h2",{id:"bundle-file"},"Bundle file"),(0,o.kt)("p",null,"Because of the way snaps are executed, they must be published as a single ",(0,o.kt)("inlineCode",{parentName:"p"},".js")," file containing the\nentire source code and all dependencies.\nMoreover, the ",(0,o.kt)("a",{parentName:"p",href:"/mm-docs-v2/84-readme/snaps/concepts/execution-environment"},"Snaps execution environment")," has no DOM, no Node.js\nAPIs, and no filesystem access, so anything that relies on the DOM doesn't work, and any Node\nbuilt-ins must be bundled along with the snap."),(0,o.kt)("p",null,"Use the command ",(0,o.kt)("inlineCode",{parentName:"p"},"mm-snap build")," to bundle your snap using ",(0,o.kt)("a",{parentName:"p",href:"https://browserify.org"},"Browserify"),".\nThis command finds all dependencies using your specified main entry point and outputs a bundle\nfile to your specified output path."))}m.isMDXComponent=!0}}]);