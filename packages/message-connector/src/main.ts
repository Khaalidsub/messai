/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  CustomTransportStrategy,
  MicroserviceOptions,
  Server,
} from '@nestjs/microservices';
import { MemphisServer } from 'memphis-dev/nest';
import { Memphis, Consumer } from 'memphis-dev/types';
import { AppModule } from './app/app.module';

// type MemphisParams = {
//   stationName: string;
//   consumerName: string;
//   consumerGroup?: string;
//   pullIntervalMs?: number;
//   batchSize?: number;
//   batchMaxTimeToWaitMs?: number;
//   maxAckTimeMs?: number;
//   maxMsgDeliveries?: number;
//   genUniqueSuffix?: boolean;
//   startConsumeFromSequence?: number;
//   lastMessages?: number;

//   host: 'localhost';
//   username: 'connector';
//   connectionToken: 'memphis';
// };

// class MemphisServer extends Server implements CustomTransportStrategy {
//   private memphis: Memphis;
//   private consumer: Consumer;
//   constructor(private readonly options: MemphisParams) {
//     super();
//   }
//   /**
//    * This method is triggered when you run "app.listen()".
//    */
//   async listen(callback: () => void) {
//     const { host, username, connectionToken } = this.options;
//     this.memphis = await connect({
//       host: host,
//       username: username,
//       connectionToken: connectionToken,
//     });

//     this.consumer = await this.memphis.consumer(this.options);
//     callback();
//   }

//   /**
//    * This method is triggered on application shutdown.
//    */
//   close() {
//     this.memphis.close();

//     close();
//   }
// }

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      strategy: new MemphisServer({
        // stationName: 'messages',
        // consumerName: 'connector',
        host: 'localhost',
        connectionToken: 'memphis',
        username: 'connector',

        // consumerGroup: '<group-name>', // defaults to the consumer name.
        // pullIntervalMs: 1000, // defaults to 1000
        // batchSize: 10, // defaults to 10
        // batchMaxTimeToWaitMs: 5000, // defaults to 5000
        // maxAckTimeMs: 30000, // defaults to 30000
        // maxMsgDeliveries: 10, // defaults to 10
        // genUniqueSuffix: false, // defaults to false
        // startConsumeFromSequence: 1, // start consuming from a specific sequence. defaults to 1
        // lastMessages: -1 // co

        // host: 'http://localhost:8080',

        // username: 'connector',
        // connectionToken: 'memphis',
      }),
    }
  );
  await app.listen();
}

bootstrap();
