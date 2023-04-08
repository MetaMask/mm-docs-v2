---
title: Dapp Tutorial
description: Beyond getting started, working with the MetaMask API and SDK to connect to MetaMask from a dApp.
---

## Table of Contents

- [Pre Requisites](#pre-requisites)
- [Why Vite and React](#why-vite-and-react)
- [Scaffold a Vite React Project](#scaffold-vite)
- [Connecting to MetaMask](#connecting-to-metamask)
- [Manage MetaMask State Locally](#manage-metamask-state-locally)
- [Connect MetaMask via SDK](#Connect-metamask-via-SDK)
- [Manage MetaMask State Globally](#manage-metamask-state-globally)

## Pre Requisites

Ensure you have the following before starting this tutorial.

- Node Version 18+
- NPM Version 9+
- Code Editor
- [MetaMask Extension & Mobile](https://metamask.io/download)

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
import { useState } from 'react'

function App() {

  return (
    <div className="App">
      
    </div>
  )
}

export default App
```

## Connecting to MetaMask

We are going to keep things very basic to start out with and use local variables and state within React to detect the MetaMask browser Extension.