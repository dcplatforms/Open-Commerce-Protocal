# Vault Service API

The Vault Service (implemented by `TokenizationService`) provides secure tokenization, cryptographic signing, and secure storage of sensitive credentials within the Open Commerce Protocol. It ensures that sensitive data, such as private keys and payment information, is handled in a PCI-compliant manner using Basis Theory or compatible providers.

## Endpoints

### `POST /api/v1/tokens/tokenize/card`

Tokenizes sensitive card data, returning a secure token that can be used in place of the original data.

#### Request

`POST /api/v1/tokens/tokenize/card`

```json
{
  "number": "4111222233334444",
  "exp_month": "12",
  "exp_year": "2028",
  "cvc": "123"
}
```

#### Response

`201 Created`

```json
{
  "id": "token_card_xxxxxxxxxxxx",
  "type": "card",
  "last4": "4444",
  "brand": "visa",
  "exp_month": "12",
  "exp_year": "2028",
  "fingerprint": "fingerprint_value",
  "created_at": "2026-02-19T00:00:00Z"
}
```

### `POST /api/v1/tokens/tokenize/apple-pay`

Tokenizes Apple Pay payment data.

#### Request

`POST /api/v1/tokens/tokenize/apple-pay`

```json
{
  "paymentData": {
    "data": "encrypted_data_string",
    "signature": "signature_string",
    "header": {
      "ephemeralPublicKey": "key_string",
      "publicKeyHash": "hash_string",
      "transactionId": "transaction_id_string"
    },
    "version": "EC_v1"
  }
}
```

#### Response

`201 Created`

```json
{
  "id": "token_applepay_xxxxxxxxxxxx",
  "type": "applepay",
  "payment_network": "visa",
  "transaction_id": "transaction_id_string",
  "created_at": "2026-02-19T00:00:00Z"
}
```

### `POST /api/v1/tokens/tokenize/google-pay`

Tokenizes Google Pay payment data.

#### Request

`POST /api/v1/tokens/tokenize/google-pay`

```json
{
  "paymentData": {
    "protocolVersion": "EC_v2",
    "signedMessage": "signed_message_string",
    "signature": "signature_string"
  }
}
```

#### Response

`201 Created`

```json
{
  "id": "token_googlepay_xxxxxxxxxxxx",
  "type": "googlepay",
  "payment_network": "VISA",
  "created_at": "2026-02-19T00:00:00Z"
}
```

### `POST /api/v1/tokens/tokenize/secret`

Creates a token for a generic secret (e.g., a private key).

#### Request

`POST /api/v1/tokens/tokenize/secret`

```json
{
  "secret": "my_super_secret_private_key_string",
  "metadata": {
    "purpose": "blockchain_signing"
  }
}
```

#### Response

`201 Created`

```json
{
  "id": "token_secret_xxxxxxxxxxxx",
  "type": "secret",
  "created_at": "2026-02-19T00:00:00Z",
  "metadata": {
    "type": "secret_key",
    "purpose": "blockchain_signing"
  }
}
```

### `GET /api/v1/tokens/:tokenId`

Retrieves a token by ID.

#### Request

`GET /api/v1/tokens/token_card_xxxxxxxxxxxx`

#### Parameters

*   `tokenId` (string): The unique identifier of the token.

#### Response

`200 OK`

```json
{
  "id": "token_card_xxxxxxxxxxxx",
  "type": "card",
  "data": {
    "last4": "4444",
    "brand": "visa"
  },
  "created_at": "2026-02-19T00:00:00Z"
}
```

### `POST /api/v1/tokens/:tokenId/sign`

Signs data using a stored token (simulates secure reactor/enclave).

#### Request

`POST /api/v1/tokens/token_secret_xxxxxxxxxxxx/sign`

```json
{
  "dataToSign": "0xdeadbeef"
}
```

#### Parameters

*   `tokenId` (string): The ID of the token containing the key to sign with.

#### Response

`200 OK`

```json
{
  "signature": "0x_mock_signature_of_0xdeadbeef_with_token_secret_xxxxxxxxxxxx"
}
```
