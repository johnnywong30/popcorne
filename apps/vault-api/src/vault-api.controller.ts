import { Controller, Get } from '@nestjs/common';
import { VaultApiService } from './vault-api.service';

@Controller()
export class VaultApiController {
  constructor(private readonly vaultApiService: VaultApiService) {}

  @Get()
  getHello(): string {
    return this.vaultApiService.getHello();
  }
}
