# Run a test network

To run a test network, in the top right menu of MetaMask, select the network you're currently
connected to.
Here you can find the **Custom RPC** and **Localhost 8545** network options.
These are useful for connecting to a test blockchain, such as
[Ganache](https://www.trufflesuite.com/ganache).

:::tip

You can quickly install and start Ganache using
[npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm):

```bash
npm i -g ganache-cli && ganache-cli
```

:::

Ganache makes developing a dapp faster, easier, and safer.
For example, if your application starts with the `-m` option, you can pass it the same seed phrase
you use for your MetaMask instance, and Ganache gives each of your first 10 accounts 100 test ether,
which makes it easier to start development.

Since your seed phrase controls all your accounts, we recommend keeping at least one seed phrase for
development, separate from any you use for storing real value.
You can manage multiple seed phrases by using multiple browser profiles, each with its own clean
MetaMask installation.

## Reset your local nonce calculation

If you're running a test blockchain and restart it, you can accidentally confuse MetaMask because it
calculates the next [nonce](../how-to/send-transactions.md#nonce) based on both the network
state *and* the known sent transactions.

To clear MetaMask's transaction queue and reset its nonce calculation, use the **Reset Account**
button in **Settings** (in the top right menu).
