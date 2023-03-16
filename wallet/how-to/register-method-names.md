---
description: Register a contract's method names on the Ethereum Signature Database.
---

# Register a contract's method names

MetaMask uses the [Ethereum Signature Database](https://www.4byte.directory/submit/) to display
method names on the confirmation screen.
For many common method names, such as token methods, this allows MetaMask to successfully look up
the method names by their [method signature](https://solidity.readthedocs.io/en/v0.4.21/abi-spec.html).
However, sometimes you're using a method that isn't in that on-chain registry, and MetaMask simply
displays **Contract Interaction** to the user.

To add your contract's function names to this registry so it shows in the MetaMask interface:

1. Go to the
    [Mainnet Parity signature registration contract on Etherscan](https://etherscan.io/address/0x44691b39d1a75dc4e0a0346cbb15e310e6ed1e86#writeContract).
2. Connect MetaMask.
3. Use Etherscan's write contract feature to input the string value (without quotes or spaces) to
    the register function.
    For example:

    `getOwners()`

    `execTransaction(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,bytes)`

4. Select **write**.
5. Approve the transaction in MetaMask (you only pay gas).
