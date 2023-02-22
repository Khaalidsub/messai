import { Result, ok } from 'neverthrow';
import {
  CreateMessageBaseClient,
  ICreateMessageResponseResult,
} from './base/create-message.base.client';
import {
  CreateMessageTranformerTelegramService,
  ICreateMessageTelegram,
} from './create-message.telegram.transformer';

export class CreateMessageTelegramClient extends CreateMessageBaseClient<ICreateMessageTelegram> {
  constructor(
    private transformService: CreateMessageTranformerTelegramService
  ) {
    super(transformService);
  }
  sendMessageInternal<ICreateMessageTelegram>(
    message: ICreateMessageTelegram
  ): Promise<Result<ICreateMessageResponseResult, Error>> {}
}
