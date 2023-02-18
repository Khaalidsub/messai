import { ICreateMessage } from './create-message.base.client';

export interface transform<T = ICreateMessage, U = ICreateMessage> {
  transform(message: T): U;
}

export abstract class CreateMessageTranformerBaseService<T>
  implements transform<ICreateMessage, T>
{
  constructor() {}
  abstract transform(message: ICreateMessage): T;
}
