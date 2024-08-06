const BitcoinCore = require('bitcoin-core');

// Configure the Bitcoin Core client
const client = new BitcoinCore({
  network: 'mainnet', // Change to 'mainnet', 'testnet', or 'regtest' as appropriate
  username: '',
  password: '',
  port: 18443, // Default port for regtest; change if using mainnet or testnet
});

async function checkConnection() {
  try {
    const info = await client.getBlockchainInfo();
    console.log('Connected to Bitcoin Core:', info);
  } catch (err) {
    console.error('Connection failed:', err);
  }
}

async function listUnspent() {
  try {
    const utxos = await client.listUnspent();
    console.log('listUnspent UTXOs:', utxos);
  } catch (err) {
    console.error('Error listing unspent UTXOs:', err);
  }
}

async function scanTxOutSet(address) {
  try {
    const result = await client.command('scantxoutset', 'start', [
      { desc: `addr(${address})` },
    ]);
    console.log('scantxoutset result:', result);
  } catch (err) {
    console.error('Error scanning UTXO set:', err);
  }
}

async function getTxOutSetInfo() {
  try {
    const info = await client.getTxOutSetInfo();
    console.log('getTxOutSetInfo:', info);
  } catch (err) {
    console.error('Error getting UTXO set info:', err);
  }
}

async function main() {
  await checkConnection();
  await listUnspent();
  // Replace with an actual address to scan for
  const testAddress = '';
  await scanTxOutSet(testAddress);
  await getTxOutSetInfo();
}

main();
