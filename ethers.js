require('dotenv').config();
const { ethers } = require('ethers');

// Define the transaction object
const transaction = {
  to: '0xRecipientAddress',
  value: ethers.utils.parseEther('0.1'),
  gasLimit: 21000,
  gasPrice: ethers.utils.parseUnits('10', 'gwei'),
  nonce: 0,
  chainId: 1, // Mainnet chain ID
};

// Get the private key and Alchemy API URL from environment variables
const privateKey = process.env.PRIVATE_KEY;
const alchemyApiUrl = process.env.ALCHEMY_API_URL;

// Initialize a wallet
const wallet = new ethers.Wallet(privateKey);

// Initialize a provider
const provider = new ethers.providers.JsonRpcProvider(alchemyApiUrl);

// Connect the wallet to the provider
const walletWithProvider = wallet.connect(provider);

async function signAndSendTransaction() {
  try {
    // Sign the transaction
    const signedTransaction =
      await walletWithProvider.signTransaction(transaction);
    console.log('Signed Transaction: ', signedTransaction);

    // Send the signed transaction
    const txResponse =
      await walletWithProvider.sendTransaction(signedTransaction);
    console.log('Transaction Hash: ', txResponse.hash);

    // Wait for the transaction to be mined
    const receipt = await txResponse.wait();
    console.log('Transaction was mined in block: ', receipt.blockNumber);
  } catch (error) {
    console.error('Error signing or sending transaction: ', error);
  }
}

signAndSendTransaction();
