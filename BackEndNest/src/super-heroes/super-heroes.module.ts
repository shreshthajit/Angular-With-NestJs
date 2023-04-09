import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SuperHeroesSchema } from './schema/super-heroes.schema';
import { SuperHeroesService } from './super-heroes.service';
import { SuperHeroesController } from './super-heroes.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'SuperHeroes',
        schema: SuperHeroesSchema,
        collection: 'SuperHeroes',
      },
    ]),
  ],
  providers: [SuperHeroesService],
  controllers: [SuperHeroesController],
})
export class SuperHeroesModule {}
