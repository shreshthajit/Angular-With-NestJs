import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type userProductDocument = userProduct & Document;

@Schema({ collection: 'SellerProduct' })
export class userProduct {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  color: string;

  @Prop()
  category: string;

  @Prop()
  description: string;

  @Prop()
  imageUrl: string;

  @Prop()
  id: number;

  @Prop()
  quantity: number;

  @Prop()
  productId: string;

  @Prop()
  userId: string;
}

export const userCartSchema = SchemaFactory.createForClass(userProduct);
