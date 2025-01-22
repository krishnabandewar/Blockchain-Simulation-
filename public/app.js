// Fetch and display blockchain
async function fetchBlockchain() {
  try {
    const response = await axios.get('/api/blockchain');
    const blockchain = response.data;

    const blockchainContainer = document.getElementById('blockchain');
    blockchainContainer.innerHTML = '';

    blockchain.forEach(block => {
      const blockDiv = document.createElement('div');
      blockDiv.classList.add('block');
      blockDiv.innerHTML = `
        <strong>Block #${block.index}</strong><br>
        <strong>Timestamp:</strong> ${new Date(block.timestamp).toLocaleString()}<br>
        <strong>Transactions:</strong> ${JSON.stringify(block.transactions)}<br>
        <strong>Previous Hash:</strong> ${block.previousHash}<br>
        <strong>Hash:</strong> ${block.hash}<br>
      `;
      blockchainContainer.appendChild(blockDiv);
    });
  } catch (error) {
    console.error('Error fetching blockchain:', error);
  }
}

// Mine a new block
async function mineBlock() {
  try {
    const response = await axios.post('/api/mine');
    const newBlock = response.data;
    console.log('New Block Mined:', newBlock);
    fetchBlockchain();
  } catch (error) {
    console.error('Error mining block:', error);
  }
}

// Set up event listener for the "Mine Block" button
document.getElementById('mineButton').addEventListener('click', mineBlock);

// Initial blockchain load
fetchBlockchain();
