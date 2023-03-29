"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[3397],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(a),m=i,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,l=new Array(o);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[p]="string"==typeof e?e:i,l[1]=r;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1225:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var n=a(7462),i=(a(7294),a(3905));const o={title:"Unity gaming"},l="Use MetaMask SDK with Unity",r={unversionedId:"how-to/use-sdk/unity",id:"how-to/use-sdk/unity",title:"Unity gaming",description:"You can import MetaMask SDK into your Unity game to enable users to easily connect to their MetaMask",source:"@site/wallet/how-to/use-sdk/unity.md",sourceDirName:"how-to/use-sdk",slug:"/how-to/use-sdk/unity",permalink:"/mm-docs-v2/preview/8b0b85e134aa1d9ac77beb0d41e1652a0943865c/wallet/how-to/use-sdk/unity",draft:!1,tags:[],version:"current",frontMatter:{title:"Unity gaming"},sidebar:"walletSidebar",previous:{title:"Pure JavaScript",permalink:"/mm-docs-v2/preview/8b0b85e134aa1d9ac77beb0d41e1652a0943865c/wallet/how-to/use-sdk/pure-js"},next:{title:"Use MetaMask Mobile",permalink:"/mm-docs-v2/preview/8b0b85e134aa1d9ac77beb0d41e1652a0943865c/wallet/how-to/use-mobile"}},s={},c=[{value:"How it works",id:"how-it-works",level:2},{value:"Video demo",id:"video-demo",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Install the SDK for Unity",id:"1-install-the-sdk-for-unity",level:3},{value:"2. Initialize MetaMask",id:"2-initialize-metamask",level:3},{value:"3. Connect to MetaMask",id:"3-connect-to-metamask",level:3},{value:"4. Use MetaMask",id:"4-use-metamask",level:3},{value:"5. Configure MetaMask",id:"5-configure-metamask",level:3},{value:"API",id:"api",level:2},{value:"MetaMaskUnity",id:"metamaskunity",level:3},{value:"<code>Instance</code>",id:"instance",level:4},{value:"<code>Initialize</code>",id:"initialize",level:4},{value:"<code>SaveSession</code>",id:"savesession",level:4},{value:"<code>LoadSession</code>",id:"loadsession",level:4},{value:"MetaMaskWallet",id:"metamaskwallet",level:3},{value:"<code>Connect</code>",id:"connect",level:4},{value:"<code>Disconnect</code>",id:"disconnect",level:4},{value:"<code>Request</code>",id:"request",level:4},{value:"Package structure",id:"package-structure",level:2}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"use-metamask-sdk-with-unity"},"Use MetaMask SDK with Unity"),(0,i.kt)("p",null,"You can import MetaMask SDK into your Unity game to enable users to easily connect to their MetaMask\nMobile wallet.\nThe MetaMask Unity SDK supports macOS, Windows, Linux, IOS, Android, and WebGL."),(0,i.kt)("h2",{id:"how-it-works"},"How it works"),(0,i.kt)("p",null,"The SDK renders a QR code in the UI using a dedicated prefab which players can scan with their\nMetaMask Mobile app.\nIt also supports deeplinking on mobile platforms.\nYou can use all the ",(0,i.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/8b0b85e134aa1d9ac77beb0d41e1652a0943865c/wallet/reference/provider-api"},"provider API methods")," right from your game."),(0,i.kt)("h2",{id:"video-demo"},"Video demo"),(0,i.kt)("p",null,"The following video demonstrates how to install and use the MetaMask Unity SDK."),(0,i.kt)("p",{align:"center"},(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/0D1cIH-PZtI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,i.kt)("h2",{id:"steps"},"Steps"),(0,i.kt)("h3",{id:"1-install-the-sdk-for-unity"},"1. Install the SDK for Unity"),(0,i.kt)("p",null,"To install the module, first download the\n",(0,i.kt)("a",{parentName:"p",href:"https://drive.google.com/u/0/uc?id=1ArTJvKIZXK5vkUOM3cgr0t0NspenWRU9&export=download"},"Unity SDK Package"),"."),(0,i.kt)("p",null,"Then, go to the menu > ",(0,i.kt)("strong",{parentName:"p"},"Package Manager"),".\nSelect ",(0,i.kt)("strong",{parentName:"p"},"My Assets"),", ",(0,i.kt)("strong",{parentName:"p"},"MetaMask Unity SDK"),", and ",(0,i.kt)("strong",{parentName:"p"},"Install"),".\nYou should see the MetaMask SDK package listed in the project packages and be able to interface\nwith it and its examples in the scene."),(0,i.kt)("p",null,"You also need to install ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Manual/com.unity.textmeshpro.html"},"TextMeshPro"),".\nIf you don't have TextMeshPro installed, the Unity editor automatically prompts you to install it."),(0,i.kt)("h3",{id:"2-initialize-metamask"},"2. Initialize MetaMask"),(0,i.kt)("p",null,"The main class you interface with is called ",(0,i.kt)("inlineCode",{parentName:"p"},"MetaMaskWallet"),".\nIt handles the connection to the user's wallet, as well as processing the requests to it using a\nsocket.io implementation."),(0,i.kt)("p",null,"To use it inside Unity, you must attach the component called ",(0,i.kt)("inlineCode",{parentName:"p"},"MetaMaskUnity")," to a game object within\nthe editor.\nThis component is a singleton and you can use its ",(0,i.kt)("inlineCode",{parentName:"p"},"Instance")," property to access the wallet instance.\nYou first must initialize by doing one of the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Manually call ",(0,i.kt)("inlineCode",{parentName:"p"},"Initialize()"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"MetaMaskUnity.Instance.Initialize();\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Check ",(0,i.kt)("strong",{parentName:"p"},"Initialize On Start")," on the component within the editor."))),(0,i.kt)("p",null,"This initializes the wallet instance, making it accessible from ",(0,i.kt)("inlineCode",{parentName:"p"},"MetaMaskUnity.Instance.Wallet"),".\nYou can now make calls to the user's wallet using ",(0,i.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/8b0b85e134aa1d9ac77beb0d41e1652a0943865c/wallet/reference/provider-api"},"provider API methods"),"."),(0,i.kt)("h3",{id:"3-connect-to-metamask"},"3. Connect to MetaMask"),(0,i.kt)("p",null,"Once the wallet is prepared and initialized, you can connect to MetaMask.\nCall the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connect()")," method on the wallet instance as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"var wallet = MetaMaskUnity.Instance.Wallet;\nwallet.Connect();\n")),(0,i.kt)("p",null,"You can also subscribe to the ",(0,i.kt)("inlineCode",{parentName:"p"},"OnWalletConnected")," callback on the wallet instance to be notified\nonce the wallet is connected:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'wallet.WalletConnected += OnWalletConnected;\n\nvoid OnWalletConnected(object sender, EventArgs e) {\n    Debug.Log("Wallet is connected");\n}\n')),(0,i.kt)("p",null,"You can also use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connect()")," method from ",(0,i.kt)("inlineCode",{parentName:"p"},"MetaMaskUnity")," that delegates the call to the wallet\ninstance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"MetaMaskUnity.Instance.Connect();\n")),(0,i.kt)("p",null,"There are a variety of sample buttons included inside the package that call this method when clicked.\nThese are provided as a convenience to get started quickly with your project.\nOnce the connection request is made, a QR code is generated, and based on the transport you're using\n(",(0,i.kt)("inlineCode",{parentName:"p"},"Unity UI")," by default), either a new Canvas that contains the QR code is spawned or the\n",(0,i.kt)("inlineCode",{parentName:"p"},"MetaMaskUnityUIQRImage")," generates the QR code when the connection is requested."),(0,i.kt)("p",null,"If you want to use the latter, add an instance of the ",(0,i.kt)("inlineCode",{parentName:"p"},"MetaMaskUnityUIQRImage")," component to the\nscene with its fields provided.\nThe transport field is also required if you want to use it isolated from the canvas that is spawned\nby the transport, then it generates the QR code for you."),(0,i.kt)("h3",{id:"4-use-metamask"},"4. Use MetaMask"),(0,i.kt)("p",null,"Once the wallet is authorized, you can make requests to it.\nThe wallet is authorized when the buttons become interactable or the ",(0,i.kt)("inlineCode",{parentName:"p"},"WalletAuthorized")," event is fired:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var wallet = MetaMaskUnity.Instance.Wallet;\nwallet.WalletAuthorized += OnWalletAuthorized;\n\nvoid OnWalletAuthorized(object sender, EventArgs e) {\n    Deebug.Log("Wallet is authorized");\n}\n')),(0,i.kt)("p",null,"You can call any Ethereum request on the wallet using ",(0,i.kt)("inlineCode",{parentName:"p"},"wallet.Request(myRequest)"),".\nThe following is a sample transaction request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var wallet = MetaMaskUnity.Instance.Wallet;\nvar transactionParams = new MetaMaskTranscation\n{\n    To = "0xd0059fB234f15dFA9371a7B45c09d451a2dd2B5a",\n    From = MetaMaskUnity.Instance.Wallet.SelectedAddress,\n    Value = "0x0"\n};\n\nvar request = new MetaMaskEthereumRequest\n{\n    Method = "eth_sendTransaction",\n    Parameters = new MetaMaskTranscation[] { transactionParams }\n};\nawait wallet.Request(request);\n')),(0,i.kt)("h3",{id:"5-configure-metamask"},"5. Configure MetaMask"),(0,i.kt)("p",null,"You can customize the default configuration or create your own configuration."),(0,i.kt)("p",null,"Edit the default configuration by doing one of the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Navigate to the ",(0,i.kt)("strong",{parentName:"li"},"Window > MetaMask > Setup")," menu item."),(0,i.kt)("li",{parentName:"ul"},"Open the ",(0,i.kt)("inlineCode",{parentName:"li"},"MetaMaskConfig")," asset in the project window.")),(0,i.kt)("p",null,"Edit the fields and save the changes."),(0,i.kt)("p",null,"Create a new configuration by right-clicking on the project window and navigating to\n",(0,i.kt)("strong",{parentName:"p"},"MetaMask > Config"),".\nName the new configuration and use it when initializing the ",(0,i.kt)("inlineCode",{parentName:"p"},"MetaMaskUnity")," instance."),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("p",null,"The following is an overview of the APIs from the most important classes."),(0,i.kt)("h3",{id:"metamaskunity"},"MetaMaskUnity"),(0,i.kt)("p",null,"This is a singleton class that you can use to access the ",(0,i.kt)("inlineCode",{parentName:"p"},"MetaMaskWallet")," instance, which is\nspecific to Unity."),(0,i.kt)("h4",{id:"instance"},(0,i.kt)("inlineCode",{parentName:"h4"},"Instance")),(0,i.kt)("p",null,"This is the singleton instance of the ",(0,i.kt)("inlineCode",{parentName:"p"},"MetaMaskUnity")," class that is lazy-loaded when you access it\nfor the first time."),(0,i.kt)("h4",{id:"initialize"},(0,i.kt)("inlineCode",{parentName:"h4"},"Initialize")),(0,i.kt)("p",null,"This method initializes the ",(0,i.kt)("inlineCode",{parentName:"p"},"MetaMaskWallet")," instance and makes it accessible via the ",(0,i.kt)("inlineCode",{parentName:"p"},"Wallet")," property.\nYou can also pass extra options and parameters to it to customize the wallet instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"// Initialize using default settings\nMetaMaskUnity.Instance.Initialize();\n\n// Initialize using custom transport and socket provider\nvar transport = new MyCustomTransport();\nvar socketProvider = new MyCustomSocketProvider();\nMetaMaskUnity.Instance.Initialize(transport, socketProvider);\n\n// Initialize using custom config, transport and socket provider\nvar config = myMetaMaskConfig;\nvar transport = new MyCustomTransport();\nvar socketProvider = new MyCustomSocketProvider();\nMetaMaskUnity.Instance.Initialize(config, transport, socketProvider);\n")),(0,i.kt)("h4",{id:"savesession"},(0,i.kt)("inlineCode",{parentName:"h4"},"SaveSession")),(0,i.kt)("p",null,"This method saves the current session to the persistent storage.\nThis is useful when you want to save the session and restore it later.\nThis is automatically called when the application quits, but you can also manually call it."),(0,i.kt)("h4",{id:"loadsession"},(0,i.kt)("inlineCode",{parentName:"h4"},"LoadSession")),(0,i.kt)("p",null,"This method loads the session from the persistent storage.\nThis is useful when you want to restore the session after the application quits.\nThis is automatically called when the application starts, but you can also manually call it."),(0,i.kt)("h3",{id:"metamaskwallet"},"MetaMaskWallet"),(0,i.kt)("h4",{id:"connect"},(0,i.kt)("inlineCode",{parentName:"h4"},"Connect")),(0,i.kt)("p",null,"This method connects to the MetaMask app.\nIt renders a generated QR code in the user interface for your users to scan with MetaMask Mobile.\nAfter the user scans this QR code, a connect screen appears in MetaMask Mobile where the user can\napprove the connection with your game application."),(0,i.kt)("h4",{id:"disconnect"},(0,i.kt)("inlineCode",{parentName:"h4"},"Disconnect")),(0,i.kt)("p",null,"This method disconnects the user that is connected from the MetaMask app session."),(0,i.kt)("h4",{id:"request"},(0,i.kt)("inlineCode",{parentName:"h4"},"Request")),(0,i.kt)("p",null,"This method sends a request to MetaMask.\nYou can use it to call any ",(0,i.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/8b0b85e134aa1d9ac77beb0d41e1652a0943865c/wallet/reference/provider-api"},"provider API method"),"."),(0,i.kt)("h2",{id:"package-structure"},"Package structure"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"File or directory"),(0,i.kt)("th",{parentName:"tr",align:null},"Contents"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Documentation")),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation and link to online documentation")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Editor")),(0,i.kt)("td",{parentName:"tr",align:null},"Editor-only code such as Setup GUI windows, data persistence for SDK settings")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Plugins")),(0,i.kt)("td",{parentName:"tr",align:null},"Plugins needed by the package (the ECIES Platform runtime libraries and core SDK Codebase)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Runtime")),(0,i.kt)("td",{parentName:"tr",align:null},"Main scripts for the SDK that are environment-agnostic, including the C# scripts that provide the base implementation of the SDK")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Samples")),(0,i.kt)("td",{parentName:"tr",align:null},"Test application scene that can be used as a referral for your project, including modal popups and dynamic UI scaling")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"LICENSE.md")),(0,i.kt)("td",{parentName:"tr",align:null},"Package license")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Third Party Notices.md")),(0,i.kt)("td",{parentName:"tr",align:null},"Third party notices")))))}p.isMDXComponent=!0}}]);