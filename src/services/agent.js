/**
 * Agent Service
 *
 * Manages autonomous agents, their identities, and policy orchestration within the OCP.
 * Facilitates agent-to-agent interactions and ensures policy compliance.
 */

const crypto = require('crypto');

class AgentService {
  constructor(database, config = {}) {
    this.db = database; // Assuming agents will eventually be persisted in a database
    this.agents = new Map(); // In-memory store for now
    this.config = {
      defaultSpendingLimit: config.defaultSpendingLimit || 1000,
      defaultAuthorizedCounterparties: config.defaultAuthorizedCounterparties || []
    };
  }

  /**
   * Register a new agent
   * @param {Object} params - Agent registration parameters
   * @param {string} params.name - Agent's name
   * @param {Object} params.policy - Agent's policy (spending limits, counterparties)
   * @returns {Promise<Object>} Registered agent
   */
  async registerAgent({ name, policy }) {
    const agentId = `agent_${crypto.randomBytes(6).toString('hex')}`;
    const newAgent = {
      id: agentId,
      name: name,
      policy: {
        spendingLimit: policy?.spendingLimit || this.config.defaultSpendingLimit,
        authorizedCounterparties: policy?.authorizedCounterparties || this.config.defaultAuthorizedCounterparties
      },
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.agents.set(agentId, newAgent);
    // In a real scenario, persist to database: await this.db.createAgent(newAgent);
    return newAgent;
  }

  /**
   * Get an agent by ID
   * @param {string} agentId - Agent identifier
   * @returns {Promise<Object>} Agent object
   */
  async getAgent(agentId) {
    const agent = this.agents.get(agentId);
    if (!agent) {
      throw new Error('Agent not found');
    }
    // In a real scenario: await this.db.findAgentById(agentId);
    return agent;
  }

  /**
   * Get all registered agents
   * @returns {Promise<Array>} List of agent objects
   */
  async getAllAgents() {
    return Array.from(this.agents.values());
    // In a real scenario: await this.db.findAllAgents();
  }

  /**
   * Update an agent's policy
   * @param {string} agentId - Agent identifier
   * @param {Object} newPolicy - New policy details
   * @param {number} newPolicy.spendingLimit - New spending limit
   * @param {Array<string>} newPolicy.authorizedCounterparties - New list of authorized counterparties
   * @returns {Promise<Object>} Updated agent object
   */
  async updateAgentPolicy(agentId, newPolicy) {
    const agent = await this.getAgent(agentId); // Will throw if not found
    agent.policy = {
      ...agent.policy,
      ...newPolicy
    };
    agent.updatedAt = new Date();
    this.agents.set(agentId, agent);
    // In a real scenario: await this.db.updateAgent(agentId, { policy: agent.policy, updatedAt: agent.updatedAt });
    return agent;
  }

  /**
   * Perform an Agent-to-Agent (A2A) transfer (conceptual)
   * @param {Object} params - Transfer parameters
   * @param {string} params.fromAgentId - Source agent ID
   * @param {string} params.toAgentId - Destination agent ID
   * @param {number} params.amount - Amount to transfer
   * @param {string} params.currency - Currency code
   * @returns {Promise<Object>} Transfer result
   */
  async performA2ATransfer({ fromAgentId, toAgentId, amount, currency }) {
    // This is a conceptual implementation.
    // In a real system, this would involve interaction with the WalletService,
    // and policy checks for both agents.
    const fromAgent = await this.getAgent(fromAgentId);
    const toAgent = await this.getAgent(toAgentId);

    // Basic policy checks (more complex logic would be here)
    if (amount > fromAgent.policy.spendingLimit) {
      throw new Error(`Transfer amount exceeds spending limit for agent ${fromAgentId}`);
    }
    if (!fromAgent.policy.authorizedCounterparties.includes(toAgentId) &&
        fromAgent.policy.authorizedCounterparties.length > 0) {
      throw new Error(`Agent ${toAgentId} is not an authorized counterparty for ${fromAgentId}`);
    }

    // Simulate transfer success
    return {
      success: true,
      fromAgentId,
      toAgentId,
      amount,
      currency,
      timestamp: new Date()
    };
  }

  /**
   * Handle and format errors
   * @private
   */
  _handleError(method, error) {
    console.error(`AgentService.${method} error:`, error);
    return error instanceof Error ? error : new Error(error);
  }
}

module.exports = AgentService;
