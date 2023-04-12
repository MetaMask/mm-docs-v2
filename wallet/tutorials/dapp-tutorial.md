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
  const [hasProvider, setHasProvider] = useState<boolean | null>(null)

  useEffect(() => {
    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true })
      setHasProvider(!!provider) // transform provider to true or false
    }

    getProvider()
  }, [])

  return (
    <div className="App">
      <div>Injected Provider {hasProvider ? 'DOES' : 'DOES NOT'} Exist</div>
      { hasProvider &&
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

In the next scenario, we will create another `useState` to hold our `wallet` state. We will be keeping our application up to date with various MetaMask wallet properties like `accounts`, `balance`, and  `chainId`. These are the most important properties of the MetaMask wallet that we want to constantly sync with our application. We will start with first adding state for `accounts` and slowly build up our state over the next few sections of the tutorial.

We will also be wiring up our button to connect to the MetaMask wallet.

Update the `src/App.tsx` to:

```ts
import './App.css'
import { useState, useEffect } from 'react'
import detectEthereumProvider from '@metamask/detect-provider'

function App() {
  const [hasProvider, setHasProvider] = useState<boolean | null>(null)
  const initialState = { accounts: [] }               /* New */
  const [wallet, setWallet] = useState(initialState)  /* New */

  useEffect(() => {
    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true })
      setHasProvider(!!provider)
    }

    getProvider()
  }, [])

  const updateWallet = async (accounts:any) => {     /* New */
    setWallet({ accounts })                          /* New */
  }                                                  /* New */

  const handleConnect = async () => {                /* New */
    let accounts = await window.ethereum.request({   /* New */
      method: "eth_requestAccounts",                 /* New */
    })                                               /* New */
    updateWallet(accounts)                           /* New */
  }                                                  /* New */

  return (
    <div className="App">
      <div>Injected Provider {hasProvider ? 'DOES' : 'DOES NOT'} Exist</div>

      { hasProvider &&                               /* Updated */
        <button onClick={handleConnect}>Connect MetaMask</button>
      }
      
      { wallet.accounts.length > 0 &&                /* New */
        <div>Wallet Accounts: { wallet.accounts[0] }</div>
      }
    </div>
  )
}

export default App
```
The code above has comments on each new line of code and those lines of code that have been updated. Let's talk about these changes.

We create an object that represent the initial empty state object, as well a new `useState` that will hold our important `wallet` state.

We have added an `updateWallet` function to update our wallet state and this function will come in handy as we add `balance` and `chainId` to our state. Right now it looks a bit overkill. But we are forecasting what we will need in the next few steps.

We have added a `handleConnect` function that our button will call to connect to MetaMask using `window.ethereum.request` and it's `eth_requestAccounts` method. We store the awaited result from this RPC call in a variable named `accounts` and then pass it to our `updateWallet` function, storing that account array in our local state.

### React We Have a Problem

We lose our account data if we refresh the page. When we connect with the button, we set those accounts in our state, but when the page refreshes, we need something in our `useEffect` that will check to see if we are already connected and update our wallet state.

Thinking ahead we know that once we are tracking more than just `accounts`, we will need a mechanism to also get the `balance` and `chainId` and update their state too.

Let's update our `src/App.tsx` with some added logic to our `useEffect`:

```ts
import './App.css'
import { useState, useEffect } from 'react'
import detectEthereumProvider from '@metamask/detect-provider'

function App() {
  const [hasProvider, setHasProvider] = useState<boolean | null>(null)
  const initialState = { accounts: [] }
  const [wallet, setWallet] = useState(initialState)

  useEffect(() => {
    const refreshAccounts = (accounts: any) => {                /* New */
      if (accounts.length > 0) {                                /* New */
        updateWallet(accounts)                                  /* New */
      } else {                                                  /* New */
        // if length 0, user is disconnected                    /* New */
        setWallet(initialState)                                 /* New */
      }                                                         /* New */
    }                                                           /* New */

    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true })
      setHasProvider(!!provider)

      if (provider) {                                           /* New */
        const accounts = await window.ethereum.request(         /* New */
          { method: 'eth_accounts' }                            /* New */
        )                                                       /* New */
        refreshAccounts(accounts)                               /* New */
        window.ethereum.on('accountsChanged', refreshAccounts)  /* New */
      }                                                         /* New */
    }

    getProvider()
  }, [])

  const updateWallet = async (accounts:any) => {
    setWallet({ accounts })
  }

  const handleConnect = async () => {
    let accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    })
    updateWallet(accounts)
  }

  return (
    <div className="App">
      <div>Injected Provider {hasProvider ? 'DOES' : 'DOES NOT'} Exist</div>

      { window.ethereum?.isMetaMask && wallet.accounts.length < 1 &&  /* Updated */
        <button onClick={handleConnect}>Connect MetaMask</button>
      }

      { wallet.accounts.length > 0 &&
        <div>Wallet Accounts: { wallet.accounts[0] }</div>
      }
    </div>
  )
}

export default App
```

We can now test our application and see that when we refresh the page, we retain our display of the users address. We can also see that managing state in a single component is a lot of work when we are syncing with a source outside of our application. But most of the logic is in place to start adding a few more properties to our state object.

### Connection Wrap Up

In learning how to connect to MetaMask from a React application, we have learned how to track some basic state of our wallet (accounts), specifically, which one is selected and active in the MetaMask wallet. We sync this state locally using React `useState` and the React `useEffect` Hooks. We ensure that if a user manually disconnects, changes the account or refreshes the page, that our single component is aware of any state change.

Up next, we will add `balance` and `chainId` to our state, these are important pieces of MetaMask wallet state that we want to keep in sync with our app.

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