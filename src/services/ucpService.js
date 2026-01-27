/**
 * Universal Commerce Protocol (UCP) Service
 *
 * Parses and executes standardized commerce intents from agentic interactions.
 * This services acts as the translation layer between UCP payloads and
 * system-specific transaction logic.
 */

class UCPService {
    constructor(a2aService) {
        this.a2aService = a2aService;
    }

    /**
     * Process a UCP Payload
     * @param {Object} payload - The raw UCP JSON payload
     */
    async processPayload(payload) {
        this._validatePayload(payload);

        const { intent } = payload;

        switch (intent) {
            case 'transfer':
            case 'payment':
                return this._handleTransfer(payload);
            default:
                throw new Error(`Unsupported UCP intent: ${intent}`);
        }
    }

    /**
     * Validate UCP Schema
     * @private
     */
    _validatePayload(payload) {
        if (!payload.ver) throw new Error('Missing UCP version');
        if (!payload.intent) throw new Error('Missing UCP intent');
        if (!payload.sender?.agent_id) throw new Error('Missing sender agent_id');
        // detailed schema validation would go here (e.g. using Joi or Zod)
    }

    async _handleTransfer(payload) {
        const { sender, recipient, amount } = payload;

        if (!recipient?.agent_id) throw new Error('Missing recipient agent_id for transfer');
        if (!amount?.value) throw new Error('Missing amount value');

        return this.a2aService.executeTransfer({
            fromAgentId: sender.agent_id,
            toAgentId: recipient.agent_id,
            amount: amount.value,
            ucpPayload: payload
        });
    }
}

module.exports = UCPService;
