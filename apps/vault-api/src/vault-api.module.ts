import { Module } from '@nestjs/common';
import { VaultApiController } from './vault-api.controller';
import { VaultApiService } from './vault-api.service';

@Module({
  imports: [],
  controllers: [VaultApiController],
  providers: [VaultApiService],
})
export class VaultApiModule {}
