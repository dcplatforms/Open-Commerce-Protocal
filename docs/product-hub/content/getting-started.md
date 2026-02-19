# Getting Started with OCP

This guide will help you set up and run the Open Commerce Protocol (OCP) SDK.

## Prerequisites

Before you begin, ensure you have the following installed:

*   **Node.js:** Version 18.x or higher. You can download it from [nodejs.org](https://nodejs.org/).
*   **npm:** Node Package Manager, which comes bundled with Node.js.
*   **Git:** For cloning the repository. You can download it from [git-scm.com](https://git-scm.com/).
*   **MongoDB (optional but recommended):** The current `package.json` suggests `mongoose`, indicating MongoDB usage.
*   **PostgreSQL (optional):** The current `package.json` suggests `pg`, indicating PostgreSQL usage.

## Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/dcplatforms/Open-Commerce-Protocol.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd Open-Commerce-Protocol
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

## Configuration

The SDK uses environment variables for configuration (e.g., `TOKENIZATION_API_KEY`, `APPLE_PAY_MERCHANT_ID`, `GOOGLE_PAY_MERCHANT_ID`, database connection strings). You'll typically create a `.env` file in the project root to store these. Refer to the `src/config.js` and service files for expected environment variables.

Example `.env` file:

```
NODE_ENV=development
PORT=3000
HOST=0.0.0.0

# Database
MONGO_URI=mongodb://localhost:27017/ocp_dev
PG_URI=postgresql://user:password@localhost:5432/ocp_dev

# Tokenization Service (Basis Theory)
TOKENIZATION_API_KEY=bt_xxxxxxxxxxxx
TOKENIZATION_BASE_URL=https://api.basistheory.com
TOKENIZATION_TENANT_ID=tenant_xxxxxxxxxxxx

# Apple Pay
APPLE_PAY_MERCHANT_ID=merchant.com.example
# Google Pay
GOOGLE_PAY_MERCHANT_ID=google-merchant-id
```

## Running the SDK

### Development Mode

To start the OCP API server in development mode with `nodemon` (auto-reloads on file changes):

```bash
npm run dev
```

### Production Mode

To start the OCP API server in production mode:

```bash
npm start
```

The server will typically be accessible at `http://localhost:3000` (or the port defined in your configuration).

## Testing

To run the unit and integration tests:

```bash
npm test
```

## Next Steps

*   Explore the [API Reference](api/wallet.md) for detailed information on available endpoints.
*   Learn how to [Embed Wallets](integration/embedding-wallets.md) and [Integrate Agents](integration/integrating-agents.md) into your applications.
*   Understand the [Security](security.md) and [Compliance](compliance.md) aspects of OCP.
