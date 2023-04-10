---
title: Dapp Tutorial
description: Beyond getting started, working with the MetaMask API and SDK to connect to MetaMask from a dApp.
---

## Table of Contents

- [Pre Requisites](#pre-requisites)
- [Why Vite and React](#why-vite-and-react)
- [Scaffold a Vite React Project](#scaffold-vite)
- [Detecting MetaMask](#detecting-metamask)
- [Connecting to MetaMask](#connecting-to-metamask)
- [Manage More MetaMask State Locally](#manage-more-metamask-state-locally)
- [Connect MetaMask via SDK](#Connect-metamask-via-SDK)
- [Manage MetaMask State Globally](#manage-metamask-state-globally)

## Pre Requisites

Ensure you have the following before starting this tutorial.

- Node Version 18+
- NPM Version 9+
- Code Editor
- [MetaMask Extension & Mobile](https://metamask.io/download)
- Basic Knowledge of React and React Hooks

You can use MetaMask Extension exclusively for this tutorial, however; once we install MetaMask SDK and to test our dApp to connect to Extension and Mobile, you would need to have MetaMask installed on iOS or Android to connect to mobile.

## Why Vite and React

[Vite.js](https://v3.vitejs.dev/guide) is a build tool for modern web projects. You can create VanillaJS, Vue, React, Preact, Lit, and Svelte projects using JavaScript or TypeScript. Vite is our tool of choice for tutorials and demo.

This tutorial uses Vite + React (With and Without TypeScript). Getting started, we will simply use JavaScript to show the basics of working with MetaMask within React. As we scale our project to include more components, State, Context, and additional pages and components, we will install additional dependencies and start using TypeScript in the project.

The purpose in doing things this way is so that we will learn together and experience incrementally leveling up our dApp in stages.

We use React because it's the library we get he most requests for building dApps in, as well things like state management, and the ability to rapidly develop applications is easy and using React allows us to meet as many developers in the Web3 space on a familiar stack.

## Scaffold Vite

Open a terminal and scaffold a React application:

```bash
# npm 7+
npm create vite@latest mm-sdk-react -- --template react-ts
```

Change directory and an install our dependencies:

```bash
cd mm-sdk-react && npm install
```

Open the new Vite project directory (`mm-sdk-react`) in your code editor of choice. We will start by resetting the `App.tsx` page as we want a blank slate.

Update `App.tsx` to:

```ts
function App() {

  return (
    <div className="App">
      
    </div>
  )
}

export default App
```

Until we start using the Ethers library, we also want to define the window.ethereum object as `any`. Once we are using the Ethers Web3 convenience library, we can set that object to an actual type.

In the `src/vite-env.d.ts` file, update to:

```ts
/// <reference types="vite/client" />

interface Window {
  ethereum: any;
}
```

This is by no means the best practice at defining definitions for the `window.ethereum` object, but for now will let us start working with the Ethereum Provider in a project that we want to use typings in.

## Detecting MetaMask

Let's start with the following code and understand what it gives us as far as a solution to know if an injected provider is present and if we think it is MetaMask.

Update the `src/App.tsx` as follows:

```ts
let injectedProvider = false;

if (typeof window.ethereum !== 'undefined') {
  injectedProvider = true;
  console.log(window.ethereum);
};

const isMetaMask = injectedProvider ? window.ethereum.isMetaMask : false;

function App() {

  return (
    <div className="App">
      <div>Injected Provider { injectedProvider ? 'DOES' : 'DOES NOT'} Exist</div>
      { isMetaMask && 
        <button>Connect MetaMask</button>
      }
    </div>
  )
};

export default App;
```

Rather than detect MetaMask with our own code, lets install a library to help us do that.

```bash
npm i @metamask/detect-provider
```

With this, we can update our `src/App.tsx` to:

```ts
import { useState } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';

const provider = await detectEthereumProvider();
const isMetaMask = provider ? provider.isMetaMask : false;

function App() {

  return (
    <div className="App">
      <div>Injected Provider { provider ? 'DOES' : 'DOES NOT'} Exist</div>
      { isMetaMask && 
        <button>Connect MetaMask</button>
      }
    </div>
  )
}

export default App;
```

Here we have detected the Ethereum Provider and determined if `isMetaMask` is true. As well we have some basic logic in our component that renders some text one way or another is the provider is available and renders a "Connect MetaMask" button if `isMetaMask` is `true`.

Next we will wire up this button, so that if we have a MetaMask Extension to connect to, we can go ahead and connect and return the the current `chainId`.

## Connecting to MetaMask

We've already added the import for React's `useState`. In the next scenario, we will use it to store the state of the wallet as we will have a single property named `accounts` to represent the wallet accounts we have connected to.

Update the `src/App.tsx` to:

```ts
import { useState } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
const provider = await detectEthereumProvider();

function App() {
  const isMetaMask = provider ? provider.isMetaMask : false;
  const [wallet, setWallet] = useState({
    accounts: []
  })

  const handleConnect = async () => {
    let accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setWallet({ accounts });
  };

  return (
    <div className="App">
      <div>Injected Provider { provider ? 'DOES' : 'DOES NOT'} Exist</div>
      { isMetaMask && wallet.accounts.length < 1 &&
        <button onClick={handleConnect}>Connect MetaMask</button>
      }
      { wallet.accounts.length > 0 &&
        <div>Wallet Accounts: {wallet.accounts[0]}</div>
      }
    </div>
  )
}

export default App;
```

We have a button that connects to a MetaMask account and displays the balance once we have done so, but this is not very useful because as soon as we refresh the page, we lose the account information. This implementation requires us to reconnect each time to set that local state. We are going to need some more logic in our React component to know if we are already connected, to detect if they manually disconnect from their our site in MetaMask, and we want to be able to know if they are already connected upon refresh and populate the connected accounts if so.

If we can solve these issues by listening to the `accountsChanged` provider, we will also be able to update the connected account in our state if they manually change which account they are connected to in the MetaMask wallet. Remember that a MetaMask user can have multiple accounts in their wallet and switch between them at any time.


Let's update out `src/App.tsx` to have some additional logic and a `useEffect`:

```ts
import { useState, useEffect } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
const provider = await detectEthereumProvider();

function App() {
  const isMetaMask = provider ? provider.isMetaMask : false;
  const [wallet, setWallet] = useState({
    accounts: []
  })

  useEffect(() => checkConnection(), []);

  const handleConnect = async () => {
    let accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setWallet({accounts})
  }

  function checkConnection() {
    window.ethereum.request({ method: 'eth_accounts' })
      .then((accounts: any) => setWallet({accounts}))
      .catch(console.error);
  }

  window.ethereum.on('accountsChanged', (accounts: any) => setWallet({accounts}));

  return (
    <div className="App">
      <div>Injected Provider { provider ? 'DOES' : 'DOES NOT'} Exist</div>
      { isMetaMask && wallet.accounts.length < 1 &&
        <button onClick={handleConnect}>Connect MetaMask</button>
      }
      { wallet.accounts.length > 0 &&
        <div>Wallet Accounts: {wallet.accounts[0]}</div>
      }
    </div>
  )
}

export default App;
```

With this change we have added a `useEffect` that calls a `checkConnection` method which in turn, determines if there is a connected account from within MetaMask and setting that connected account in our local state. We have also added a listener that will fire if the MetaMask account has changed and call our `setWallet` setter method to update our local state with any new account information.

### Conclusion

In learning how to connect to MetaMask from a React application, we have learned how to track some basic state of our wallet, the accounts that are connected and specifically, which one is selected and active in the MetaMask wallet. We have tracked this state locally using React State and the React `useEffect` hook. We have ensured that if they disconnect manually, change the account or refresh the page that we can retain the information needed for our single React component.

In reality, our apps will scale, they will have multiple components and need to keep in sync with much more than just the current selected account. But we are going to continue taking these situations one by one and updating and scaling our app as needed.

In the next section, we will add the users balance and chainId to our state, as they are very important pieces of Metamask wallet state that we want to know about and ensure we have the correct values and know if they change all of the sudden. 

The MetaMask Extension can be considered an app outside of our application, kind of like it's own database of sorts. The MetaMask user could pay for something on another site, send ETH to a friend or use another site to change their chainId and Network. Our applications will need to listen for these changes and update their state accordingly.

## Manage More MetaMask State Locally

In this next section, we will see what it takes to manage the currently connected account's balance and the users currently connected network by chainId. The purpose for this next exercise is to see how complex managing our wallet state can get by just adding balance and chainId to that list of state we want to keep in sync with our app.

Sometimes to really understand how to build an app the right way, so that it can scale, we need to do things the hard way and learn hard lessons.

Two problems we will face in this exercise is how adding additional state complicates our component and how we have cornered ourself into a single component. The work we will have done has helped us to reach our goal, but we will now see how limited we are in sharing this state as our app needs additional components and pages.