# Detect MetaMask

To verify if the browser is running MetaMask, copy and paste the following code snippet in the
developer console of your web browser:

```javascript
if (typeof window.ethereum !== 'undefined') {
  console.log('MetaMask is installed!');
}
```

View the [full API](../reference/provider-api.md) for the `window.ethereum` object.

To differentiate MetaMask from other Ethereum-compatible browsers, you can detect MetaMask using
`ethereum.isMetaMask`.

---

The presence of the MetaMask Ethereum provider object, `window.ethereum` indicates an Ethereum user.
We recommend using [`@metamask/detect-provider`](https://npmjs.com/package/@metamask/detect-provider)
to detect the provider on any platform or browser.

```javascript
// This function detects most providers injected at window.ethereum
import detectEthereumProvider from '@metamask/detect-provider';

const provider = await detectEthereumProvider();

if (provider) {
  // From now on, this should always be true:
  // provider === window.ethereum
  startApp(provider); // initialize your app
} else {
  console.log('Please install MetaMask!');
}
```
