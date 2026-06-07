import { Injectable } from '@nestjs/common';

@Injectable()
export class VaultApiService {
  getHello(): string {
    return 'Hello World!';
  }
}
