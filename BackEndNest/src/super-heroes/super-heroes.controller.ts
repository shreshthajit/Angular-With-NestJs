import { Controller, Get } from '@nestjs/common';
import { SuperHeroesService } from './super-heroes.service';

@Controller('super-heroes')
export class SuperHeroesController {
  constructor(private superHeoresService: SuperHeroesService) {}

  @Get()
  async getAll() {
    return this.superHeoresService.getAll();
  }
}
