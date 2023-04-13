import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SellerProductDocument = SellerProduct & Document;

@Schema({ collection: 'SellerProduct' })
export class SellerProduct {
  @Prop()
  name: string;

  @Prop()
  price: string;

  @Prop()
  color: string;

  @Prop()
  category: string;

  @Prop()
  description: string;

  @Prop()
  imageUrl: string;
}

export const SellerProductSchema = SchemaFactory.createForClass(SellerProduct);
