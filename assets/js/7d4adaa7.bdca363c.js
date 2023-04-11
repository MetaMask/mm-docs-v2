"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[5412],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>b});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=n.createContext({}),o=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},m=function(e){var a=o(e.components);return n.createElement(i.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=o(t),c=l,b=u["".concat(i,".").concat(c)]||u[c]||d[c]||r;return t?n.createElement(b,s(s({ref:a},m),{},{components:t})):n.createElement(b,s({ref:a},m))}));function b(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,s=new Array(r);s[0]=c;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p[u]="string"==typeof e?e:l,s[1]=p;for(var o=2;o<r;o++)s[o]=t[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5143:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>p,metadata:()=>o,toc:()=>u});var n=t(7462),l=(t(7294),t(3905)),r=t(5488),s=t(5162);const p={title:"Options"},i="Snaps command line options",o={unversionedId:"reference/cli/options",id:"reference/cli/options",title:"Options",description:"b, bundle",source:"@site/snaps/reference/cli/options.md",sourceDirName:"reference/cli",slug:"/reference/cli/options",permalink:"/snaps/reference/cli/options",draft:!1,tags:[],version:"current",frontMatter:{title:"Options"},sidebar:"snapsSidebar",previous:{title:"Snaps command line interface",permalink:"/snaps/reference/cli/"},next:{title:"Subcommands",permalink:"/snaps/reference/cli/subcommands"}},m={},u=[{value:"b, bundle",id:"b-bundle",level:2},{value:"d, dist",id:"d-dist",level:2},{value:"depsToTranspile",id:"depstotranspile",level:2},{value:"e, eval",id:"e-eval",level:2},{value:"fix, writeManifest",id:"fix-writemanifest",level:2},{value:"h, help",id:"h-help",level:2},{value:"m, manifest",id:"m-manifest",level:2},{value:"n, outfileName",id:"n-outfilename",level:2},{value:"p, port",id:"p-port",level:2},{value:"r, root",id:"r-root",level:2},{value:"s, src",id:"s-src",level:2},{value:"sourceMaps",id:"sourcemaps",level:2},{value:"strip, stripComments",id:"strip-stripcomments",level:2},{value:"suppressWarnings",id:"suppresswarnings",level:2},{value:"transpilationMode",id:"transpilationmode",level:2},{value:"verboseErrors",id:"verboseerrors",level:2},{value:"version",id:"version",level:2}],d={toc:u};function c(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"snaps-command-line-options"},"Snaps command line options"),(0,l.kt)("h2",{id:"b-bundle"},"b, bundle"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--bundle <file>\n"))),(0,l.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-b out/bundle.js\n"))),(0,l.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"bundle: 'out/bundle.js' \n")))),(0,l.kt)("p",null,"Path to the snap ",(0,l.kt)("a",{parentName:"p",href:"/snaps/concepts/anatomy#bundle-file"},"bundle file"),".\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"dist/bundle.js"),"."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#e-eval"},(0,l.kt)("inlineCode",{parentName:"a"},"eval"))," subcommand."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-b")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"--bundle"),"."),(0,l.kt)("h2",{id:"d-dist"},"d, dist"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--dist <directory>\n"))),(0,l.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-d out\n"))),(0,l.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"dist: 'out'\n")))),(0,l.kt)("p",null,"Path to the output directory.\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"dist"),"."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#b-build"},(0,l.kt)("inlineCode",{parentName:"a"},"build"))," and\n",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#w-watch"},(0,l.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-d")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"--dist"),"."),(0,l.kt)("h2",{id:"depstotranspile"},"depsToTranspile"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--depsToTranspile <array>\n"))),(0,l.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--depsToTranspile dep1,dep2\n"))),(0,l.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"depsToTranspile: ['dep1','dep2']\n")))),(0,l.kt)("p",null,"List of dependencies to transpile, if ",(0,l.kt)("a",{parentName:"p",href:"#transpilationmode"},(0,l.kt)("inlineCode",{parentName:"a"},"--transpilationMode"))," is set to\n",(0,l.kt)("inlineCode",{parentName:"p"},"localAndDeps"),"."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#b-build"},(0,l.kt)("inlineCode",{parentName:"a"},"build"))," and\n",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#w-watch"},(0,l.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,l.kt)("h2",{id:"e-eval"},"e, eval"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--eval <boolean>\n"))),(0,l.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-e false\n"))),(0,l.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"eval: false\n")))),(0,l.kt)("p",null,"Indicates whether to attempt to evaluate the snap bundle in SES.\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#b-build"},(0,l.kt)("inlineCode",{parentName:"a"},"build"))," and\n",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#w-watch"},(0,l.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-e")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"--eval"),"."),(0,l.kt)("h2",{id:"fix-writemanifest"},"fix, writeManifest"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--fix <boolean>\n"))),(0,l.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--fix false\n"))),(0,l.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"fix: false\n")))),(0,l.kt)("p",null,"When validating the snap ",(0,l.kt)("a",{parentName:"p",href:"/snaps/concepts/anatomy#manifest-file"},"manifest file")," using the\n",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#m-manifest"},(0,l.kt)("inlineCode",{parentName:"a"},"manifest"))," subcommand, indicates whether to make necessary changes to\nthe manifest file.\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--fix")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"--writeManifest"),"."),(0,l.kt)("h2",{id:"h-help"},"h, help"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-h, --help\n")),(0,l.kt)("p",null,"Displays the help message and exits.\nYou can use this option with ",(0,l.kt)("inlineCode",{parentName:"p"},"mm-snap")," or any ",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands"},"subcommand"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-h")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"--help"),"."),(0,l.kt)("h2",{id:"m-manifest"},"m, manifest"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--manifest <boolean>\n"))),(0,l.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-m false\n"))),(0,l.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"manifest: false\n")))),(0,l.kt)("p",null,"Indicates whether to validate the snap ",(0,l.kt)("a",{parentName:"p",href:"/snaps/concepts/anatomy#manifest-file"},"manifest file"),".\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#b-build"},(0,l.kt)("inlineCode",{parentName:"a"},"build"))," and\n",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#w-watch"},(0,l.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-m")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"--manifest"),"."),(0,l.kt)("h2",{id:"n-outfilename"},"n, outfileName"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--outfileName <string>\n"))),(0,l.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-n snap.js\n"))),(0,l.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"outfileName: 'snap.js'\n")))),(0,l.kt)("p",null,"Output file name when building a snap from source.\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"bundle.js"),"."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#b-build"},(0,l.kt)("inlineCode",{parentName:"a"},"build"))," and\n",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#w-watch"},(0,l.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-n")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"--outfileName"),"."),(0,l.kt)("h2",{id:"p-port"},"p, port"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--port <number>\n"))),(0,l.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-p 9000\n"))),(0,l.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"port: 9000\n")))),(0,l.kt)("p",null,"Local server port for testing.\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"8081"),"."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#s-serve"},(0,l.kt)("inlineCode",{parentName:"a"},"serve"))," and\n",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#w-watch"},(0,l.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-p")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"--port"),"."),(0,l.kt)("h2",{id:"r-root"},"r, root"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--root <directory>\n"))),(0,l.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-r out\n"))),(0,l.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"root: 'out'\n")))),(0,l.kt)("p",null,"Server root directory.\nThe default is the current working directory (",(0,l.kt)("inlineCode",{parentName:"p"},"."),")."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#s-serve"},(0,l.kt)("inlineCode",{parentName:"a"},"serve"))," and\n",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#w-watch"},(0,l.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-r")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"--root"),"."),(0,l.kt)("h2",{id:"s-src"},"s, src"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--src <file>\n"))),(0,l.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-s lib/index.js\n"))),(0,l.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"src: 'lib/index.js'\n")))),(0,l.kt)("p",null,"Path to the snap source file.\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"src/index.js"),"."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#b-build"},(0,l.kt)("inlineCode",{parentName:"a"},"build"))," and\n",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#w-watch"},(0,l.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-s")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"--src"),"."),(0,l.kt)("h2",{id:"sourcemaps"},"sourceMaps"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--sourceMaps <boolean>\n"))),(0,l.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--sourceMaps true\n"))),(0,l.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"sourceMaps: true\n")))),(0,l.kt)("p",null,"Indicates whether builds should include source maps.\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#b-build"},(0,l.kt)("inlineCode",{parentName:"a"},"build"))," and\n",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#w-watch"},(0,l.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,l.kt)("h2",{id:"strip-stripcomments"},"strip, stripComments"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--strip <boolean>\n"))),(0,l.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--strip false\n"))),(0,l.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"strip: false\n")))),(0,l.kt)("p",null,"Indicates whether to remove code comments from the build output.\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#b-build"},(0,l.kt)("inlineCode",{parentName:"a"},"build"))," and\n",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#w-watch"},(0,l.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--strip")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"--stripComments"),"."),(0,l.kt)("h2",{id:"suppresswarnings"},"suppressWarnings"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--suppressWarnings <boolean>\n"))),(0,l.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--suppressWarnings true\n"))),(0,l.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"suppressWarnings: true\n")))),(0,l.kt)("p",null,"Indicates whether to suppress warnings.\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,l.kt)("p",null,"You can use this option with any ",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands"},"subcommand"),"."),(0,l.kt)("h2",{id:"transpilationmode"},"transpilationMode"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--transpilationMode <string>\n"))),(0,l.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--transpilationMode localAndDeps\n"))),(0,l.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"transpilationMode: 'localAndDeps'\n")))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://babeljs.io/"},"Babel")," transpilation mode.\nSpecify ",(0,l.kt)("inlineCode",{parentName:"p"},"localAndDeps")," to transpile all source code including dependencies, ",(0,l.kt)("inlineCode",{parentName:"p"},"localOnly")," to transpile\nlocal source code only, and ",(0,l.kt)("inlineCode",{parentName:"p"},"none")," to transpile nothing."),(0,l.kt)("p",null,"The default is ",(0,l.kt)("inlineCode",{parentName:"p"},"localOnly"),"."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#b-build"},(0,l.kt)("inlineCode",{parentName:"a"},"build"))," and\n",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#w-watch"},(0,l.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"For TypeScript snaps, ",(0,l.kt)("inlineCode",{parentName:"p"},"--transpilationMode")," must be set to either ",(0,l.kt)("inlineCode",{parentName:"p"},"localOnly")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"localAndDeps"),".")),(0,l.kt)("h2",{id:"verboseerrors"},"verboseErrors"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--verboseErrors <boolean>\n"))),(0,l.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--verboseErrors false\n"))),(0,l.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"verboseErrors: false\n")))),(0,l.kt)("p",null,"Indicates whether to display original errors.\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,l.kt)("p",null,"You can use this option with any ",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands"},"subcommand"),". "),(0,l.kt)("h2",{id:"version"},"version"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--version\n")),(0,l.kt)("p",null,"Displays the version number and exits."))}c.isMDXComponent=!0},5162:(e,a,t)=>{t.d(a,{Z:()=>s});var n=t(7294),l=t(6010);const r="tabItem_Ymn6";function s(e){let{children:a,hidden:t,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,s),hidden:t},a)}},5488:(e,a,t)=>{t.d(a,{Z:()=>c});var n=t(7462),l=t(7294),r=t(6010),s=t(2389),p=t(7392),i=t(7094),o=t(2466);const m="tabList__CuJ",u="tabItem_LNqP";function d(e){const{lazy:a,block:t,defaultValue:s,values:d,groupId:c,className:b}=e,k=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??k.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),h=(0,p.l)(f,((e,a)=>e.value===a.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===s?s:s??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==N&&!f.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:T}=(0,i.U)(),[g,y]=(0,l.useState)(N),x=[],{blockElementScrollPositionUntilNextRender:C}=(0,o.o5)();if(null!=c){const e=v[c];null!=e&&e!==g&&f.some((a=>a.value===e))&&y(e)}const w=e=>{const a=e.currentTarget,t=x.indexOf(a),n=f[t].value;n!==g&&(C(a),y(n),null!=c&&T(c,String(n)))},Z=e=>{let a=null;switch(e.key){case"Enter":w(e);break;case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;a=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;a=x[t]??x[x.length-1];break}}a?.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",m)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},b)},f.map((e=>{let{value:a,label:t,attributes:s}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:g===a?0:-1,"aria-selected":g===a,key:a,ref:e=>x.push(e),onKeyDown:Z,onClick:w},s,{className:(0,r.Z)("tabs__item",u,s?.className,{"tabs__item--active":g===a})}),t??a)}))),a?(0,l.cloneElement)(k.filter((e=>e.props.value===g))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},k.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==g})))))}function c(e){const a=(0,s.Z)();return l.createElement(d,(0,n.Z)({key:String(a)},e))}}}]);