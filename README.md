![Open Commerce Initiative](assets/open-wallet.png)

# Open Commerce Protocol (OCP) SDK

**Open Commerce Protocol (OCP)** is the foundational SDK powering the **Open Commerce Initiative (OCI)**. It provides a robust, secure, and scalable framework for building the next generation of financial applications, specializing in **Agentic Commerce** and **Web3-integrated wallets**.

The OCP SDK shifts the paradigm from simple payment processing to a comprehensive commerce enablement layer, allowing businesses and developers to define autonomous agents with specific spending limits, authorized counterparties, and trustless automation.

## Core Capabilities

### Agentic Commerce
*   **Agent-to-Agent (A2A) Transfers**: Enable instant, policy-compliant settlements between autonomous AI agents.
*   **Universal Commerce Protocol (UCP)**: A standardized JSON schema for communicating commerce intents across platforms.
*   **Policy Enforcement**: Define granular spending limits and authorized counterparty lists for every agent.

### Web3 & Secure Vaulting
*   **Secure Enclaves**: Sign arbitrary data and blockchain transactions without exposing private keys.
*   **Basis Theory Integration**: Leverage PCI-compliant tokenization for secure storage of sensitive credentials and private keys.
*   **Multi-Chain Support**: Architected to handle diverse blockchain ecosystems and Web3 identities.

### Tokenized Wallet Infrastructure
*   **PCI-Compliant Tokenization**: No raw card data ever touches your servers.
*   **Mobile-First Integration**: Native support for Apple Pay and Google Pay.
*   **Atomic Balance Management**: Real-time accuracy with built-in race condition prevention.
*   **Micro-transactions**: Enable 0-fee internal ledger transfers, making micro-payments profitable.

---

## Business Strategy

For a deep dive into the economic advantages of OCP, including revenue optimization, margin improvement, and the strategic imperative for the agent economy, see the [Business Strategy Documentation](docs/BUSINESS_STRATEGY.md).

---

## Quick Start

### Installation

```bash
# Using npm
npm install @open-commerce-protocol/core

# From Source
git clone https://github.com/dcplatforms/Open-Commerce-Protocol.git
npm install
```

### Basic Usage

```javascript
const { OCPClient } = require('@open-commerce-protocol/core');

const ocp = new OCPClient({
  apiKey: process.env.OCP_API_KEY,
  vaultUrl: process.env.VAULT_URL
});

// Create a tokenized commerce agent
const agent = await ocp.agents.create({
  name: 'Procurement-Agent-01',
  limits: { daily: 500, currency: 'USD' }
});

// Execute an Agent-to-Agent payment
const transaction = await ocp.payments.executeA2A({
  from: 'agent_id_1',
  to: 'agent_id_2',
  amount: 25.50,
  intent: 'SERVICE_PAYMENT_UCP'
});
```

---

## Architecture

OCP is built on a modular, service-oriented architecture:
1.  **Wallet Service**: Core ledger and balance management.
2.  **Agent Service**: Identity and policy orchestration.
3.  **Vault Service**: Secure tokenization and cryptographic signing.
4.  **UCP Service**: Commerce intent parsing and execution.

Refer to the [Architecture Documentation](docs/ARCHITECTURE.md) for a deep dive.

---

## Security & Compliance

*   **AES-256-GCM Encryption**: All sensitive data is encrypted at rest.
*   **TLS 1.3**: Mandatory encryption for all data in transit.
*   **PCI DSS Ready**: Designed to minimize PCI scope by using vault-based tokenization.
*   **Audit Logging**: Immutable history for all ledger and on-chain activities.

---

## Community & Support

*   **Documentation**: [Open Commerce Initiative Documentation Hub](docs/product-hub/index.html)
*   **Contributing**: See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.
*   **Issues**: [GitHub Issues](https://github.com/dcplatforms/Open-Commerce-Protocol/issues)

---

Open Commerce Protocol (OCP) is the underlying SDK of Open Commerce Initiative (OCI). OCP is authored by [Tom Callahan](https://www.linkedin.com/in/tom-cndc/). Join the [OCI community here on Linkedin](https://www.linkedin.com/company/open-commerce-solutions)
