# Wallet Service API

The Wallet Service manages the core ledger, balances, and transaction history for all wallets within the Open Commerce Protocol.

## Endpoints

### `GET /api/v1/wallet`

Retrieves a list of all wallets.

#### Request

`GET /api/v1/wallet`

#### Response

`200 OK`

```json
[
  {
    "id": "wallet_xxxxxxxxxxxx",
    "userId": "user_id_123",
    "balance": 100,
    "currency": "USD",
    "status": "active",
    "createdAt": "2026-02-19T00:00:00Z",
    "updatedAt": "2026-02-19T00:00:00Z"
  }
]
```

### `POST /api/v1/wallet`

Creates a new wallet.

#### Request

`POST /api/v1/wallet`

```json
{
  "userId": "user_id_456",
  "currency": "USD",
  "initialBalance": 0
}
```

#### Response

`201 Created`

```json
{
  "id": "wallet_yyyyyyyyyyyy",
  "userId": "user_id_456",
  "balance": 0,
  "currency": "USD",
  "status": "active",
  "createdAt": "2026-02-19T00:00:00Z",
  "updatedAt": "2026-02-19T00:00:00Z"
}
```

### `GET /api/v1/wallet/:walletId`

Retrieves a single wallet by its ID.

#### Request

`GET /api/v1/wallet/wallet_xxxxxxxxxxxx`

#### Parameters

*   `walletId` (string): The unique identifier of the wallet.

#### Response

`200 OK`

```json
{
  "id": "wallet_xxxxxxxxxxxx",
  "userId": "user_id_123",
  "balance": 100,
  "currency": "USD",
  "status": "active",
  "createdAt": "2026-02-19T00:00:00Z",
  "updatedAt": "2026-02-19T00:00:00Z"
}
```

`404 Not Found` if the wallet does not exist.

### `GET /api/v1/wallet/:walletId/balance`

Retrieves the current balance of a specific wallet.

#### Request

`GET /api/v1/wallet/wallet_xxxxxxxxxxxx/balance`

#### Parameters

*   `walletId` (string): The unique identifier of the wallet.

#### Response

`200 OK`

```json
{
  "balance": 100
}
```

`404 Not Found` if the wallet does not exist.

### `POST /api/v1/wallet/:walletId/add-funds`

Adds funds to a wallet.

#### Request

`POST /api/v1/wallet/wallet_xxxxxxxxxxxx/add-funds`

```json
{
  "amount": 50,
  "paymentToken": "tok_1234567890abcdef",
  "description": "Top-up from card"
}
```

#### Parameters

*   `walletId` (string): The unique identifier of the wallet.

#### Response

`200 OK`

```json
{
  "transactionId": "txn_fedcba0987654321",
  "amount": 50,
  "newBalance": 150,
  "status": "completed"
}
```

### `POST /api/v1/wallet/:walletId/deduct-funds`

Deducts funds from a wallet.

#### Request

`POST /api/v1/wallet/wallet_xxxxxxxxxxxx/deduct-funds`

```json
{
  "amount": 25,
  "description": "Payment for order #9876"
}
```

#### Parameters

*   `walletId` (string): The unique identifier of the wallet.

#### Response

`200 OK`

```json
{
  "transactionId": "txn_abcdef1234567890",
  "amount": -25,
  "newBalance": 125,
  "status": "completed"
}
```

### `POST /api/v1/wallet/transfer`

Transfers funds between wallets.

#### Request

`POST /api/v1/wallet/transfer`

```json
{
  "fromWalletId": "wallet_xxxxxxxxxxxx",
  "toWalletId": "wallet_zzzzzzzzzzzz",
  "amount": 75,
  "description": "P2P Transfer"
}
```

#### Response

`200 OK`

```json
{
  "transferId": "transfer_qwertyuiopasdfghjkl",
  "fromWalletId": "wallet_xxxxxxxxxxxx",
  "toWalletId": "wallet_zzzzzzzzzzzz",
  "amount": 75,
  "debitTransactionId": "txn_abcdef1234567890",
  "creditTransactionId": "txn_fedcba0987654321",
  "status": "completed"
}
```

### `GET /api/v1/wallet/:walletId/transactions`

Retrieves transaction history for a wallet.

#### Request

`GET /api/v1/wallet/wallet_xxxxxxxxxxxx/transactions?page=1&limit=10`

#### Parameters

*   `walletId` (string): The unique identifier of the wallet.
*   `page` (number, optional): Page number for pagination (default: 1).
*   `limit` (number, optional): Number of transactions per page (default: 20).

#### Response

`200 OK`

```json
{
  "transactions": [
    {
      "id": "txn_abcdef1234567890",
      "walletId": "wallet_xxxxxxxxxxxx",
      "type": "debit",
      "amount": -25,
      "description": "Payment for order #9876",
      "status": "completed",
      "createdAt": "2026-02-19T00:00:00Z"
    },
    {
      "id": "txn_fedcba0987654321",
      "walletId": "wallet_xxxxxxxxxxxx",
      "type": "credit",
      "amount": 50,
      "description": "Top-up from card",
      "status": "completed",
      "createdAt": "2026-02-19T00:00:00Z"
    }
  ],
  "total": 2,
  "page": 1,
  "limit": 10
}
```

### `PUT /api/v1/wallet/:walletId/status`

Updates the status of a wallet.

#### Request

`PUT /api/v1/wallet/wallet_xxxxxxxxxxxx/status`

```json
{
  "status": "suspended"
}
```

#### Parameters

*   `walletId` (string): The unique identifier of the wallet.

#### Response

`200 OK`

```json
{
  "id": "wallet_xxxxxxxxxxxx",
  "userId": "user_id_123",
  "balance": 100,
  "currency": "USD",
  "status": "suspended",
  "createdAt": "2026-02-19T00:00:00Z",
  "updatedAt": "2026-02-19T00:00:00Z"
}
```

### `GET /api/v1/wallet/:walletId/stats`

Retrieves statistics for a wallet.

#### Request

`GET /api/v1/wallet/wallet_xxxxxxxxxxxx/stats`

#### Parameters

*   `walletId` (string): The unique identifier of the wallet.

#### Response

`200 OK`

```json
{
  "walletId": "wallet_xxxxxxxxxxxx",
  "currentBalance": 100,
  "currency": "USD",
  "totalCredits": 500,
  "totalDebits": -400,
  "transactionCount": 5,
  "averageTransaction": 20,
  "lastTransaction": "2026-02-19T00:00:00Z"
}
```
