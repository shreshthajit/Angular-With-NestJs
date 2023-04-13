import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserLoginDocument = userLoginInfo & Document;

@Schema({ collection: 'LoginInfo' })
export class userLoginInfo {
  @Prop()
  email: string;

  @Prop()
  password: string;
}

export const userLoginSchema = SchemaFactory.createForClass(userLoginInfo);
