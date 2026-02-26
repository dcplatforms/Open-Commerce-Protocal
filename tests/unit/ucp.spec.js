const UCPService = require('../../src/services/ucp');

describe('UCPService', () => {
  let ucpService;
  let mockA2AService;

  beforeEach(() => {
    mockA2AService = {
      executeTransfer: jest.fn(),
    };
    ucpService = new UCPService(mockA2AService);
  });

  describe('processPayload', () => {
    it('should process a valid transfer intent', async () => {
      const payload = {
        ver: '1.0',
        intent: 'transfer',
        sender: { agent_id: 'agentA' },
        recipient: { agent_id: 'agentB' },
        amount: { value: 100 }
      };
      mockA2AService.executeTransfer.mockResolvedValue({ success: true, transferId: 'tx123' });

      const result = await ucpService.processPayload(payload);

      expect(mockA2AService.executeTransfer).toHaveBeenCalledWith(expect.objectContaining({
        fromAgentId: 'agentA',
        toAgentId: 'agentB',
        amount: 100,
        ucpPayload: expect.objectContaining({
            ver: '1.0',
            intent: 'transfer'
        })
      }));
      expect(result.success).toBe(true);
    });

    it('should throw validation error for missing version', async () => {
      const payload = { intent: 'transfer' };
      await expect(ucpService.processPayload(payload)).rejects.toThrow(/UCP Intent validation failed/);
    });
  });
});
