![Open Commerce Initiative](assets/open-wallet.png)

# Open Commerce Initiative (OCI): The Standard for Agentic Commerce

**Open Commerce Protocol (OCP)** is the foundational SDK powering the **Open Commerce Initiative (OCI)**. It provides a robust, secure, and scalable framework for building the next generation of financial applications, specializing in **Agentic Commerce** and **Web3-integrated wallets**.

The Open Commerce Initiative (OCI) is an open-source initiative designed to enable seamless, autonomous commerce between AI agents, while providing a robust payment infrastructure for traditional businesses. By unifying Agent-to-Agent (A2A) payments, Universal Commerce Protocol (UCP) transactions, and a flexible wallet architecture, OCI empowers developers to build the next generation of financial applications.

OCI is powered by the **Open Commerce Protocol (OCP)**, which shifts the paradigm from simple payment processing to a comprehensive commerce enablement layer. It allows businesses to define custom agents with specific spending limits and authorized counterparties, facilitating trustless automation in procurement, negotiation, and settlement.

### 🤖 Agentic Commerce
*   **Agent-to-Agent (A2A) Transfers**: Enable instant, policy-compliant settlements between autonomous AI agents.
*   **Universal Commerce Protocol (UCP)**: A standardized JSON schema for communicating commerce intents across platforms.
*   **Policy Enforcement**: Define granular spending limits and authorized counterparty lists for every agent.

### 🔐 Web3 & Secure Vaulting
*   **Secure Enclaves**: Sign arbitrary data and blockchain transactions without exposing private keys.
*   **Basis Theory Integration**: Leverage PCI-compliant tokenization for secure storage of sensitive credentials and private keys.
*   **Multi-Chain Support**: Architected to handle diverse blockchain ecosystems and Web3 identities.

### 💳 Tokenized Wallet Infrastructure
*   **PCI-Compliant Tokenization**: No raw card data ever touches your servers.
*   **Mobile-First Integration**: Native support for Apple Pay and Google Pay.
*   **Atomic Balance Management**: Real-time accuracy with built-in race condition prevention.
*   **Micro-transactions**: Enable 0-fee internal ledger transfers, making micro-payments profitable.

---

## 📈 Business Strategy

For a deep dive into the economic advantages of OCP, including revenue optimization, margin improvement, and the strategic imperative for the agent economy, see the [Business Strategy Documentation](docs/BUSINESS_STRATEGY.md).

---

## 🛠️ Quick Start

### Installation

```bash
# Using npm
npm install @open-commerce-protocol/core

* The Opportunity: The psychology of spending from a pre-loaded balance is fundamentally different. Users exhibit lower price sensitivity and a higher propensity for impulse purchases, leading to a 30-40% higher transaction frequency and a 25% higher average order value (AOV).
* The Open Wallet Solution: Implement strategies like deposit bonuses (e.g., "Add $50, get $5 free"), tiered rewards for larger deposits, and auto-reload functionality to encourage users to maintain higher balances and spend more freely.
* Real-World Impact: A platform can directly influence spending habits, turning a simple payment method into a tool for increasing revenue per customer.

Capture Stranded Revenue

* The Problem: Traditional systems lose an estimated 5-15% of revenue to declined cards due to expirations, insufficient funds, or fraud alerts. This "involuntary churn" is a silent revenue killer, especially for subscription models.
* The Open Wallet Solution: The wallet acts as a buffer. Even if a user's underlying card is declined, their service continues uninterrupted as long as their wallet has a balance. The system can be configured to automatically top-up the balance when it falls below a set threshold, virtually eliminating failed payments.
* Real-World Impact: This strategy reduces involuntary churn by 60-80%, preserving valuable customer relationships and ensuring revenue continuity.

// Automatically reload wallet before balance depletes
{
  "autoTopUp": {
    "enabled": true,
    "threshold": 10,  // Reload when balance < $10
    "amount": 50      // Add $50 each time
  }
}


Enable Profitable Micro-transactions

* The Problem: A $1.00 transaction in a traditional model can incur a $0.33 fee, representing a 33% cost that makes micro-transactions unprofitable.
* The Open Wallet Solution: A $1.00 transaction processed from a wallet balance has a 0% transaction cost, making it 100% profitable. This opens the door to new business models.
* Real-World Impact: Businesses can profitably implement use cases like content paywalls (0.25 articles), in-game virtual goods (0.99 items), micro-tipping, donations, and pay-per-use API calls.

Generate Float Income

* The Opportunity: The aggregate of all customer wallet balances creates a significant cash reserve (the "float") that can be leveraged.
* The Open Wallet Solution: By placing these aggregated funds in an interest-bearing account, a business can generate passive income.
* Real-World Impact: A platform with 50,000 users holding an average balance of $25 creates a total float of 1,250,000. At a 4% APY, this generates **50,000 in annual float income**. (Compliance Note: Proper licensing and segregation of customer funds must be ensured in accordance with local regulations.)

Reduce Fraud and Chargebacks

* The Problem: Chargebacks are costly, not just in lost revenue but also in administrative fees (15-100 per incident) and potential penalties from payment processors.
* The Open Wallet Solution: Pre-funded accounts virtually eliminate the risk of chargebacks on wallet-based transactions. Since the funds are already secured, the primary vector for friendly fraud is closed, reducing fraud-related losses by 80-95%.
* Real-World Impact: An e-commerce business with a 1% chargeback rate on $1M in monthly revenue can reduce its chargeback-related costs from $25,000/month to just 1,250/month, resulting in **23,750 in monthly savings**.

Optimize Conversion Rates

* The Problem: A lengthy or complex checkout process is a primary driver of cart abandonment. Requiring users to repeatedly enter payment information creates significant friction.
* The Open Wallet Solution: A one-click payment flow using the wallet balance dramatically reduces friction. This mobile-optimized experience is proven to boost key metrics across the board.
* Real-World Impact: Industry A/B tests show that wallet systems can increase checkout completion by 31% (from 68% to 89%) and average session value by 30%, leading to an overall 70% revenue lift.

Implement Targeted Promotions

* The Opportunity: A direct, low-cost channel to incentivize customer behavior.
* The Open Wallet Solution: The system enables the creation of dynamic, targeted promotions with zero processing overhead. Businesses can offer instant bonuses on deposits, loyalty rewards, referral incentives, and wallet-exclusive pricing.
* Real-World Impact: A holiday promotion can be configured to automatically add a 10% bonus for deposits over $50, directly encouraging larger top-ups and driving immediate revenue.

{
  "promotion": "holiday2024",
  "bonus": {
    "type": "percentage",
    "value": 10,
    "minDeposit": 50,
    "maxBonus": 25
  },
  "result": "Deposit $100, receive $110 in wallet"
}


Streamline Marketplace Economics

* The Problem: In two-sided marketplaces, traditional payment models introduce delays (5-7 days for bank transfers) and high fees that cut into the earnings of sellers or contractors.
* The Open Wallet Solution: The platform can facilitate instant, fee-free wallet-to-wallet transfers between participants. This eliminates hold periods and dramatically reduces costs for both the platform and its users.
* Real-World Impact: On a freelance platform, the wallet model allows a contractor to receive their payment instantly and earn 3.4% more on a $100 job, while the platform simultaneously saves on processing costs.

Build Customer Lock-In

* The Opportunity: Transforming a transactional relationship into a long-term, loyal one.
* The Open Wallet Solution: Unredeemed balances create a powerful switching cost. Combined with auto-reload features that build behavioral habits and wallet-exclusive perks, the system fosters deep customer retention.
* Real-World Impact: Industry benchmarks show that wallet users have a 72% 90-day retention rate compared to just 35% for non-wallet users. This translates directly to a 236% increase in customer lifetime value, from $247 to $831.

These strategies collectively demonstrate that the Open Wallet system is more than a payment utility; it is a comprehensive platform for optimizing revenue, enhancing user engagement, and building a more resilient and profitable business. The next section will examine the specific features and capabilities that power these outcomes.

3.0 System Features and Core Capabilities

A robust and versatile feature set is essential for serving the diverse needs of all stakeholders, from end-users making payments to AI agents executing autonomous transactions. The Open Commerce Initiative (OCI) platform, leveraging the Open Commerce Protocol (OCP) SDK, is architected with a comprehensive suite of functionalities designed to provide security, flexibility, and a seamless developer experience.

Agentic Commerce & Web3 Capabilities

* **Agent-to-Agent (A2A) Transfers**: Instant, policy-compliant settlement between AI agents.
* **Universal Commerce Protocol (UCP)**: A standardized JSON schema for communicating commerce intents across agents and platforms.
* **Web3 Vaulting**: Secure generation and storage of blockchain private keys using PCI-compliant tokenization (Basis Theory).
* **Simulated Enclave Signing**: Sign arbitrary data and transactions securely without ever exposing private keys.

Core Wallet Functionality

* **Secure Tokenization**: Employs PCI DSS compliant payment tokenization, ensuring that no raw card data is ever stored on the system.
* **Multi-Currency Support**: Capable of handling transactions in multiple currencies with built-in support for automatic conversion.
* **Transaction Management**: Provides a complete transaction lifecycle, tracking payments through pending, completed, and failed states for full accountability.
* **Balance Management**: Guarantees real-time, accurate balance tracking using atomic operations to prevent inconsistencies and race conditions.
* **Audit Trail**: Maintains a comprehensive and immutable history of all transactions (ledger and on-chain) and wallet activities.

Mobile Payment Integrations

The system is designed for a mobile-first world, with native integrations for the most popular payment platforms.

* **Apple Pay Integration**: Offers native support for seamless and secure payments within iOS applications.
* **Google Pay Integration**: Provides native support for one-click payments within Android applications.
* **Biometric Authentication**: Supports modern security standards, including Touch ID, Face ID, and fingerprint authentication.

Administrative and Management Tools

A powerful suite of back-office tools enables efficient business operations and oversight.

* **Dashboard Analytics**: Delivers real-time statistics on wallet activity, transaction metrics, total balances, and user engagement.
* **Refund Processing**: Features a complete, streamlined workflow for handling refunds.
* **Customer Management**: Tools for managing wallet status and viewing transaction histories.
* **Role-Based Access Control**: Granular permissions for administrative users.

Developer Experience Enhancements

The platform is built to be developer-friendly, accelerating integration and reducing time-to-market.

* **RESTful API**: A well-documented, intuitive REST API.
* **SDK Examples**: Includes practical examples in JavaScript, Python, and cURL.
* **Test Mode**: Offers a complete sandbox environment with mock data for A2A and Web3 testing.
* **TypeScript Support**: Full TypeScript definitions for key models (Agent, Wallet, Transaction).

4.0 Technical Architecture and Implementation Pathway

A sound, scalable architecture is critical for ensuring the reliability, security, and future growth. The Open Commerce Initiative (OCI) is built on the Open Commerce Protocol (OCP) SDK, which utilizes a modern, modular design.

System Architecture

OCP follows a modular, service-oriented architecture designed for separation of concerns and independent scalability. Communication between layers is secured via HTTPS/TLS.

Key Components

The architecture is composed of distinct services, each with a dedicated responsibility:

1. **Wallet Service**: Manages the core business logic for all wallet operations.
2. **A2A Service**: Orchestrates compliant transfers between Agents.
3. **UCP Service**: Parses and executes standardized commerce intents.
4. **Web3 Service**: Manages blockchain wallet creation and transaction signing via the Vault.
5. **Tokenization Service**: Manages the secure storage, retrieval, and lifecycle of payment tokens and private keys within the encrypted vault.
6. **Transaction Service**: Oversees the complete lifecycle of a transaction.
7. **Admin Service**: Powers the administrative dashboard.

Implementation and Configuration

Deploying the Open Commerce Initiative (OCI) system is a streamlined process.

Prerequisites:
* Node.js 18+ or Python 3.9+
* MongoDB 6.0+ or PostgreSQL 14+
* An account with a compatible tokenization provider (e.g., Basis Theory)
* Redis (Optional, for caching)

Basic Setup:

# Clone the repository
git clone https://github.com/dcplatforms/Open-Commerce-Protocol.git
cd Open-Commerce-Protocol

# Install dependencies
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

## 🏗️ Architecture

OCP is built on a modular, service-oriented architecture:
1.  **Wallet Service**: Core ledger and balance management.
2.  **Agent Service**: Identity and policy orchestration.
3.  **Vault Service**: Secure tokenization and cryptographic signing.
4.  **UCP Service**: Commerce intent parsing and execution.

Refer to the [Architecture Documentation](docs/ARCHITECTURE.md) for a deep dive.

---

## 🛡️ Security & Compliance

*   **AES-256-GCM Encryption**: All sensitive data is encrypted at rest.
*   **TLS 1.3**: Mandatory encryption for all data in transit.
*   **PCI DSS Ready**: Designed to minimize PCI scope by using vault-based tokenization.
*   **Audit Logging**: Immutable history for all ledger and on-chain activities.

---

## 🤝 Community & Support

*   **Documentation**: [Open Commerce Initiative Documentation Hub](docs/product-hub/index.html)
*   **Contributing**: See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.
*   **Issues**: [GitHub Issues](https://github.com/dcplatforms/Open-Commerce-Protocol/issues)

---

As detailed throughout this proposal, the Open Wallet system provides a comprehensive solution for transforming a company's payment infrastructure, delivering value through direct revenue optimization, robust security, and a superior developer experience.

---

Open Commerce Protocol (OCP) is the underlying SDK of Open Commerce Initiative (OCI). OCP is authored by [Tom Callahan](https://www.linkedin.com/in/tom-cndc/). Join the [OCI community here on Linkedin](https://www.linkedin.com/company/open-commerce-solutions)
