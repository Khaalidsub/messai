import { Result } from 'neverthrow';
import { CreateMessageTranformerBaseService } from './create-message.base.transformer';

export type ICreateMessage = {
  type: string;
  data: string;
  receiver: string;
};

export type ICreateMessageResponse = {
  status: string;
};

export type ICreateMessageResponseResult = Result<
  ICreateMessageResponse,
  Error
>;

export interface ICreateMessageBaseClient {
  sendMessage: (
    message: ICreateMessage
  ) => Promise<Result<ICreateMessageResponseResult, Error>>;
}

export abstract class CreateMessageBaseClient<T = ICreateMessage>
  implements ICreateMessageBaseClient
{
  constructor(
    private readonly transfromerService: CreateMessageTranformerBaseService<T>
  ) {}

  sendMessage(
    message: ICreateMessage
  ): Promise<Result<ICreateMessageResponseResult, Error>> {
    const transformedMessage = this.transfromerService.transform(message);
    return this.sendMessageInternal(transformedMessage);
  }

  abstract sendMessageInternal<T>(
    message: T
  ): Promise<Result<ICreateMessageResponseResult, Error>>;
}
