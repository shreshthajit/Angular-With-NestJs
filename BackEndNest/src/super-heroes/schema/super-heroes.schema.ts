import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SuperHeroDocument = SuperHeroes & Document;

@Schema({ collection: 'SuperHeroes' })
export class SuperHeroes {
  @Prop()
  name: string;

  @Prop()
  powers: string;

  @Prop()
  franchise: string;

  @Prop()
  imageUrl: string;
}

export const SuperHeroesSchema = SchemaFactory.createForClass(SuperHeroes);
