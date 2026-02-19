# UCP Service API

The Universal Commerce Protocol (UCP) Service is responsible for parsing and executing commerce intents. It provides a standardized JSON schema for communicating commerce intents across various platforms, enabling seamless and interoperable transactions.

## Endpoints

### `POST /api/v1/ucp/process-intent`

Processes a UCP-compliant commerce intent.

#### Request

`POST /api/v1/ucp/process-intent`

```json
{
  "protocolVersion": "1.0",
  "intentType": "purchase",
  "data": {
    "items": [
      {
        "productId": "prod-123",
        "quantity": 1,
        "price": {
          "amount": 1000,
          "currency": "USD"
        }
      }
    ],
    "shippingAddress": {
      "street": "123 Main St",
      "city": "Anytown",
      "zip": "12345"
    }
  },
  "agentId": "agent_xxxxxxxxxxxx",
  "walletId": "wallet_yyyyyyyyyyyy"
}
```

#### Response

`200 OK`

```json
{
  "status": "success",
  "transactionId": "ucp_txn_abcdef1234567890",
  "message": "Commerce intent processed successfully.",
  "processedAt": "2026-02-19T00:00:00.000Z",
  "originalIntent": {
    "protocolVersion": "1.0",
    "intentType": "purchase",
    "data": {
      "items": [
        {
          "productId": "prod-123",
          "quantity": 1,
          "price": {
            "amount": 1000,
            "currency": "USD"
          }
        }
      ],
      "shippingAddress": {
        "street": "123 Main St",
        "city": "Anytown",
        "zip": "12345"
      }
    },
    "agentId": "agent_xxxxxxxxxxxx",
    "walletId": "wallet_yyyyyyyyyyyy",
    "timestamp": "2026-02-19T00:00:00.000Z"
  }
}
```

`400 Bad Request` if the UCP intent is invalid.
`500 Internal Server Error` if processing fails.

### `GET /api/v1/ucp/schema`

Retrieves the JSON schema for UCP intents.

#### Request

`GET /api/v1/ucp/schema`

#### Response

`200 OK`

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Universal Commerce Protocol Intent",
  "description": "A standardized message for communicating commerce intents.",
  "type": "object",
  "properties": {
    "protocolVersion": { "type": "string", "description": "Version of the UCP protocol" },
    "intentType": { "type": "string", "enum": ["purchase", "transfer", "request", "offer"], "description": "Type of commerce intent" },
    "data": { "type": "object", "description": "Payload specific to the intentType" },
    "agentId": { "type": "string", "description": "Identifier of the agent initiating the intent" },
    "walletId": { "type": "string", "description": "Optional: Identifier of the wallet involved" },
    "timestamp": { "type": "string", "format": "date-time", "description": "Timestamp of intent creation" }
  },
  "required": ["protocolVersion", "intentType", "data", "agentId"]
}
```
