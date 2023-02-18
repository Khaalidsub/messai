import { ICreateMessage } from './base/create-message.base.client';
import { CreateMessageTranformerBaseService } from './base/create-message.base.transformer';

export type ICreateMessageTelegram = {
  type: string;
  message: string;
  updatedAt: Date;
};
export class CreateMessageTranformerTelegramService extends CreateMessageTranformerBaseService<ICreateMessageTelegram> {
  transform(message: ICreateMessage): ICreateMessageTelegram {
    return {
      type: message.type,
      message: message.data,
      updatedAt: new Date(),
    };
  }
}
