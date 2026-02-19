# Integrating Agents into Your Application

Integrating autonomous agents into your application using OCP enables advanced functionalities like automated payments, policy-driven transactions, and seamless interactions within the Open Commerce Initiative.

## Overview

OCP's Agent Service allows you to define, register, and manage intelligent agents that can perform commerce-related tasks based on predefined policies. These agents can represent individual users, businesses, or specialized bots.

## Integration Steps

1.  **Agent Definition:**
    *   Clearly define the role and responsibilities of your agent. What tasks will it perform? What are its spending limits? Who can it transact with?

2.  **Agent Registration:**
    *   Use the `POST /api/v1/agents` endpoint to register your agent with the OCP Agent Service. Provide its name and initial policy.

3.  **Policy Management:**
    *   Dynamically update an agent's policy (e.g., spending limits, authorized counterparties) using the `PUT /api/v1/agents/:agentId/policy` endpoint as needed.

4.  **Agent-to-Agent (A2A) Interactions:**
    *   Implement logic for agents to initiate and receive payments or data transfers using the OCP's A2A transfer mechanisms. This often involves orchestrating interactions between the Agent Service and Wallet Service. Use `POST /api/v1/agents/transfer` for this.

5.  **UCP Intent Processing:**
    *   If your agent needs to process Universal Commerce Protocol (UCP) intents, integrate with the UCP Service. Agents can generate or consume UCP intents to standardize commerce communications.

## Example (Detailed)

Here's a detailed example of how you might integrate the OCP Agent Service into your application using `axios` for making HTTP requests.

```javascript
const axios = require('axios');

const OCP_API_BASE_URL = 'http://localhost:3000'; // Replace with your OCP API endpoint

class OCPAgentIntegration {
  constructor(apiBaseUrl) {
    this.apiBaseUrl = apiBaseUrl;
  }

  async registerAgent(name, policy = {}) {
    try {
      const response = await axios.post(`${this.apiBaseUrl}/api/v1/agents`, { name, policy });
      return response.data; // Returns the new agent object: { id: ..., name: ..., policy: ... }
    } catch (error) {
      console.error('Error registering agent:', error.response ? error.response.data : error.message);
      throw error;
    }
  }

  async getAgentDetails(agentId) {
    try {
      const response = await axios.get(`${this.apiBaseUrl}/api/v1/agents/${agentId}`);
      return response.data; // Returns the agent object
    } catch (error) {
      console.error(`Error getting agent ${agentId} details:`, error.response ? error.response.data : error.message);
      throw error;
    }
  }

  async updateAgentPolicy(agentId, newPolicy) {
    try {
      const response = await axios.put(`${this.apiBaseUrl}/api/v1/agents/${agentId}/policy`, newPolicy);
      return response.data; // Returns the updated agent object
    } catch (error) {
      console.error(`Error updating policy for agent ${agentId}:`, error.response ? error.response.data : error.message);
      throw error;
    }
  }

  async performA2ATransfer(fromAgentId, toAgentId, amount, currency) {
    try {
      const response = await axios.post(`${this.apiBaseUrl}/api/v1/agents/transfer`, { fromAgentId, toAgentId, amount, currency });
      return response.data; // Returns transfer result
    } catch (error) {
      console.error(`Error performing A2A transfer:`, error.response ? error.response.data : error.message);
      throw error;
    }
  }
}

async function runAgentExample() {
  const ocpAgent = new OCPAgentIntegration(OCP_API_BASE_URL);

  try {
    // 1. Register a new agent
    const initialPolicy = {
      spendingLimit: 500,
      authorizedCounterparties: []
    };
    const newAgent1 = await ocpAgent.registerAgent('FundingAgent', initialPolicy);
    console.log('Registered Agent 1:', newAgent1);

    // 2. Register another agent
    const newAgent2 = await ocpAgent.registerAgent('RecipientAgent', {});
    console.log('Registered Agent 2:', newAgent2);

    // 3. Get agent details
    const agentDetails1 = await ocpAgent.getAgentDetails(newAgent1.id);
    console.log('Agent 1 Details:', agentDetails1);

    // 4. Update agent 1's policy to allow transfer to agent 2
    const updatedPolicy = {
      spendingLimit: 1000,
      authorizedCounterparties: [newAgent2.id]
    };
    const updatedAgent1 = await ocpAgent.updateAgentPolicy(newAgent1.id, updatedPolicy);
    console.log('Agent 1 Policy Updated:', updatedAgent1);

    // 5. Perform an A2A transfer (conceptual - requires Wallet Service integration for actual funds movement)
    const transferResult = await ocpAgent.performA2ATransfer(newAgent1.id, newAgent2.id, 100, 'USD');
    console.log('A2A Transfer Result:', transferResult);

  } catch (error) {
    console.error('Agent integration example failed:', error);
  }
}

// To run this example, ensure your OCP API server is running and then call:
// runAgentExample();
```

To make the above example runnable, you would also need to ensure `axios` is installed (`npm install axios`) and your OCP server is running.