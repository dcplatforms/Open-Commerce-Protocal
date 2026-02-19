/**
 * Agent Routes
 *
 * Defines API endpoints for Agent-related operations.
 */

const express = require('express');

module.exports = (agentService) => {
  const router = express.Router();

  /**
   * GET /api/v1/agents
   * Get all registered agents
   */
  router.get('/', async (req, res, next) => {
    try {
      const agents = await agentService.getAllAgents();
      res.json(agents);
    } catch (error) {
      next(error);
    }
  });

  /**
   * POST /api/v1/agents
   * Register a new agent
   * Body: { name: string, policy?: { spendingLimit?: number, authorizedCounterparties?: string[] } }
   */
  router.post('/', async (req, res, next) => {
    try {
      const { name, policy } = req.body;
      if (!name) {
        return res.status(400).json({ error: 'Agent name is required' });
      }
      const newAgent = await agentService.registerAgent({ name, policy });
      res.status(201).json(newAgent);
    } catch (error) {
      next(error);
    }
  });

  /**
   * GET /api/v1/agents/:agentId
   * Get an agent by ID
   */
  router.get('/:agentId', async (req, res, next) => {
    try {
      const agent = await agentService.getAgent(req.params.agentId);
      res.json(agent);
    } catch (error) {
      next(error);
    }
  });

  /**
   * PUT /api/v1/agents/:agentId/policy
   * Update an agent's policy
   * Body: { spendingLimit?: number, authorizedCounterparties?: string[] }
   */
  router.put('/:agentId/policy', async (req, res, next) => {
    try {
      const newPolicy = req.body;
      const updatedAgent = await agentService.updateAgentPolicy(req.params.agentId, newPolicy);
      res.json(updatedAgent);
    } catch (error) {
      next(error);
    }
  });

  /**
   * POST /api/v1/agents/transfer
   * Perform an Agent-to-Agent (A2A) transfer (conceptual)
   * Body: { fromAgentId: string, toAgentId: string, amount: number, currency: string }
   */
  router.post('/transfer', async (req, res, next) => {
    try {
      const { fromAgentId, toAgentId, amount, currency } = req.body;
      if (!fromAgentId || !toAgentId || !amount || !currency) {
        return res.status(400).json({ error: 'Missing required transfer parameters' });
      }
      const result = await agentService.performA2ATransfer({ fromAgentId, toAgentId, amount, currency });
      res.json(result);
    } catch (error) {
      next(error);
    }
  });

  return router;
};
