# Detect a user's network

Use the `eth_chainId` RPC method to detect what network a user is on.
Subscribe to the [`chainChanged`](../reference/provider-api.md#chainchanged) provider event to
detect when a user changes networks.

For example, you can add the following to your project script:

```javascript
const chainId = await ethereum.request({ method: 'eth_chainId' });
handleChainChanged(chainId);

ethereum.on('chainChanged', handleChainChanged);

function handleChainChanged(_chainId) {
  // We recommend reloading the page, unless you must do otherwise.
  window.location.reload();
}
```

:::note
These are the IDs of the Ethereum chains that MetaMask supports by default.
Consult [chainid.network](https://chainid.network) for more.

| Hex  | Decimal | Network                         |
| ---- | ------- | ------------------------------- |
| 0x1  | 1       | Ethereum main network (mainnet) |
| 0x3  | 3       | Ropsten test network            |
| 0x4  | 4       | Rinkeby test network            |
| 0x5  | 5       | Goerli test network             |
| 0x2a | 42      | Kovan test network              |
:::
