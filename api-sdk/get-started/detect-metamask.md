# Detect MetaMask

The presence of the MetaMask Ethereum provider object, `window.ethereum`, in a user's browser
indicates an Ethereum user.

To demonstrate this, verify if your browser is running MetaMask by copying and pasting the following
code snippet in the developer console of your browser:

```javascript
if (typeof window.ethereum !== 'undefined') {
  console.log('MetaMask is installed!');
}
```

:::tip
To differentiate MetaMask from other Ethereum-compatible browsers, you can detect MetaMask using the
[`ethereum.isMetaMask`](../reference/provider-api.md#ethereumismetamask) property.
:::

## Use @metamask/detect-provider

We recommend using the [`@metamask/detect-provider`](https://github.com/MetaMask/detect-provider)
utility to detect the provider on any platform or browser.

Install `@metamask/detect-provider` in your project directory:

```bash
npm i @metamask/detect-provider
```

You can then add something like the following to your project script:

```javascript
// This function detects most providers injected at window.ethereum.
import detectEthereumProvider from '@metamask/detect-provider';

// This returns the provider, or null if it wasn't detected.
const provider = await detectEthereumProvider();

if (provider) {
  // From now on, this should always be true:
  // provider === window.ethereum
  startApp(provider); // initialize your app
} else {
  console.log('Please install MetaMask!');
}

function startApp(provider) {
  // If the provider returned by detectEthereumProvider isn't the same as
  // window.ethereum, something is overwriting it – perhaps another wallet.
  if (provider !== window.ethereum) {
    console.error('Do you have multiple wallets installed?');
  }
  // Access the decentralized web!
}
```
