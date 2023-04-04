"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[8778],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>b});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=n.createContext({}),p=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},m=function(e){var a=p(e.components);return n.createElement(o.Provider,{value:a},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(t),d=l,b=u["".concat(o,".").concat(d)]||u[d]||c[d]||r;return t?n.createElement(b,s(s({ref:a},m),{},{components:t})):n.createElement(b,s({ref:a},m))}));function b(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,s=new Array(r);s[0]=d;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i[u]="string"==typeof e?e:l,s[1]=i;for(var p=2;p<r;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},525:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=t(7462),l=(t(7294),t(3905)),r=t(5488),s=t(5162);const i={title:"Subcommands"},o="Snaps subcommands",p={unversionedId:"reference/cli/subcommands",id:"reference/cli/subcommands",title:"Subcommands",description:"b, build",source:"@site/snaps/reference/cli/subcommands.md",sourceDirName:"reference/cli",slug:"/reference/cli/subcommands",permalink:"/mm-docs-v2/87-onboarding/snaps/reference/cli/subcommands",draft:!1,tags:[],version:"current",frontMatter:{title:"Subcommands"},sidebar:"snapsSidebar",previous:{title:"Options",permalink:"/mm-docs-v2/87-onboarding/snaps/reference/cli/options"},next:{title:"Snaps permissions",permalink:"/mm-docs-v2/87-onboarding/snaps/reference/permissions"}},m={},u=[{value:"b, build",id:"b-build",level:2},{value:"e, eval",id:"e-eval",level:2},{value:"i, init",id:"i-init",level:2},{value:"m, manifest",id:"m-manifest",level:2},{value:"s, serve",id:"s-serve",level:2},{value:"w, watch",id:"w-watch",level:2}],c={toc:u};function d(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"snaps-subcommands"},"Snaps subcommands"),(0,l.kt)("h2",{id:"b-build"},"b, build"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"syntax",label:"Syntax",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap build [options]\n"))),(0,l.kt)(s.Z,{value:"example",label:"Example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap b -s lib/index.js -d out -n snap.js\n")))),(0,l.kt)("p",null,"Builds a snap from source."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"b")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"build"),"."),(0,l.kt)("h2",{id:"e-eval"},"e, eval"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"syntax",label:"Syntax",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap eval [options]\n"))),(0,l.kt)(s.Z,{value:"example",label:"Example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap e -b out/snap.js\n")))),(0,l.kt)("p",null,"Attempts to evaluate the snap bundle in SES."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"e")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"eval"),"."),(0,l.kt)("h2",{id:"i-init"},"i, init"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"syntax",label:"Syntax",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap init [directory]\n"))),(0,l.kt)(s.Z,{value:"example",label:"Example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap i my-snap\n")))),(0,l.kt)("p",null,"Initializes a snap project in the specified directory.\nIf no directory is specified, the snap project is initialized in the current directory."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"i")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"init"),"."),(0,l.kt)("h2",{id:"m-manifest"},"m, manifest"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"syntax",label:"Syntax",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap manifest [options]\n"))),(0,l.kt)(s.Z,{value:"example",label:"Example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap m --fix false\n")))),(0,l.kt)("p",null,"Validates the snap ",(0,l.kt)("a",{parentName:"p",href:"/mm-docs-v2/87-onboarding/snaps/concepts/anatomy#manifest-file"},"manifest file"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"m")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"manifest"),"."),(0,l.kt)("h2",{id:"s-serve"},"s, serve"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"syntax",label:"Syntax",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap serve [options]\n"))),(0,l.kt)(s.Z,{value:"example",label:"Example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap s -r out -p 9000\n")))),(0,l.kt)("p",null,"Locally serves snap files for testing."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"s")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"serve"),"."),(0,l.kt)("h2",{id:"w-watch"},"w, watch"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"syntax",label:"Syntax",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap watch [options]\n"))),(0,l.kt)(s.Z,{value:"example",label:"Example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap w -s lib/index.js -d out\n")))),(0,l.kt)("p",null,"Rebuilds a snap from source upon changes to the files in the parent and child directories of the\nsource directory."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"All files in the parent and child directories of the source directory are watched for changes, except:"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"Files in the ",(0,l.kt)("inlineCode",{parentName:"li"},"node_modules")," directory."),(0,l.kt)("li",{parentName:"ul"},"Files in the ",(0,l.kt)("inlineCode",{parentName:"li"},"test")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"tests")," directories."),(0,l.kt)("li",{parentName:"ul"},"Any files named ",(0,l.kt)("inlineCode",{parentName:"li"},"test.js")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"test.ts"),"."),(0,l.kt)("li",{parentName:"ul"},"Files in the ",(0,l.kt)("inlineCode",{parentName:"li"},"dist")," directory, or the directory specified using ",(0,l.kt)("a",{parentName:"li",href:"/mm-docs-v2/87-onboarding/snaps/reference/cli/options#d-dist"},(0,l.kt)("inlineCode",{parentName:"a"},"--dist")),"."),(0,l.kt)("li",{parentName:"ul"},"Dotfiles."))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"w")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"watch"),"."))}d.isMDXComponent=!0},5162:(e,a,t)=>{t.d(a,{Z:()=>s});var n=t(7294),l=t(6010);const r="tabItem_Ymn6";function s(e){let{children:a,hidden:t,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,s),hidden:t},a)}},5488:(e,a,t)=>{t.d(a,{Z:()=>d});var n=t(7462),l=t(7294),r=t(6010),s=t(2389),i=t(7392),o=t(7094),p=t(2466);const m="tabList__CuJ",u="tabItem_LNqP";function c(e){const{lazy:a,block:t,defaultValue:s,values:c,groupId:d,className:b}=e,f=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=c??f.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),v=(0,i.l)(k,((e,a)=>e.value===a.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===s?s:s??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==y&&!k.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:g}=(0,o.U)(),[N,x]=(0,l.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:w}=(0,p.o5)();if(null!=d){const e=h[d];null!=e&&e!==N&&k.some((a=>a.value===e))&&x(e)}const E=e=>{const a=e.currentTarget,t=T.indexOf(a),n=k[t].value;n!==N&&(w(a),x(n),null!=d&&g(d,String(n)))},C=e=>{let a=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}a?.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",m)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},b)},k.map((e=>{let{value:a,label:t,attributes:s}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===a?0:-1,"aria-selected":N===a,key:a,ref:e=>T.push(e),onKeyDown:C,onClick:E},s,{className:(0,r.Z)("tabs__item",u,s?.className,{"tabs__item--active":N===a})}),t??a)}))),a?(0,l.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},f.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==N})))))}function d(e){const a=(0,s.Z)();return l.createElement(c,(0,n.Z)({key:String(a)},e))}}}]);