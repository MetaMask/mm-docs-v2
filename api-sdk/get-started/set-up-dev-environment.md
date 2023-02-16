import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Set up your development environment

You can easily set up a simple dapp to integrate with MetaMask.
First, [install MetaMask](https://metamask.io/) in the browser of your choice on your development
machine.
When developing a dapp, we recommend [running a test network](run-test-network.md).

In a text editor of your choice, such as [VS Code](https://code.visualstudio.com/), create a
JavaScript file, `index.js`, and an HTML file, `index.html`.

For any Ethereum dapp to work, your project script must:

1. [Detect the Ethereum provider.](detect-metamask.md)
1. [Detect which Ethereum network the user is connected to](detect-network.md).
1. [Access the user's Ethereum account(s)](access-account.md).

:::tip
We also recommend [importing and using MetaMask SDK](../how-to/use-sdk/index.md) to enable a
reliable, secure, and seamless connection from your dapp to a MetaMask wallet client.
:::

The following is an example simple dapp script and HTML file:

<Tabs>
<TabItem value="javascript" label="JavaScript">

```javascript title="index.js"
/*****************************************/
/* Detect the MetaMask Ethereum provider */
/*****************************************/

import detectEthereumProvider from '@metamask/detect-provider';

const provider = await detectEthereumProvider();

if (provider) {
  startApp(provider);
} else {
  console.log('Please install MetaMask!');
}

function startApp(provider) {
  if (provider !== window.ethereum) {
    console.error('Do you have multiple wallets installed?');
  }
}

/**********************************************************/
/* Handle chain (network) and chainChanged (per EIP-1193) */
/**********************************************************/

const chainId = await ethereum.request({ method: 'eth_chainId' });
handleChainChanged(chainId);

ethereum.on('chainChanged', handleChainChanged);

function handleChainChanged(_chainId) {
  window.location.reload();
}

/***********************************************************/
/* Handle user accounts and accountsChanged (per EIP-1193) */
/***********************************************************/

let currentAccount = null;
ethereum
  .request({ method: 'eth_accounts' })
  .then(handleAccountsChanged)
  .catch((err) => {
    console.error(err);
  });

ethereum.on('accountsChanged', handleAccountsChanged);

function handleAccountsChanged(accounts) {
  if (accounts.length === 0) {
    console.log('Please connect to MetaMask.');
  } else if (accounts[0] !== currentAccount) {
    currentAccount = accounts[0];
  }
}

/*********************************************/
/* Access the user's accounts (per EIP-1102) */
/*********************************************/

const ethereumButton = document.querySelector('.enableEthereumButton');
const showAccount = document.querySelector('.showAccount');

ethereumButton.addEventListener('click', () => {
  getAccount();
});

async function getAccount() {
  const accounts = await ethereum
    .request({ method: 'eth_requestAccounts' })
    .then(handleAccountsChanged)
    .catch((err) => {
      if (err.code === 4001) {
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

```html title="index.html"
<button class="enableEthereumButton">Enable Ethereum</button>
<h2>Account: <span class="showAccount"></span></h2>
```

</TabItem>
</Tabs>
