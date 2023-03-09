---
description: Snaps permissions reference
---

# Snaps permissions

You can [request the following permissions](../how-to/request-permissions.md) in your snap manifest
file.

## endowment:cronjob

For snaps that wants to run periodic actions for the user, the snap can request the
`endowment:cronjob` permission.
This permission allows a snap to specify periodic requests that trigger the exported
[`onCronjob`](../reference/exports.md#oncronjob) method.

Cronjobs are specified as follows:

```json
{
  "initialPermissions": {
    "endowment:cronjob": {
      "jobs": [
        {
          "expression": {
            "minute": "*",
            "hour": "*",
            "dayOfMonth": "*",
            "month": "*",
            "dayOfWeek": "*"
          },
          "request": {
            "method": "exampleMethodOne",
            "params": {
              "param1": "foo"
            }
          }
        },
        {
          "expression": "* * * * *",
          "request": {
            "method": "exampleMethodTwo",
            "params": {
              "param1": "bar"
            }
          }
        }
      ]
    }
  }
}
```

## endowment:ethereum-provider

For snaps that wish to communicate with a node via MetaMask, the snap can request the
`endowment:ethereum-provider` permission.
This permission exposes the global API `ethereum` to the snap execution environment.
Without this permission, this global will not be available.
This global is a EIP-1193 provider.

## endowment:long-running

A snap that is computationally heavy and can't finish execution within the
[snap lifecycle requirements](../concepts/lifecycle.md) can request the `endowment:long-running` permission.
This permission allows the snap to run indefinitely while processing RPC requests.

```json
"initialPermissions": {
  "endowment:long-running": {}
},
```

## endowment:network-access

A snap that must access the internet must request the `endowment:network-access` permission.
This permission exposes the global networking APIs `fetch` and `WebSocket` to the Snaps execution environment.

:::caution
`XMLHttpRequest` is never available in Snaps, and you should replace it with `fetch`.
If your dependencies are using `XMLHttpRequest`, you can
[patch it away](../how-to/troubleshoot.md#patch-the-use-of-xmlhttprequest).
:::

```json
"initialPermissions": {
  "endowment:network-access": {}
},
```

## endowment:rpc

For snaps that need to handle arbitrary JSON-RPC requests, the `rpc` endowment is required.
This permission grants a snap access to JSON-RPC requests sent to the snap, using the `onRpcRequest`
method.
See [Exports](./snaps-exports.html#onrpcrequest) for more information.

This permission requires an object with a `snaps` or `dapps` property (or both), to signal if the
snap can receive JSON-RPC requests from other snaps, or dapps, respectively.
Both values default to `false`.

```json
{
  "initialPermissions": {
    "endowment:rpc": {
      "dapps": true,
      "snaps": false
    }
  }
}
```

## endowment:transaction-insight

For snaps that provide transaction insights, the snap can request the
`endowment:transaction-insight` permission.
This permission grants a snap read-only access to raw transaction payloads, before they're accepted
for signing by the user, by exporting the [`onTransaction`](../reference/exports.md#ontransaction) method.

```json
"initialPermissions": {
  "endowment:transaction-insight": {}
},
```
