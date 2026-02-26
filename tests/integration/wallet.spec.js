const request = require('supertest');
const express = require('express');
const walletRoutes = require('../../src/routes/wallet');
const WalletService = require('../../src/services/wallet');

jest.mock('../../src/services/wallet');
jest.mock('../../src/middleware/auth', () => ({
  authenticate: (req, res, next) => {
    req.user = { id: 'user123' };
    next();
  },
  authorize: () => (req, res, next) => next()
}));

describe('Wallet API', () => {
  let app;
  let mockWalletService;

  beforeEach(() => {
    mockWalletService = new WalletService();
    app = express();
    app.use(express.json());
    app.use('/api/v1/wallet', walletRoutes(mockWalletService));
  });

  describe('POST /api/v1/wallet', () => {
    it('should create a new wallet', async () => {
      const wallet = { id: 'some-id', userId: 'user123' };
      mockWalletService.createWallet.mockResolvedValue(wallet);

      const res = await request(app)
        .post('/api/v1/wallet')
        .send({
          userId: 'user123',
        });

      expect(res.statusCode).toEqual(201);
      expect(res.body.success).toBe(true);
      expect(res.body.data).toEqual(wallet);
    });
  });
});
