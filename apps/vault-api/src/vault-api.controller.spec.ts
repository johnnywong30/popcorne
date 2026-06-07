import { Test, TestingModule } from '@nestjs/testing';
import { VaultApiController } from './vault-api.controller';
import { VaultApiService } from './vault-api.service';

describe('VaultApiController', () => {
  let vaultApiController: VaultApiController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [VaultApiController],
      providers: [VaultApiService],
    }).compile();

    vaultApiController = app.get<VaultApiController>(VaultApiController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(vaultApiController.getHello()).toBe('Hello World!');
    });
  });
});
