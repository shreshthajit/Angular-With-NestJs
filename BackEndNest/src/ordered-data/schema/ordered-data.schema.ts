import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = checkoutDataInfo & Document;

@Schema({ collection: 'OrderedData' })
export class checkoutDataInfo {
  @Prop()
  email: string;

  @Prop()
  address: string;

  @Prop()
  contact: string;

  @Prop()
  totalPrice: number;

  @Prop()
  userId: string;
}

export const orderedDataSchema = SchemaFactory.createForClass(checkoutDataInfo);
