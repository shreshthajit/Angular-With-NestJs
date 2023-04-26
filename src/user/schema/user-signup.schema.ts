import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type userSignupDocument = SignUpInfo & Document;

@Schema({ collection: 'SignUpInfo' })
export class SignUpInfo {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;
}

export const userSignupSchema = SchemaFactory.createForClass(SignUpInfo);
