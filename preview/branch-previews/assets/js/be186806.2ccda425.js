"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[6572],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},b=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),b=r,m=p["".concat(c,".").concat(b)]||p[b]||d[b]||o;return t?a.createElement(m,i(i({ref:n},u),{},{components:t})):a.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},2056:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(7462),r=(t(7294),t(3905));const o={},i="Use onboarding library",s={unversionedId:"how-to/use-onboarding-library",id:"how-to/use-onboarding-library",title:"Use onboarding library",description:"Use the MetaMask onboarding library to simplify the experience",source:"@site/wallet/how-to/use-onboarding-library.md",sourceDirName:"how-to",slug:"/how-to/use-onboarding-library",permalink:"/mm-docs-v2/preview/branch-previews/wallet/how-to/use-onboarding-library",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"walletSidebar",previous:{title:"Access a user's MetaMask provider",permalink:"/mm-docs-v2/preview/branch-previews/wallet/how-to/access-provider"},next:{title:"Set an icon",permalink:"/mm-docs-v2/preview/branch-previews/wallet/how-to/set-icon"}},c={},l=[{value:"Steps",id:"steps",level:2},{value:"Examples",id:"examples",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"React",id:"react",level:3},{value:"TypeScript",id:"typescript",level:3},{value:"Vanilla JavaScript + HTML",id:"vanilla-javascript--html",level:3}],u={toc:l};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-onboarding-library"},"Use onboarding library"),(0,r.kt)("p",null,"Use the MetaMask ",(0,r.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/branch-previews/wallet/concepts/onboarding-library"},"onboarding library")," to simplify the experience\nof onboarding new users to MetaMask."),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-onboarding"},"Install @metamask/onboarding"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import the library or include it in your page:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// As an ES6 module\nimport MetaMaskOnboarding from '@metamask/onboarding';\n// Or as an ES5 module\nconst MetaMaskOnboarding = require('@metamask/onboarding');\n")),(0,r.kt)("p",{parentName:"li"},"If you prefer, you can instead include the prebuilt ES5 bundle that ships with the library:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<script src="./metamask-onboarding.bundle.js"><\/script>\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new instance of the onboarding library:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const onboarding = new MetaMaskOnboarding();\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start the onboarding process in response to a user event (for example, a button click):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"onboarding.startOnboarding();\n")))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const onboarding = new MetaMaskOnboarding();\nonboarding.startOnboarding();\n")),(0,r.kt)("h3",{id:"react"},"React"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import MetaMaskOnboarding from '@metamask/onboarding';\nimport React from 'react';\n\nconst ONBOARD_TEXT = 'Click here to install MetaMask!';\nconst CONNECT_TEXT = 'Connect';\nconst CONNECTED_TEXT = 'Connected';\n\nexport function OnboardingButton() {\n  const [buttonText, setButtonText] = React.useState(ONBOARD_TEXT);\n  const [isDisabled, setDisabled] = React.useState(false);\n  const [accounts, setAccounts] = React.useState([]);\n  const onboarding = React.useRef();\n\n  React.useEffect(() => {\n    if (!onboarding.current) {\n      onboarding.current = new MetaMaskOnboarding();\n    }\n  }, []);\n\n  React.useEffect(() => {\n    if (MetaMaskOnboarding.isMetaMaskInstalled()) {\n      if (accounts.length > 0) {\n        setButtonText(CONNECTED_TEXT);\n        setDisabled(true);\n        onboarding.current.stopOnboarding();\n      } else {\n        setButtonText(CONNECT_TEXT);\n        setDisabled(false);\n      }\n    }\n  }, [accounts]);\n\n  React.useEffect(() => {\n    function handleNewAccounts(newAccounts) {\n      setAccounts(newAccounts);\n    }\n    if (MetaMaskOnboarding.isMetaMaskInstalled()) {\n      window.ethereum\n        .request({ method: 'eth_requestAccounts' })\n        .then(handleNewAccounts);\n      window.ethereum.on('accountsChanged', handleNewAccounts);\n      return () => {\n        window.ethereum.removeListener('accountsChanged', handleNewAccounts);\n      };\n    }\n  }, []);\n\n  const onClick = () => {\n    if (MetaMaskOnboarding.isMetaMaskInstalled()) {\n      window.ethereum\n        .request({ method: 'eth_requestAccounts' })\n        .then((newAccounts) => setAccounts(newAccounts));\n    } else {\n      onboarding.current.startOnboarding();\n    }\n  };\n  return (\n    <button disabled={isDisabled} onClick={onClick}>\n      {buttonText}\n    </button>\n  );\n}\n")),(0,r.kt)("h3",{id:"typescript"},"TypeScript"),(0,r.kt)("p",null,"We ship our TypeScript types with ",(0,r.kt)("inlineCode",{parentName:"p"},"@metamask/onboarding"),".\nModifying the ",(0,r.kt)("a",{parentName:"p",href:"#react"},"React example")," to get type safety when using the onboarding library is simple:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"  -const onboarding = React.useRef();\n  +const onboarding = React.useRef<MetaMaskOnboarding>();\n")),(0,r.kt)("p",null,"Taking this step gives you editor auto-completion for the methods exposed by the library, and\nhelpful documentation."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/4448075/85584481-ccc7ec00-b604-11ea-9b74-49c76ee0bf22.png",alt:"Editor Highlighting"})),(0,r.kt)("h3",{id:"vanilla-javascript--html"},"Vanilla JavaScript + HTML"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<!DOCTYPE html>\n<html lang=\"en-CA\">\n  <head>\n    <title>MetaMask Onboarding Example</title>\n    <meta charset=\"UTF-8\" />\n  </head>\n  <body>\n    <h1>Sample Dapp</h1>\n    <button id=\"onboard\">Loading...</button>\n    <script src=\"./metamask-onboarding.bundle.js\"><\/script>\n    <script>\n      window.addEventListener('DOMContentLoaded', () => {\n        const onboarding = new MetaMaskOnboarding();\n        const onboardButton = document.getElementById('onboard');\n        let accounts;\n\n        const updateButton = () => {\n          if (!MetaMaskOnboarding.isMetaMaskInstalled()) {\n            onboardButton.innerText = 'Click here to install MetaMask!';\n            onboardButton.onclick = () => {\n              onboardButton.innerText = 'Onboarding in progress';\n              onboardButton.disabled = true;\n              onboarding.startOnboarding();\n            };\n          } else if (accounts && accounts.length > 0) {\n            onboardButton.innerText = 'Connected';\n            onboardButton.disabled = true;\n            onboarding.stopOnboarding();\n          } else {\n            onboardButton.innerText = 'Connect';\n            onboardButton.onclick = async () => {\n              await window.ethereum.request({\n                method: 'eth_requestAccounts',\n              });\n            };\n          }\n        };\n\n        updateButton();\n        if (MetaMaskOnboarding.isMetaMaskInstalled()) {\n          window.ethereum.on('accountsChanged', (newAccounts) => {\n            accounts = newAccounts;\n            updateButton();\n          });\n        }\n      });\n    <\/script>\n  </body>\n</html>\n")))}p.isMDXComponent=!0}}]);