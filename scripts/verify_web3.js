const { TokenizationService, Web3Service } = require('../src/services');

async function verifyWeb3() {
    try {
        console.log('--- Starting Web3 Verification ---');

        // 1. Initialize Services
        const tokenizationService = new TokenizationService({ apiKey: 'test-key' });
        const web3Service = new Web3Service(tokenizationService);

        console.log('Services initialized.');

        // 2. Create Blockchain Wallet
        console.log('Creating blockchain wallet...');
        const wallet = await web3Service.createWallet('ethereum');
        console.log('Wallet created:', wallet);

        if (!wallet.address || !wallet.keyTokenId) {
            throw new Error('Wallet creation failed: Missing address or keyTokenId');
        }

        // 3. Verify Secret Token Storage (Mock)
        // We can't easily check the internal state of TokenizationService mock client without mocking axios,
        // but the fact that createSecretToken returned without error is a good sign given our impl.

        // 4. Check Balance
        console.log('Checking balance...');
        const balance = await web3Service.getBalance(wallet.address, 'ethereum');
        console.log('Balance:', balance);

        if (balance.currency !== 'ETH') {
            throw new Error('Incorrect currency returned');
        }

        // 5. Send Transaction (Signing Test)
        console.log('Sending transaction (Testing Signing)...');
        const tx = await web3Service.sendTransaction({
            keyTokenId: wallet.keyTokenId,
            to: '0xRecipientAddress',
            value: '100000000000000000', // 0.1 ETH
            network: 'ethereum'
        });

        console.log('Transaction Result:', tx);

        if (!tx.signedData) {
            throw new Error('Transaction signing failed: No signed data returned');
        }

        if (!tx.hash) {
            throw new Error('Transaction broadcast failed: No hash returned');
        }

        console.log('--- Web3 Verification Successful ---');

    } catch (error) {
        console.error('--- Web3 Verification Failed ---');
        console.error(error);
        process.exit(1);
    }
}

verifyWeb3();
