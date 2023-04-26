import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { SuperHeroDocument, SuperHeroes } from './schema/super-heroes.schema';
import { InjectModel } from '@nestjs/mongoose';
import { createHeroesDto } from './dto/create-heroes.dto';

@Injectable()
export class SuperHeroesService {
  constructor(
    @InjectModel(SuperHeroes.name)
    private superHeroModel: Model<SuperHeroDocument>,
  ) {}

  async getAll(): Promise<SuperHeroes[]> {
    return this.superHeroModel.find().exec();
  }

  async create(createHero: createHeroesDto): Promise<SuperHeroes> {
    const model = new this.superHeroModel();
    model.name = createHero.name;
    model.powers = createHero.powers;
    model.franchise = createHero.franchise;
    model.imageUrl = createHero.imageUrl;
    return model.save();
  }
}
