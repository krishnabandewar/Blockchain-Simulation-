const { Block, Blockchain } = require('../../src/blockchain'); // Corrected path

describe('Blockchain', () => {
    let blockchain;

    beforeEach(() => {
        blockchain = new Blockchain();
    });

    test('should create genesis block', () => {
        expect(blockchain.chain.length).toBe(1);
        expect(blockchain.chain[0].previousHash).toBe('0');
    });

    test('should add new block', () => {
        const data = { amount: 100 };
        blockchain.addBlock(data);
        expect(blockchain.chain.length).toBe(2);
        expect(blockchain.chain[1].data).toEqual(data);
    });

    test('should validate valid chain', () => {
        blockchain.addBlock({ amount: 100 });
        blockchain.addBlock({ amount: 200 });
        expect(blockchain.isChainValid()).toBe(true);
    });

    test('should detect invalid chain when data is tampered', () => {
        blockchain.addBlock({ amount: 100 });
        blockchain.chain[1].data = { amount: 1000 }; // Tamper with data
        expect(blockchain.isChainValid()).toBe(false);
    });

    test('should detect invalid chain when hash is broken', () => {
        blockchain.addBlock({ amount: 100 });
        blockchain.chain[1].hash = 'invalid_hash';
        expect(blockchain.isChainValid()).toBe(false);
    });

    test('proof of work should generate valid hash', () => {
        const block = new Block(1, Date.now(), { amount: 100 }, '0');
        block.mineBlock(2); // difficulty = 2
        expect(block.hash.substring(0, 2)).toBe('00');
    });
});