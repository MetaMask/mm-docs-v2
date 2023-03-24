---
description: Create a transaction insights snap.
---

# Create a transaction insights snap

This tutorial walks you through creating a snap
The snap is based on the
[Snaps template](https://github.com/MetaMask/template-snap-monorepo).

## Prerequisites

- [Snaps installed](../get-started/install-snaps.md)

- A text editor (for example, [VS Code](https://code.visualstudio.com/))

## Steps

### 1. Set up the project

Use the [Snaps CLI](../get-started/install-snaps.md#install-the-snaps-cli) to create a new snap
project:

```bash
mm-snap init transaction-insights-snap
```

The initial project includes some MetaMask organization-specific files.
You can clean these up by running the cleanup script in the project directory:

```bash
./scripts/cleanup.sh
```

:::info
Running this script deletes unneeded files, deletes the script itself, and commits the changes
automatically.
:::

The initial project has generic names in multiple places.
You can edit some files to customize the project:

- In `/package.json`:
  - Update `name` to be unique to your project.
  - Optionally add a `description`.
  - Customize or remove `homepage`, `repository`, `author`, and `license`.
- In `/packages/snap/package.json` and `/packages/snap/snap.manifest.json`:
  - The Snaps manifest file (`/packages/snap/snap.manifest.json`) is specified in the Snaps
    Publishing Specification.
    Refer to the specification, and edit the `proposedName`, `description`, and `repository` fields,
    matching them in `/packages/snap/package.json` as described in the spec.
    When publishing the snap to npm, you'll also need to edit the `location.packageName` field to
    match that of `/packages/snap/package.json`.
- In `/packages/site/package.json`:
  - This is the same pattern as before.
    The site workspace is where the static React site lives.
    Normally it won't be published to npm so the name field matters less, but feel free to make any
    changes necessary in there.

Optionally edit or remove any configurations related to ESLint, Prettier, Editorconfig, etc. to
match your preferences or those of your organization.

If coding your snap with VS Code, you can create or update the file `/.vscode/settings.json` with
the following settings.
This makes VS Code automatically fix linting errors when saving a file:

```json title="settings.json"
{
  "eslint.format.enable": true,
  "eslint.packageManager": "yarn",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.codeActionsOnSave.mode": "all",
  "editor.tabSize": 2
}
```

### 2. Set up the snap for transaction insights

The template snap is set up to expose a JSON-RPC API with a simple hello command, which brings up a
dialog box.
In contrast, the snap we're creating for this workshop doesn't expose any API.
Instead, it provides transaction insights directly in the MetaMask transaction window.
In this step, we'll be removing code and permissions related to the JSON-RPC API, adding basic
transaction insights code, and testing the resulting snap.
In the process, we'll also learn how to debug a snap.

#### Remove JSON-RPC-related code and configuration

1. Remove all the code in `/packages/snap/src/index.ts`
2. In `/packages/snap/snap.manifest.json`, remove the entries `snap_dialog` and
    `endowment:rpc` under `initialPermissions`.

#### Add transaction insights code and configuration

1. In `/packages/snap/src/index.ts`, add the following code:

    ```typescript title="index.ts"
    import { OnTransactionHandler } from '@metamask/snaps-types';
    import { heading, panel, text } from '@metamask/snaps-ui';
    
    // Handle outgoing transactions
    export const onTransaction: OnTransactionHandler = async ({ transaction }) => {
      console.log('Transaction insights transaction', transaction);
    
      return {
        content: panel([
          heading('Percent Snap'),
          text(
            'This snap will show you what percentage of your ETH transfers are paid in gas fees.',
          ),
        ]),
      };
    };
    ```

2. In `/packages/snap/snap.manifest.json`, make `initialPermissions` the following object:

    ```json title="snap.manifest.json"
    {
        "endowment:transaction-insight": {}
    }
    ```

#### Install and test the snap

1. From the root of the project, run `yarn start` or `npm start`.
    This starts two development servers: one for watching and compiling the snap, and another
    for the React site.
    The snap bundle is served from `localhost:8080`, and the site is served from `localhost:8000`.

2. Open [`localhost:8000`](http://localhost:8000) in your browser (with MetaMask Flask installed).

3. Select **Connect**, and accept the permission request.

4. On the next screen, notice that the **Install Snap** dialog tells you that the snap wants the
    permission to **Fetch and display transaction insights.**
    Select **Approve & install**.

5. From MetaMask, create a new ETH transfer.

6. On the confirmation window, you'll see a new tab named **ETHDENVER 2023 PERCENT SNAP**.
    Switch to that tab.
    Note that it's the switching to the tab that activates the `onTransaction` export of your snap
    to be called.

7. Notice the custom UI output from the snap.

8. If you look in your browser's developer tools for the `console.log` that we set up, notice that
    it's not there.
    That's because `console.log`s from your snap are happening inside the extension.
    In the next section, you'll learn how to debug a snap.

#### Debug your snap

1. Go to `chrome://extensions/`.

2. On the top right-hand corner, make sure that **Developer mode** is on.

3. Find MetaMask Flask, and select **Details**.

4. Under **Inspect views**, select `background.html`.

5. Go back to the MetaMask transaction window, and switch back to **ETHDENVER 2023 PERCENT SNAP**.
    You should now see the result of your `console.log` in the new developer tools window linked to
    `background.html`.

### 3. Enable the Ethereum provider

To show the end user the percentage of their transfer that they're paying in gas fees, you must know
the current gas price.
Get this by calling the
[`eth_gasPrice`](https://metamask.github.io/api-playground/api-documentation/#eth_gasPrice) RPC
method using the global Ethereum provider made available to snaps.

To use the global Ethereum provider, the snap must request permission for it.
Open `/packages/snap/snap.manifest.json`, and change the `initialPermissions` to:

```json title="snap.manifest.json"
{
  "endowment:transaction-insight": {},
  "endowment:ethereum-provider": {}
}
```

Since you've made some changes to your snap, you must reinstall it.
Go back to the dapp and select **Reconnect**.
In the **Install snap** window, you'll see a new permission request to
**Access the Ethereum provider.**
Select **Approve & install**.

### 4. Fetch the gas price

To fetch the gas price, we can simply use the `ethereum` global.
Add this code between the `console.log` and the `return` in the `onTransaction` export of your snap:

```typescript
const currentGasPrice = await ethereum.request({
  method: 'eth_gasPrice',
});

console.log('Current gas price', currentGasPrice);
```

Reinstall the snap, go back to the MetaMask transaction window, and switch to
**ETHDENVER 2023 PERCENT SNAP**.
This activates the **onTransaction** callback.
In the developer tools window you should see a `console.log` similar to
`Current gas price 0x66b04938`.
The gas price is returned as a hex string in wei.

### 5. Show the gas price in the transaction insights UI

Remove the `console.log` for the `currentGasPrice`.
Replace the `return` statement in `onTransaction` with the following:

```typescript
return {
  content: panel([
    heading('Percent Snap'),
    text(`Current gas price: ${parseInt(currentGasPrice ?? '', 16)} wei`),
  ]),
};
```

This displays the current gas price in wei in the transaction insights UI.

### 6. Calculate and display the total gas

When implementing transaction insights, we get access to the following fields in the transaction object:

```json
{
  "from": "sender address",
  "gas": "0x5208",
  "maxFeePerGas": "0x1014e7ff3c",
  "maxPriorityFeePerGas": "0x59682f00",
  "to": "receiver address",
  "type": "0x2",
  "value": "0x16345785d8a0000"
}
```

We can roughly calculate the gas fees that the user would pay using the following code:

```typescript
const transactionGas = parseInt(transaction.gas as string, 16);
const currentGasPriceInWei = parseInt(currentGasPrice ?? '', 16);
const maxFeePerGasInWei = parseInt(transaction.maxFeePerGas as string, 16);
const maxPriorityFeePerGasInWei = parseInt(
  transaction.maxPriorityFeePerGas as string,
  16,
);

const gasFees = Math.min(
  maxFeePerGasInWei * transactionGas,
  (currentGasPriceInWei + maxPriorityFeePerGasInWei) * transactionGas,
);
```

Reinstall your snap, then reload the **PERCENT SNAP** transaction insights tab.
You should now see a message like the following:

> As setup, this transaction would cost 238377.74415 gwei in gas.

### 7. Calculate and display the percentage of gas fees

Calculating the percentage of gas fees paid should now be easy:

```typescript
const transactionValueInWei = parseInt(transaction.value as string, 16);
const gasFeesPercentage = (gasFees / (gasFees + transactionValueInWei)) * 100;

return {
  content: panel([
    heading('Percent Snap'),
    text(
      `As setup, you are paying **${gasFeesPercentage.toFixed(
        2,
      )}%** in gas fees for this transaction.`,
    ),
  ]),
};
```

Reinstall your snap, reactivate the **PERCENT SNAP** tab, and you should see a message like the following:

> As setup, you are paying 0.17% in gas fees for this transaction.

### 8. Display a different UI for contract interactions

The snap should only display a percentage if the user is doing a regular ETH transfer.
For contract interactions, it should display a UI that conveys that message.
Add the following code to the beginning of the `onTransaction` export:

```typescript
if (typeof transaction.data === 'string' && transaction.data !== '0x') {
  return {
    content: panel([
      heading('Percent Snap'),
      text(
        'This snap only provides transaction insights for simple ETH transfers.',
      ),
    ]),
  };
}
```

Congratulations! You've finished creating a transaction insights snap.
