import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SellerLoginDocument = SellerLoginInfo & Document;

@Schema({ collection: 'SellerInfo' })
export class SellerLoginInfo {
  @Prop()
  email: string;

  @Prop()
  password: string;
}

export const SellerSchema = SchemaFactory.createForClass(SellerLoginInfo);
