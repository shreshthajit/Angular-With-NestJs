import { Body, Controller, Get, Post } from '@nestjs/common';
import { SuperHeroesService } from './super-heroes.service';
import { createHeroesDto } from './dto/create-heroes.dto';

@Controller('super-heroes')
export class SuperHeroesController {
  constructor(private superHeoresService: SuperHeroesService) {}

  @Get()
  async getAll() {
    return this.superHeoresService.getAll();
  }

  @Post()
  async create(@Body() createHeroes: createHeroesDto) {
    return this.superHeoresService.create(createHeroes);
  }
}
