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
  - [Watch User Balance](#watch-user-balance)
  - [Watch User Chain](#watch-user-chain)
  - [Single Component Conclusion](#single-component-conclusion)
- [Connect MetaMask via SDK](#Connect-metamask-via-SDK)
- [Manage MetaMask State Globally](#manage-metamask-state-globally)

## Pre Requisites

Ensure you have the following before starting this tutorial.

- Node Version 18+
- NPM Version 9+
- Code Editor
- [MetaMask Extension](https://metamask.io/download)
- Basic Knowledge of JavaScript and React

<!-- You can use MetaMask Extension exclusively for this tutorial, however; the MetaMask SDK enables the ability to easily connect to Extension or Mobile, having MetaMask Mobile installed on iOS or Android is recommended for Part 2. -->

## Why Vite and React

[Vite.js](https://v3.vitejs.dev/guide) is a build tool for modern web projects. You can create VanillaJS, Vue, React, Preact, Lit, and Svelte projects using JavaScript or TypeScript.

This tutorial uses Vite + React (with TypeScript). We will step up our use of TypeScript only as we need to.

We will build up our knowledge of working with MetaMask incrementally, this may mean we don't go with the best solution right out of the gate, but the idea is to experiment with the MetaMask API and continually work towards better solutions.

Using React makes working with state management and building with components that need to update easy and allows us to rapidly develop an application using a library and concepts that are familiar to most web developers.

## Scaffold Vite

Scaffold a new project with [Vite.js](https://v3.vitejs.dev/guide), React & TypeScript:

```bash
npm create vite@latest mm-sdk-react -- --template react-ts
```

Install our dependencies:

```bash
cd mm-sdk-react && npm install
```

Open the project in your code editor of choice. We will start by resetting the `App.tsx` page to give us a blank slate.

Update `App.tsx` to:

```ts
import './App.css'

function App() {

  return (
    <div className="App">
      
    </div>
  )
}

export default App
```

We want to define the `window.ethereum` object as `any` to get around type checking. This is ok for the purpose of this demo, but there are other approaches that are beyond the scope of this tutorial.

In the `src/vite-env.d.ts` file, update to:

```ts
/// <reference types="vite/client" />

interface Window {
  ethereum: any;
}
```

Also, for some basic styling purposes, let's change the `src/App.css` to:

```css
.App {
  margin: 1em;
  display: flex;
  flex-direction: column;
  place-items: center;
  min-width: 100vw;
  min-height: 100vh;
}
button {
  margin-top: 0.5em;
}
```

## Detecting MetaMask

Detecting the injected provider that browser extension wallets use is straight forward. Let's write some code in our component that will let us conditionally render a "Connect MetaMask" button.

Update the `src/App.tsx` as follows:

```ts
import './App.css'
let injectedProvider = false

if (typeof window.ethereum !== 'undefined') {
  injectedProvider = true
  console.log(window.ethereum)
}

const isMetaMask = injectedProvider ? window.ethereum.isMetaMask : false

function App() {

  return (
    <div className="App">
      <div>Injected Provider { injectedProvider ? 'DOES' : 'DOES NOT'} Exist</div>
      { isMetaMask && 
        <button>Connect MetaMask</button>
      }
    </div>
  )
}

export default App
```

If we have MetaMask installed, we manage our browser extensions and disable MetaMask refresh our application and then enable it again and refresh and we should see that our application is properly detecting the presence of our MetaMask wallet

The approach above is often what developers will try when first tasked in detecting an injected provider (Wallet Extension), but the MetaMask team provides a library called [@metamask/detect-provider](https://github.com/MetaMask/detect-provider) with a module to detect the MetaMask Ethereum provider or any provider injected at `window.ethereum` on any platform or browser. Let's install it and change our code to implement it instead.

Install the dependency:

```bash
npm install @metamask/detect-provider
```

With this, we can update our `src/App.tsx` to:

```ts
import './App.css'
import detectEthereumProvider from '@metamask/detect-provider'

const provider = await detectEthereumProvider()

function App() {

  return (
    <div className="App">
      <div>Injected Provider { provider ? 'DOES' : 'DOES NOT'} Exist</div>
      { provider?.isMetaMask && 
        <button>Connect MetaMask</button>
      }
    </div>
  )
}

export default App
```

The code above will work, but if you know w thing or two about React and have tried to implement the `detect-provider` by following a NodeJS docs example, you might think this is what you need to do. The problem is that we are blocking the rendering of our React component until a provider has determined to not be present. 

> If you have disabled your MetaMask wallet in your browser and run this page with the console open, you will notice a brief moment when the page is blank and then you will receive an error:

```bash
act_devtools_backend.js:2655 @metamask/detect-provider: Unable to detect window.ethereum.
o
```

So I'm here to show you a better way to use this code in a React application. 

Let's add imports for `useState` and `useEffect` and update the code in our `src/App.tsx` component:

```ts
import './App.css'
import { useState, useEffect } from 'react'
import detectEthereumProvider from '@metamask/detect-provider'

function App() {

  const [provider, setProvider] = useState<boolean | null>(null)

  useEffect(() => {
    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true })
      setProvider(!!provider) // transform provider to true or false
    }

    getProvider()
  }, [])

  return (
    <div className="App">
      <div>Injected Provider {provider ? 'DOES' : 'DOES NOT'} Exist</div>
      { provider &&
        <button>Connect MetaMask</button>
      }
    </div>
  )
}

export default App
```

This is a bit more code, but we are now relying on the `detect-provider` which is taking much more into consideration than our hacky attempt before. 

We are creating a piece of local state that be of type boolean or of null value, initialized with a null value.  

Next we create a `useEffect` with zero dependencies (it will only run once in our component lifecycle). 

Inside that `useEffect` we create an `async` function called `getProvider`. We need to define an async function inside of our `useEffect` because the `useEffect` function itself cannot be `async`. This function `await`s the `detectEthereumProvider` call using an option (`silent: true`) to silence the error we had seen before (it is expected if no provider is present). We use our setter function from within our `useState` and transform the detection of the provider to a `boolean` (true/false) value.

If we run our code again in this new configuration, we will see that we are no longer blocking our components rendering and there is no error in our console.

## Connecting to MetaMask

We'll import React's `useState`. In the next scenario, we will use it to store the state of the wallet as we will have a single property named `accounts` to represent the wallet accounts we have connected to.

Update the `src/App.tsx` to:

```ts
import './App.css'
import { useState } from 'react'
import detectEthereumProvider from '@metamask/detect-provider'
const provider = await detectEthereumProvider()

function App() {
  const [wallet, setWallet] = useState({
    accounts: []
  })

  const handleConnect = async () => {
    let accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    })
    setWallet({ accounts })
  }

  return (
    <div className="App">
      <div>Injected Provider { provider ? 'DOES' : 'DOES NOT'} Exist</div>
      { provider?.isMetaMask && wallet.accounts.length < 1 &&
        <button onClick={handleConnect}>Connect MetaMask</button>
      }
      { wallet.accounts.length > 0 &&
        <div>Wallet Accounts: {wallet.accounts[0]}</div>
      }
    </div>
  )
}

export default App
```

We have a button that connects to a MetaMask account and displays the balance once we have done so, but this is not very useful because as soon as we refresh the page, we lose the account information. This implementation requires us to reconnect each time to set that local state. We are going to need some more logic in our React component to know if we are already connected, to detect if they manually disconnect from their our site in MetaMask, and we want to be able to know if they are already connected upon refresh and populate the connected accounts if so.

If we can solve these issues by listening to the `accountsChanged` provider, we will also be able to update the connected account in our state if they manually change which account they are connected to in the MetaMask wallet. Remember that a MetaMask user can have multiple accounts in their wallet and switch between them at any time.

Let's update our `src/App.tsx` with some logic and a `useEffect`:

```ts
import './App.css'
import { useState, useEffect } from 'react'
import detectEthereumProvider from '@metamask/detect-provider'
const provider = await detectEthereumProvider()

function App() {
  const [wallet, setWallet] = useState({
    accounts: []
  })

  useEffect(() => checkConnection(), [])

  const handleConnect = async () => {
    let accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    })
    setWallet({accounts})
  }

  function checkConnection() {
    if (provider) {
      window.ethereum.request({ method: 'eth_accounts' })
      .then((accounts: any) => handleAccountChange(accounts))
      .catch(console.error)
    }
  }

  provider && window.ethereum.on('accountsChanged', (accounts: any) => setWallet({accounts}))

  return (
    <div className="App">
      <div>Injected Provider { provider ? 'DOES' : 'DOES NOT'} Exist</div>
      { provider?.isMetaMask && wallet.accounts.length < 1 &&
        <button onClick={handleConnect}>Connect MetaMask</button>
      }
      { wallet.accounts.length > 0 &&
        <div>Wallet Accounts: {wallet.accounts[0]}</div>
      }
    </div>
  )
}

export default App
```

With this change we have added a `useEffect` that calls a `checkConnection`. That `checkConnection` method determines if a MetaMask account is connected and sets that connected account in our local state. We have also added a listener `window.ethereum.on('accountsChanged', [function])` that will fire a particular function if the MetaMask account has changed. At this point, we can just call `setWallet` to update our local state with any new `accounts` data.

### Connection Wrap Up

In learning how to connect to MetaMask from a React application, we have learned how to track some basic state of our wallet, the accounts that are connected and specifically, which one is selected and active in the MetaMask wallet. We sync this state locally using React State and the React `useEffect` Hook. We ensure that if a user manually disconnects, changes the account or refreshes the page, that our single component is aware of any state change.

Of course, our apps will scale, they will eventually have multiple components and need to keep in sync with much more than just the current selected accounts. But we have the basics of how to work with the wallet in React.

In the next section, we will add the connected account's `balance` and `chainId` to our state, these are important pieces of MetaMask wallet state that we want to keep in sync with our app. 

The MetaMask wallet is an external app that lives outside of our application and it's state is ever changing. The MetaMask user could pay for something on another site, send ETH to a friend or use another site to change their chainId and Network. Our React app needs to listen for these changes and update it's component(s) accordingly.

## Manage More MetaMask State Locally

In this next section, we see what it takes to manage the currently connected account's balance and connected network (chainId). We will see how the strategy for keeping our wallet state in sync progressively gets more complex for each additional piece of state we want to sync.

We are going to continue working with local state and one component, but we should start to think about how this approach is going to scale to a full React app and how we will share this state with additional components and pages as our app grows.

### Watching The Users Balance

To update our current component for displaying the connected address's balance and the current `chainId` we need to update our `useState` object and since we already use the `eth_requestAccounts` RPC endpoint to determine the accounts, we need to add a dependent call to `eth_getBalance` once we have that account information.

We will add a function (`handleAccountChange`) that will handle updating the state object on firing of `accountsChanged` as well we will call this method now from anywhere we currently call `setWallet`.

Finally, we need to parse the returned value of the balance and format it into a human readable string. We'll create a function called `formatBalance` as well.

```ts
import './App.css'
import { useState, useEffect } from 'react'
import detectEthereumProvider from '@metamask/detect-provider'
let provider = await detectEthereumProvider()

function App() {
  const initialState = { accounts: [], balance: "" }
  const [wallet, setWallet] = useState(initialState)

  useEffect(() => checkConnection(), [])
  provider && window.ethereum.on('accountsChanged', handleAccountChange)

  function formatBalance(rawBalance: string) {
    return (parseInt(rawBalance) / 1000000000000000000).toFixed(2)
  }

  async function handleAccountChange(accounts: any) {
    if(accounts.length > 0) {
      const balance = await window.ethereum!.request({
        method: "eth_getBalance",
        params: [accounts[0], "latest"],
      }).then((rawBalance:any) => formatBalance(rawBalance))
      
      setWallet({accounts, balance})
    } else {
      // if length 0, user is disconnected
      setWallet(initialState)
    }
  }

  function checkConnection() {
    if (provider) {
      window.ethereum.request({ method: 'eth_accounts' })
      .then((accounts: any) => handleAccountChange(accounts))
      .catch(console.error)
    }
  }

  const handleConnect = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    })
    const balance = await window.ethereum!.request({
      method: "eth_getBalance",
      params: [accounts[0], "latest"],
    }).then((rawBalance:any) => formatBalance(rawBalance))

    setWallet({accounts, balance})
  }

  return (
    <div className="App">
      <div>Injected Provider { provider ? 'DOES' : 'DOES NOT'} Exist</div>
      { provider?.isMetaMask && wallet.accounts.length < 1 &&
        <button onClick={handleConnect}>Connect MetaMask</button>
      }
      { wallet.accounts.length > 0 &&
        <>
          <div>Wallet Accounts: {wallet.accounts[0]}</div>
          <div>Wallet Balance: {wallet.balance}</div>
        </>
      }
    </div>
  )
}

export default App
```

That wasn't too bad, the changes were minimal and pretty obvious, we needed a new property in our local state, ensuring that when we update that state that both values are being passed through. As well, we needed to fetch our balance once the accounts had already been determined.

Finally we will add the ability to watch the current network's `chainId` and determine what we will do if the currently selected chain in the users wallet is not the one we need for interacting with our site.

### Watching the Users Chain

In this final iteration of the single component code, we will detect any change of the chainId, we will also add `chainIdHex` and `chainIdNum` to the local state. I have found when I am building an application that needs to do something with chainId's I'd really like to have the hex and numeric version of this networks chainId. To format as a number we need only use `parseInt`, no clever formatting like we did with the balance and need for it's own format function.

We have added a new function called `handleConnect` since we were calling `eth_getBalance` in two different places and since we would have also had to call `eth_chainId` in two different places.

Let's look at the new code!

```ts
import './App.css'
import { useState, useEffect } from 'react'
import detectEthereumProvider from '@metamask/detect-provider'

let provider = await detectEthereumProvider()

function App() {
  const initialState = { accounts: [], balance: "", chainIdHex: "", chainIdNum: 0 }
  const [wallet, setWallet] = useState(initialState)

  useEffect(() => checkConnection(), [])

  if (provider) {
    window.ethereum.on('accountsChanged', handleAccountChange)
    window.ethereum.on("chainChanged", handleChainChange)
  }

  function formatBalance(rawBalance: string) {
    return (parseInt(rawBalance) / 1000000000000000000).toFixed(2)
  }

  async function handleAccountChange(accounts: any) {
    if(accounts.length > 0) {
      const walletState = await fetchWalletState()
      setWallet(walletState)
    } else {
      // if length 0, user is disconnected
      setWallet(initialState)
    }
  }

  async function handleChainChange(chainIdHex: any) {
    const chainIdNum = parseInt(chainIdHex)
    setWallet({ ...wallet, chainIdHex, chainIdNum })
  }

  function checkConnection() {
    if (provider) {
      window.ethereum.request({ method: 'eth_accounts' })
      .then((accounts: any) => handleAccountChange(accounts))
      .catch(console.error)
    }
  }

  async function fetchWalletState() {
    let accounts = wallet.accounts
    if (wallet.accounts.length < 1) {
      accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      })
    }
    const balance = await window.ethereum!.request({
      method: "eth_getBalance",
      params: [accounts[0], "latest"],
    }).then((rawBalance:any) => formatBalance(rawBalance))

    const chainIdHex = await window.ethereum!.request({
      method: "eth_chainId",
    });
    const chainIdNum = parseInt(chainIdHex)

    return {accounts, balance, chainIdHex, chainIdNum}
  }

  const handleConnect = async () => {
    const walletState = await fetchWalletState()
    setWallet(walletState)
  }

  return (
    <div className="App">
      <div>Injected Provider { provider ? 'DOES' : 'DOES NOT'} Exist</div>
      { provider?.isMetaMask && wallet.accounts.length < 1 &&
        <button onClick={handleConnect}>Connect MetaMask</button>
      }
      { wallet.accounts.length > 0 &&
        <>
          <div>Wallet Accounts: {wallet.accounts[0]}</div>
          <div>Wallet Balance: {wallet.balance}</div>
          <div>Hex ChainId: {wallet.chainIdHex}</div>
          <div>Numeric ChainId: {wallet.chainIdNum}</div>
        </>
      }
    </div>
  )
}

export default App
```

A few things to note is that our tutorial's app only needs to display information about our wallet. But in a real Web3 app, you may need to do a few more things with the network chainId. 

You may need to have a list of whitelisted chainId's that your app supports, you may need to create UI that shows information on that network, you might want to present a button that allows them to connect to a supported chain, and I'm sure many other things. Knowing the users wallet is on the correct chain and reacting to that in your application is important in almost every Web3 application I can think of.

This tutorial's scope will not be covering any of those scenarios, but at the least you now have that chainId, you are watching it for changes and could build functionality around it if needed.

### Single Component Conclusion

Our code is starting to get a little confusing. But don't think we have led you astray. We now have our head around connecting and listening to the MetaMask wallet state. But, if we want to bring this functionality to an application with more than one component that will need to know about it's state, we're going to have to break out of this local state and use something like React's Context API to manage the state globally and ensure that any component in our application can be aware and conditionally render or display information pertaining to our MetaMask wallet.

We also would like to bring in the MetaMask SDK, it's only an import and a few lines of code, so it doesn't matter if we do it now or once we've refactored our state. In the next section of the tutorial we will introduce MetaMask SDK which will enable our users to connect via Metamask Extension or MetaMask mobile and we will sort out our application state and make it global.

## Connect MetaMask via SDK