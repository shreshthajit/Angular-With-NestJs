import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SellerDocument = SellerInfo & Document;

@Schema({ collection: 'SellerInfo' })
export class SellerInfo {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;
}

export const SellerSchema = SchemaFactory.createForClass(SellerInfo);
