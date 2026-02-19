# Embedding Wallets into Your Application

Integrating OCP wallets into your application allows users to manage their funds securely and perform transactions directly within your platform.

## Overview

The OCP Wallet Service provides a robust API for creating, accessing, and managing user wallets. By embedding wallet functionalities, you can offer a seamless experience for your users, allowing them to:

*   View their current balance.
*   Initiate payments and transfers.
*   Receive funds.

## Integration Steps

1.  **Client-Side Implementation:**
    *   Utilize the OCP SDK's client-side libraries (if available) or make direct API calls to the Wallet Service from your frontend.
    *   Ensure secure communication (HTTPS) between your application and the OCP API.

2.  **User Authentication:**
    *   Implement a secure authentication mechanism for your users. Each wallet operation should be tied to a verified user.
    *   Consider using OAuth 2.0 or similar protocols for authenticating users with the OCP API.

3.  **Wallet Creation and Management:**
    *   Provide functionality for users to create new wallets. This typically involves a `POST /api/v1/wallet` API call.
    *   Allow users to view their wallet details (`GET /api/v1/wallet/:walletId`) and balance (`GET /api/v1/wallet/:walletId/balance`).

4.  **Transaction Processing:**
    *   Integrate with the OCP Wallet Service for initiating transactions (e.g., `POST /api/v1/wallet/:walletId/deduct-funds`, `POST /api/v1/wallet/transfer`).
    *   Ensure proper error handling and feedback mechanisms for users during transactions.

## Example (Detailed)

Here's a detailed example of how you might integrate the OCP Wallet Service into a backend application. This example uses `axios` for making HTTP requests, which you would typically install via `npm install axios`.

```javascript
const axios = require('axios');

const OCP_API_BASE_URL = 'http://localhost:3000'; // Replace with your OCP API endpoint

class OCPWalletIntegration {
  constructor(apiBaseUrl) {
    this.apiBaseUrl = apiBaseUrl;
  }

  async createWallet(userId, initialBalance = 0) {
    try {
      const response = await axios.post(`${this.apiBaseUrl}/api/v1/wallet`, { userId, initialBalance });
      return response.data; // Returns the new wallet object: { id: ..., userId: ..., balance: ... }
    } catch (error) {
      console.error('Error creating wallet:', error.response ? error.response.data : error.message);
      throw error;
    }
  }

  async getWalletDetails(walletId) {
    try {
      const response = await axios.get(`${this.apiBaseUrl}/api/v1/wallet/${walletId}`);
      return response.data; // Returns the wallet object
    } catch (error) {
      console.error(`Error getting wallet ${walletId} details:`, error.response ? error.response.data : error.message);
      throw error;
    }
  }

  async getWalletBalance(walletId) {
    try {
      const response = await axios.get(`${this.apiBaseUrl}/api/v1/wallet/${walletId}/balance`);
      return response.data.balance; // Returns the balance amount
    } catch (error) {
      console.error(`Error getting wallet ${walletId} balance:`, error.response ? error.response.data : error.message);
      throw error;
    }
  }

  async addFunds(walletId, amount, paymentToken, description = 'Add funds') {
    try {
      const response = await axios.post(`${this.apiBaseUrl}/api/v1/wallet/${walletId}/add-funds`, { amount, paymentToken, description });
      return response.data; // Returns transaction details
    } catch (error) {
      console.error(`Error adding funds to wallet ${walletId}:`, error.response ? error.response.data : error.message);
      throw error;
    }
  }

  async deductFunds(walletId, amount, description = 'Deduct funds') {
    try {
      const response = await axios.post(`${this.apiBaseUrl}/api/v1/wallet/${walletId}/deduct-funds`, { amount, description });
      return response.data; // Returns transaction details
    } catch (error) {
      console.error(`Error deducting funds from wallet ${walletId}:`, error.response ? error.response.data : error.message);
      throw error;
    }
  }

  async transferFunds(fromWalletId, toWalletId, amount, description = 'Wallet transfer') {
    try {
      const response = await axios.post(`${this.apiBaseUrl}/api/v1/wallet/transfer`, { fromWalletId, toWalletId, amount, description });
      return response.data; // Returns transfer details
    } catch (error) {
      console.error(`Error transferring funds from ${fromWalletId} to ${toWalletId}:`, error.response ? error.response.data : error.message);
      throw error;
    }
  }
}

async function runWalletExample() {
  const ocpWallet = new OCPWalletIntegration(OCP_API_BASE_URL);
  const userId1 = `user_${Date.now()}_1`;
  const userId2 = `user_${Date.now()}_2`;

  try {
    // 1. Create a new wallet for user 1
    const wallet1 = await ocpWallet.createWallet(userId1, 1000);
    console.log('Created Wallet 1:', wallet1);

    // 2. Create a new wallet for user 2
    const wallet2 = await ocpWallet.createWallet(userId2, 500);
    console.log('Created Wallet 2:', wallet2);

    // 3. Get wallet 1 balance
    let balance1 = await ocpWallet.getWalletBalance(wallet1.id);
    console.log(`Wallet 1 Balance: ${balance1}`); // Expected: 1000

    // 4. Add funds to wallet 1 (requires a valid payment token in a real scenario)
    // For this example, we'll assume a mock payment token
    await ocpWallet.addFunds(wallet1.id, 200, "mock_payment_token", "Top-up for testing");
    balance1 = await ocpWallet.getWalletBalance(wallet1.id);
    console.log(`Wallet 1 Balance after add funds: ${balance1}`); // Expected: 1200

    // 5. Deduct funds from wallet 1
    await ocpWallet.deductFunds(wallet1.id, 150, "Purchase order X");
    balance1 = await ocpWallet.getWalletBalance(wallet1.id);
    console.log(`Wallet 1 Balance after deduct funds: ${balance1}`); // Expected: 1050

    // 6. Transfer funds from wallet 1 to wallet 2
    await ocpWallet.transferFunds(wallet1.id, wallet2.id, 250, "P2P transfer");
    balance1 = await ocpWallet.getWalletBalance(wallet1.id);
    let balance2 = await ocpWallet.getWalletBalance(wallet2.id);
    console.log(`Wallet 1 Balance after transfer: ${balance1}`); // Expected: 800
    console.log(`Wallet 2 Balance after transfer: ${balance2}`); // Expected: 750

  } catch (error) {
    console.error('Wallet integration example failed:', error);
  }
}

// To run this example, ensure your OCP API server is running and then call:
// runWalletExample();
```

To make the above example runnable, you would also need to ensure `axios` is installed (`npm install axios`) and your OCP server is running.
