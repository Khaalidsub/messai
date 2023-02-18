import {
  Injectable,
  Inject,
  OnModuleInit,
  OnApplicationBootstrap,
  OnApplicationShutdown,
} from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';

import { MemphisService } from 'memphis-dev/nest';

@Injectable()
export class AppService
  implements OnApplicationBootstrap, OnApplicationShutdown
{
  private connector;
  private producer;
  constructor(
    private readonly moduleRef: ModuleRef,
    private memphisService: MemphisService
  ) {}
  onApplicationShutdown(signal?: string) {
    this.connector.disconnect();
  }
  async onApplicationBootstrap() {
    const connector = await this.memphisService.connect({
      connectionToken: 'memphis',
      host: 'localhost',
      username: 'connector',
    });
    const producer = await connector.producer({
      stationName: 'messages',
      producerName: 'blue',
    });

    this.producer = producer;
  }

  async getData() {
    await this.producer.produce({
      message: {
        type: 'WhatsApp',
        data: 'Hello World!',
      },
    });

    return {
      message: 'Hello World!',
    };
  }
}
