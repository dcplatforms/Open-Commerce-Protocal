/**
 * UCP Routes
 *
 * Defines API endpoints for Universal Commerce Protocol (UCP) operations.
 */

const express = require('express');

module.exports = (ucpService) => {
  const router = express.Router();

  /**
   * POST /api/v1/ucp/process-intent
   * Process a UCP-compliant commerce intent
   * Body: { protocolVersion: string, intentType: string, data: object, agentId: string, walletId?: string }
   */
  router.post('/process-intent', async (req, res, next) => {
    try {
      const ucpIntent = req.body;
      const result = await ucpService.processIntent(ucpIntent);
      res.json(result);
    } catch (error) {
      next(error);
    }
  });

  /**
   * GET /api/v1/ucp/schema
   * Get the JSON schema for UCP intents
   */
  router.get('/schema', async (req, res, next) => {
    try {
      const schema = ucpService.getUcpSchema();
      res.json(schema);
    } catch (error) {
      next(error);
    }
  });

  return router;
};
