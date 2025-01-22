const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const { Blockchain } = require('./src/blockchain'); // Update import

// Create blockchain instance
const blockchain = new Blockchain();

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// API Routes
app.get('/api/blockchain', (req, res) => {
  res.json(blockchain.chain);
});

app.post('/api/mine', (req, res) => {
  const newBlock = blockchain.addBlock({ timestamp: Date.now() });
  res.json(newBlock);
});

// Start server
app.listen(port, () => {
  console.log(`Blockchain app running at http://localhost:${port}`);
});