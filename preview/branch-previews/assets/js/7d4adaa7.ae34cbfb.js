"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[5412],{3905:(e,a,n)=>{n.d(a,{Zo:()=>m,kt:()=>b});var t=n(7294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=t.createContext({}),o=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},m=function(e){var a=o(e.components);return t.createElement(i.Provider,{value:a},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=o(n),d=l,b=u["".concat(i,".").concat(d)]||u[d]||c[d]||r;return n?t.createElement(b,s(s({ref:a},m),{},{components:n})):t.createElement(b,s({ref:a},m))}));function b(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,s=new Array(r);s[0]=d;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p[u]="string"==typeof e?e:l,s[1]=p;for(var o=2;o<r;o++)s[o]=n[o];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5143:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>p,metadata:()=>o,toc:()=>u});var t=n(7462),l=(n(7294),n(3905)),r=n(5488),s=n(5162);const p={title:"Options"},i="Snaps command line options",o={unversionedId:"reference/cli/options",id:"reference/cli/options",title:"Options",description:"b, bundle",source:"@site/snaps/reference/cli/options.md",sourceDirName:"reference/cli",slug:"/reference/cli/options",permalink:"/mm-docs-v2/preview/branch-previews/snaps/reference/cli/options",draft:!1,tags:[],version:"current",frontMatter:{title:"Options"},sidebar:"snapsSidebar",previous:{title:"Snaps command line interface",permalink:"/mm-docs-v2/preview/branch-previews/snaps/reference/cli/"},next:{title:"Subcommands",permalink:"/mm-docs-v2/preview/branch-previews/snaps/reference/cli/subcommands"}},m={},u=[{value:"b, bundle",id:"b-bundle",level:2},{value:"d, dist",id:"d-dist",level:2},{value:"depsToTranspile",id:"depstotranspile",level:2},{value:"e, eval",id:"e-eval",level:2},{value:"fix, writeManifest",id:"fix-writemanifest",level:2},{value:"h, help",id:"h-help",level:2},{value:"m, manifest",id:"m-manifest",level:2},{value:"n, outfileName",id:"n-outfilename",level:2},{value:"p, port",id:"p-port",level:2},{value:"r, root",id:"r-root",level:2},{value:"s, src",id:"s-src",level:2},{value:"sourceMaps",id:"sourcemaps",level:2},{value:"strip, stripComments",id:"strip-stripcomments",level:2},{value:"suppressWarnings",id:"suppresswarnings",level:2},{value:"transpilationMode",id:"transpilationmode",level:2},{value:"verboseErrors",id:"verboseerrors",level:2},{value:"version",id:"version",level:2}],c={toc:u};function d(e){let{components:a,...n}=e;return(0,l.kt)("wrapper",(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"snaps-command-line-options"},"Snaps command line options"),(0,l.kt)("h2",{id:"b-bundle"},"b, bundle"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"syntax",label:"Syntax",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--bundle <file>\n"))),(0,l.kt)(s.Z,{value:"example",label:"Example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-b out/bundle.js\n"))),(0,l.kt)(s.Z,{value:"config",label:"Configuration file",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"bundle: 'out/bundle.js' \n")))),(0,l.kt)("p",null,"Path to the snap ",(0,l.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/branch-previews/snaps/concepts/anatomy#bundle-file"},"bundle file"),".\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"dist/bundle.js"),"."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/branch-previews/snaps/reference/cli/subcommands#e-eval"},(0,l.kt)("inlineCode",{parentName:"a"},"eval"))," subcommand."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-b")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"--bundle"),"."),(0,l.kt)("h2",{id:"d-dist"},"d, dist"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"syntax",label:"Syntax",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--dist <directory>\n"))),(0,l.kt)(s.Z,{value:"example",label:"Example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-d out\n"))),(0,l.kt)(s.Z,{value:"config",label:"Configuration file",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"dist: 'out'\n")))),(0,l.kt)("p",null,"Path to the output directory.\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"dist"),"."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/branch-previews/snaps/reference/cli/subcommands#b-build"},(0,l.kt)("inlineCode",{parentName:"a"},"build"))," and\n",(0,l.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/branch-previews/snaps/reference/cli/subcommands#w-watch"},(0,l.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-d")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"--dist"),"."),(0,l.kt)("h2",{id:"depstotranspile"},"depsToTranspile"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"syntax",label:"Syntax",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--depsToTranspile <array>\n"))),(0,l.kt)(s.Z,{value:"example",label:"Example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--depsToTranspile dep1,dep2\n"))),(0,l.kt)(s.Z,{value:"config",label:"Configuration file",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"depsToTranspile: ['dep1','dep2']\n")))),(0,l.kt)("p",null,"List of dependencies to transpile, if ",(0,l.kt)("a",{parentName:"p",href:"#transpilationmode"},(0,l.kt)("inlineCode",{parentName:"a"},"--transpilationMode"))," is set to\n",(0,l.kt)("inlineCode",{parentName:"p"},"localAndDeps"),"."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/branch-previews/snaps/reference/cli/subcommands#b-build"},(0,l.kt)("inlineCode",{parentName:"a"},"build"))," and\n",(0,l.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/branch-previews/snaps/reference/cli/subcommands#w-watch"},(0,l.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,l.kt)("h2",{id:"e-eval"},"e, eval"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"syntax",label:"Syntax",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--eval <boolean>\n"))),(0,l.kt)(s.Z,{value:"example",label:"Example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-e false\n"))),(0,l.kt)(s.Z,{value:"config",label:"Configuration file",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"eval: false\n")))),(0,l.kt)("p",null,"Indicates whether to attempt to evaluate the snap bundle in SES.\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/branch-previews/snaps/reference/cli/subcommands#b-build"},(0,l.kt)("inlineCode",{parentName:"a"},"build"))," and\n",(0,l.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/branch-previews/snaps/reference/cli/subcommands#w-watch"},(0,l.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-e")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"--eval"),"."),(0,l.kt)("h2",{id:"fix-writemanifest"},"fix, writeManifest"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"syntax",label:"Syntax",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--fix <boolean>\n"))),(0,l.kt)(s.Z,{value:"example",label:"Example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--fix false\n"))),(0,l.kt)(s.Z,{value:"config",label:"Configuration file",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"fix: false\n")))),(0,l.kt)("p",null,"When validating the snap ",(0,l.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/branch-previews/snaps/concepts/anatomy#manifest-file"},"manifest file")," using the\n",(0,l.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/branch-previews/snaps/reference/cli/subcommands#m-manifest"},(0,l.kt)("inlineCode",{parentName:"a"},"manifest"))," subcommand, indicates whether to make necessary changes to\nthe manifest file.\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--fix")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"--writeManifest"),"."),(0,l.kt)("h2",{id:"h-help"},"h, help"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-h, --help\n")),(0,l.kt)("p",null,"Displays the help message and exits.\nYou can use this option with ",(0,l.kt)("inlineCode",{parentName:"p"},"mm-snap")," or any ",(0,l.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/branch-previews/snaps/reference/cli/subcommands"},"subcommand"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-h")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"--help"),"."),(0,l.kt)("h2",{id:"m-manifest"},"m, manifest"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"syntax",label:"Syntax",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--manifest <boolean>\n"))),(0,l.kt)(s.Z,{value:"example",label:"Example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-m false\n"))),(0,l.kt)(s.Z,{value:"config",label:"Configuration file",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"manifest: false\n")))),(0,l.kt)("p",null,"Indicates whether to validate the snap ",(0,l.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/branch-previews/snaps/concepts/anatomy#manifest-file"},"manifest file"),".\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/branch-previews/snaps/reference/cli/subcommands#b-build"},(0,l.kt)("inlineCode",{parentName:"a"},"build"))," and\n",(0,l.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/branch-previews/snaps/reference/cli/subcommands#w-watch"},(0,l.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-m")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"--manifest"),"."),(0,l.kt)("h2",{id:"n-outfilename"},"n, outfileName"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"syntax",label:"Syntax",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--outfileName <string>\n"))),(0,l.kt)(s.Z,{value:"example",label:"Example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-n snap.js\n"))),(0,l.kt)(s.Z,{value:"config",label:"Configuration file",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"outfileName: 'snap.js'\n")))),(0,l.kt)("p",null,"Output file name when building a snap from source.\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"bundle.js"),"."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/branch-previews/snaps/reference/cli/subcommands#b-build"},(0,l.kt)("inlineCode",{parentName:"a"},"build"))," and\n",(0,l.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/branch-previews/snaps/reference/cli/subcommands#w-watch"},(0,l.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-n")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"--outfileName"),"."),(0,l.kt)("h2",{id:"p-port"},"p, port"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"syntax",label:"Syntax",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--port <number>\n"))),(0,l.kt)(s.Z,{value:"example",label:"Example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-p 9000\n"))),(0,l.kt)(s.Z,{value:"config",label:"Configuration file",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"port: 9000\n")))),(0,l.kt)("p",null,"Local server port for testing.\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"8081"),"."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/branch-previews/snaps/reference/cli/subcommands#s-serve"},(0,l.kt)("inlineCode",{parentName:"a"},"serve"))," and\n",(0,l.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/branch-previews/snaps/reference/cli/subcommands#w-watch"},(0,l.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-p")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"--port"),"."),(0,l.kt)("h2",{id:"r-root"},"r, root"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"syntax",label:"Syntax",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--root <directory>\n"))),(0,l.kt)(s.Z,{value:"example",label:"Example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-r out\n"))),(0,l.kt)(s.Z,{value:"config",label:"Configuration file",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"root: 'out'\n")))),(0,l.kt)("p",null,"Server root directory.\nThe default is the current working directory (",(0,l.kt)("inlineCode",{parentName:"p"},"."),")."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/branch-previews/snaps/reference/cli/subcommands#s-serve"},(0,l.kt)("inlineCode",{parentName:"a"},"serve"))," and\n",(0,l.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/branch-previews/snaps/reference/cli/subcommands#w-watch"},(0,l.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-r")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"--root"),"."),(0,l.kt)("h2",{id:"s-src"},"s, src"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"syntax",label:"Syntax",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--src <file>\n"))),(0,l.kt)(s.Z,{value:"example",label:"Example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-s lib/index.js\n"))),(0,l.kt)(s.Z,{value:"config",label:"Configuration file",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"src: 'lib/index.js'\n")))),(0,l.kt)("p",null,"Path to the snap source file.\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"src/index.js"),"."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/branch-previews/snaps/reference/cli/subcommands#b-build"},(0,l.kt)("inlineCode",{parentName:"a"},"build"))," and\n",(0,l.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/branch-previews/snaps/reference/cli/subcommands#w-watch"},(0,l.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-s")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"--src"),"."),(0,l.kt)("h2",{id:"sourcemaps"},"sourceMaps"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"syntax",label:"Syntax",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--sourceMaps <boolean>\n"))),(0,l.kt)(s.Z,{value:"example",label:"Example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--sourceMaps true\n"))),(0,l.kt)(s.Z,{value:"config",label:"Configuration file",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"sourceMaps: true\n")))),(0,l.kt)("p",null,"Indicates whether builds should include source maps.\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/branch-previews/snaps/reference/cli/subcommands#b-build"},(0,l.kt)("inlineCode",{parentName:"a"},"build"))," and\n",(0,l.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/branch-previews/snaps/reference/cli/subcommands#w-watch"},(0,l.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,l.kt)("h2",{id:"strip-stripcomments"},"strip, stripComments"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"syntax",label:"Syntax",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--strip <boolean>\n"))),(0,l.kt)(s.Z,{value:"example",label:"Example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--strip false\n"))),(0,l.kt)(s.Z,{value:"config",label:"Configuration file",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"strip: false\n")))),(0,l.kt)("p",null,"Indicates whether to remove code comments from the build output.\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/branch-previews/snaps/reference/cli/subcommands#b-build"},(0,l.kt)("inlineCode",{parentName:"a"},"build"))," and\n",(0,l.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/branch-previews/snaps/reference/cli/subcommands#w-watch"},(0,l.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--strip")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"--stripComments"),"."),(0,l.kt)("h2",{id:"suppresswarnings"},"suppressWarnings"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"syntax",label:"Syntax",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--suppressWarnings <boolean>\n"))),(0,l.kt)(s.Z,{value:"example",label:"Example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--suppressWarnings true\n"))),(0,l.kt)(s.Z,{value:"config",label:"Configuration file",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"suppressWarnings: true\n")))),(0,l.kt)("p",null,"Indicates whether to suppress warnings.\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,l.kt)("p",null,"You can use this option with any ",(0,l.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/branch-previews/snaps/reference/cli/subcommands"},"subcommand"),"."),(0,l.kt)("h2",{id:"transpilationmode"},"transpilationMode"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"syntax",label:"Syntax",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--transpilationMode <string>\n"))),(0,l.kt)(s.Z,{value:"example",label:"Example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--transpilationMode localAndDeps\n"))),(0,l.kt)(s.Z,{value:"config",label:"Configuration file",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"transpilationMode: 'localAndDeps'\n")))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://babeljs.io/"},"Babel")," transpilation mode.\nSpecify ",(0,l.kt)("inlineCode",{parentName:"p"},"localAndDeps")," to transpile all source code including dependencies, ",(0,l.kt)("inlineCode",{parentName:"p"},"localOnly")," to transpile\nlocal source code only, and ",(0,l.kt)("inlineCode",{parentName:"p"},"none")," to transpile nothing."),(0,l.kt)("p",null,"The default is ",(0,l.kt)("inlineCode",{parentName:"p"},"localOnly"),"."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/branch-previews/snaps/reference/cli/subcommands#b-build"},(0,l.kt)("inlineCode",{parentName:"a"},"build"))," and\n",(0,l.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/branch-previews/snaps/reference/cli/subcommands#w-watch"},(0,l.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"For TypeScript snaps, ",(0,l.kt)("inlineCode",{parentName:"p"},"--transpilationMode")," must be set to either ",(0,l.kt)("inlineCode",{parentName:"p"},"localOnly")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"localAndDeps"),".")),(0,l.kt)("h2",{id:"verboseerrors"},"verboseErrors"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"syntax",label:"Syntax",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--verboseErrors <boolean>\n"))),(0,l.kt)(s.Z,{value:"example",label:"Example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--verboseErrors false\n"))),(0,l.kt)(s.Z,{value:"config",label:"Configuration file",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"verboseErrors: false\n")))),(0,l.kt)("p",null,"Indicates whether to display original errors.\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,l.kt)("p",null,"You can use this option with any ",(0,l.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/branch-previews/snaps/reference/cli/subcommands"},"subcommand"),". "),(0,l.kt)("h2",{id:"version"},"version"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--version\n")),(0,l.kt)("p",null,"Displays the version number and exits."))}d.isMDXComponent=!0},5162:(e,a,n)=>{n.d(a,{Z:()=>s});var t=n(7294),l=n(6010);const r="tabItem_Ymn6";function s(e){let{children:a,hidden:n,className:s}=e;return t.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,s),hidden:n},a)}},5488:(e,a,n)=>{n.d(a,{Z:()=>d});var t=n(7462),l=n(7294),r=n(6010),s=n(2389),p=n(7392),i=n(7094),o=n(2466);const m="tabList__CuJ",u="tabItem_LNqP";function c(e){const{lazy:a,block:n,defaultValue:s,values:c,groupId:d,className:b}=e,k=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=c??k.map((e=>{let{props:{value:a,label:n,attributes:t}}=e;return{value:a,label:n,attributes:t}})),f=(0,p.l)(h,((e,a)=>e.value===a.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===s?s:s??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==v&&!h.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:g}=(0,i.U)(),[T,y]=(0,l.useState)(v),w=[],{blockElementScrollPositionUntilNextRender:x}=(0,o.o5)();if(null!=d){const e=N[d];null!=e&&e!==T&&h.some((a=>a.value===e))&&y(e)}const C=e=>{const a=e.currentTarget,n=w.indexOf(a),t=h[n].value;t!==T&&(x(a),y(t),null!=d&&g(d,String(t)))},Z=e=>{let a=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;a=w[n]??w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;a=w[n]??w[w.length-1];break}}a?.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",m)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},b)},h.map((e=>{let{value:a,label:n,attributes:s}=e;return l.createElement("li",(0,t.Z)({role:"tab",tabIndex:T===a?0:-1,"aria-selected":T===a,key:a,ref:e=>w.push(e),onKeyDown:Z,onClick:C},s,{className:(0,r.Z)("tabs__item",u,s?.className,{"tabs__item--active":T===a})}),n??a)}))),a?(0,l.cloneElement)(k.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},k.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==T})))))}function d(e){const a=(0,s.Z)();return l.createElement(c,(0,t.Z)({key:String(a)},e))}}}]);