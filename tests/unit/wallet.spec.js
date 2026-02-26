const WalletService = require('../../src/services/wallet');
const mongoose = require('mongoose');

describe('WalletService', () => {
  let walletService;
  let mockDb;

  beforeEach(() => {
    mockDb = {
      createWallet: jest.fn(),
      findWalletByUserId: jest.fn(),
      createTransaction: jest.fn(),
    };
    walletService = new WalletService(mockDb);
  });

  describe('createWallet', () => {
    it('should create a new wallet with default values', async () => {
      const walletData = { userId: 'user123' };
      const expectedWallet = {
        ...walletData,
        id: 'some-id',
        currency: 'USD',
        balance: 0,
        status: 'active',
      };
      mockDb.findWalletByUserId.mockResolvedValue(null);
      mockDb.createWallet.mockResolvedValue(expectedWallet);

      const wallet = await walletService.createWallet(walletData);

      expect(mockDb.findWalletByUserId).toHaveBeenCalledWith('user123');
      expect(mockDb.createWallet).toHaveBeenCalledWith(expect.objectContaining({
        userId: 'user123',
        currency: 'USD',
        balance: 0,
      }));
      expect(wallet).toEqual(expectedWallet);
    });
  });
});
