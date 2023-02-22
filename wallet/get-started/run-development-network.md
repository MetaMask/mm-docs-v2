---
description: Configure and connect a Ganache development network.
---

# Run a development network

You can run a personal Ethereum development network using [Ganache](https://www.trufflesuite.com/ganache),
which allows you to develop a dapp quickly, easily, and safely.
Follow the [Ganache quickstart](https://trufflesuite.com/docs/ganache/quickstart/) to quickly set
up a development network.

When you create a Ganache workspace, enter the seed phrase you use for your MetaMask instance into
the **Account & Keys** setting.
Ganache automatically gives each of your first 10 accounts 100 test ether (you can configure
these numbers in **Accounts & Keys**), which makes it easy to start development.

:::caution important
Since your seed phrase controls all your accounts, we recommend keeping at least one seed phrase for
development, separate from any used to store real value.
You can manage multiple seed phrases by using multiple browser profiles, each with its own
MetaMask installation.
:::

In the **Server** setting of your workspace, you can find the hostname and port of your Ganache
network, which comprises the RPC URL of your network:

```text
http://<hostname>:<port>
```

In the MetaMask extension, to connect to your Ganache network, select the network you're currently
connected to.
Then, select **Add network** and **Add a network manually**.
Enter the **RPC URL** of your network and MetaMask's default **Chain ID** for Ganache, `1337`.

## Reset your local nonce calculation

If you're running a development network and restart it, you can accidentally confuse MetaMask
because it calculates the next [nonce](../how-to/send-transactions.md#nonce) based on both the
network state *and* the known sent transactions.

To clear MetaMask's transaction queue and reset its nonce calculation, go to **Settings > Advanced**
and select **Reset account**.
