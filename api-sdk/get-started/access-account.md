import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Access a user's account

User accounts are used in a variety of contexts in Ethereum, including as identifiers and for
signing transactions.
To request a signature from a user or have a user approve a transaction, your dapp must
be able to access the user's accounts.

When accessing user's account:

- You should **only** initiate a connection request in response to direct user action, such as
  selecting a button.
- You should **always** disable the connect button while the connection request is pending.
- You should **never** initiate a connection request on page load.

:::tip
You can [import and use MetaMask SDK](../how-to/use-sdk/index.md) to enable a
reliable, secure, and seamless connection from your dapp to a MetaMask wallet client.
:::

## Create a connect button

We recommend providing a button to allow the user to connect MetaMask to your dapp.
Selecting this button should call the
[`eth_requestAccounts`](../reference/rpc-api.md#ethereum-json-rpc-methods) RPC API method.
For example, you can add the following to your project script and HTML file:

<Tabs>
<TabItem value="javascript" label="JavaScript">

```javascript
// You should only attempt to request the user's accounts in response to user
// interaction, such as selecting a button.
// Otherwise, you popup-spam the user like it's 1999.
// If you fail to retrieve the user's account(s), you should encourage the user
// to initiate the attempt.
const ethereumButton = document.querySelector('.enableEthereumButton');
const showAccount = document.querySelector('.showAccount');

ethereumButton.addEventListener('click', () => {
  getAccount();
});

// While awaiting the call to eth_requestAccounts, you should disable
// any buttons the user can select to initiate the request.
// MetaMask rejects any additional requests while the first is still
// pending.
async function getAccount() {
  const accounts = await ethereum
    .request({ method: 'eth_requestAccounts' })
    .then(handleAccountsChanged)
    .catch((err) => {
      if (err.code === 4001) {
        // EIP-1193 userRejectedRequest error
        // If this happens, the user rejected the connection request.
        console.log('Please connect to MetaMask.');
      } else {
        console.error(err);
      }
    });
  const account = accounts[0];
  showAccount.innerHTML = account;
}
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<button class="enableEthereumButton">Enable Ethereum</button>
<h2>Account: <span class="showAccount"></span></h2>
```

</TabItem>
</Tabs>

This promise-returning function resolves with an array of hex-prefixed Ethereum addresses, which can
be used as general account references when sending transactions.

## Handle accounts

Handle user accounts using the `eth_accounts` RPC API method.
To be notified when the user changes accounts, subscribe to the
[`accountsChanged`](../reference/provider-api.md#accountschanged) provider event.
For example, you can add the following to your project script:

```javascript
let currentAccount = null;
ethereum
  .request({ method: 'eth_accounts' })
  .then(handleAccountsChanged)
  .catch((err) => {
    // Some unexpected error.
    // For backwards compatibility reasons, if no accounts are available,
    // eth_accounts returns an empty array.
    console.error(err);
  });

// Note that this event is emitted on page load.
// If the array of accounts is non-empty, you're already
// connected.
ethereum.on('accountsChanged', handleAccountsChanged);

// eth_accounts always returns an array.
function handleAccountsChanged(accounts) {
  if (accounts.length === 0) {
    // MetaMask is locked or the user has not connected any accounts.
    console.log('Please connect to MetaMask.');
  } else if (accounts[0] !== currentAccount) {
    // Reload your interface with accounts[0].
    currentAccount = accounts[0];
    // Do any other work!
  }
}
```

:::note
In the future, the accounts array may contain more than one account.
This functionality isn't available yet.
The first account in the array will always be considered the user's "selected" account.
:::

Once you've connected to a user, you can re-check the current account by checking the
`ethereum.selectedAddress` object.
