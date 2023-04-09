import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { SuperHeroDocument, SuperHeroes } from './schema/super-heroes.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SuperHeroesService {
  constructor(
    @InjectModel(SuperHeroes.name)
    private superHeroModel: Model<SuperHeroDocument>,
  ) {}
  async getAll(): Promise<SuperHeroes[]> {
    return this.superHeroModel.find().exec();
  }
}
