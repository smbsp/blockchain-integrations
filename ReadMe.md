# Blockchain Integrations

This repository contains various examples and snippets related to blockchain integrations. It includes examples of using promises and callbacks, integrations with Bitcoin and Ethereum, and manipulating financial values in JavaScript.

## Table of Contents

- [Blockchain Integrations](#blockchain-integrations)
  - [Table of Contents](#table-of-contents)
  - [Promises and Callbacks](#promises-and-callbacks)
  - [Integrations with bitcoind](#integrations-with-bitcoind)
  - [Signing Ethereum Transactions](#signing-ethereum-transactions)
  - [Manipulating Financial Values](#manipulating-financial-values)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Acknowledgments](#acknowledgments)

## Promises and Callbacks

This section demonstrates the usage of promises and callbacks in JavaScript.

- **index-new.js**: Examples using promises.
- **index.js**: Examples using callbacks.
- **testRunner.js**: A test runner to execute the examples.
- **mockDb.js**: A mock database implementation to support the examples.

## Integrations with bitcoind

This section contains examples of integrating with `bitcoind`.

- **test-utxos.js**: Example of fetching and handling UTXOs (Unspent Transaction Outputs) using `bitcoind`.

## Signing Ethereum Transactions

This section demonstrates how to sign Ethereum transactions using the `ethers.js` library.

- **ethers.js**: Example of signing Ethereum transactions.

## Manipulating Financial Values

This section includes examples of manipulating financial values in JavaScript.

- **nativeJS.js**: Examples using native JavaScript methods for financial calculations.
- **decimal.js**: Examples using the `decimal.js` library for precise financial calculations.

## Getting Started

### Prerequisites

- Node.js installed on your local machine.
- `bitcoind` running and accessible if you want to run the `test-utxos.js` example.
- Ethereum account and private key for signing transactions in the `ethers.js` example.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/smbsp/blockchain-integrations.git
    cd blockchain-integrations
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

### Usage

To run the examples, use the following commands:

- For promises and callbacks examples:
    ```bash
    node index-new.js   # For promises
    node index.js       # For callbacks
    ```

- For bitcoind integration:
    ```bash
    node test-utxos.js
    ```

- For signing Ethereum transactions:
    ```bash
    node ethers.js
    ```

- For manipulating financial values:
    ```bash
    node nativeJS.js
    node decimal.js
    ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or new examples.

## Acknowledgments

Special thanks to all contributors and the open-source community for their valuable input and support.

