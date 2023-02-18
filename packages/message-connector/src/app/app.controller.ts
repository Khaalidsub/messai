import { Controller, Get } from '@nestjs/common';
import { consumeMessage } from 'memphis-dev/nest';
import { Message } from 'memphis-dev/types';

import { AppService } from './app.service';

const ConsumeMessage = {
  stationName: 'messages',
  consumerName: 'connector',
};

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @consumeMessage(ConsumeMessage)
  async messageHandler(message: Message) {
    console.log(message.getData().toString());
    message.ack();
  }
}
