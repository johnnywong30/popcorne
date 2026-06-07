import { NestFactory } from '@nestjs/core';
import { VaultApiModule } from './vault-api.module';

async function bootstrap() {
  const app = await NestFactory.create(VaultApiModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
