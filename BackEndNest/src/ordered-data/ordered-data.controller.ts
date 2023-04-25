import { Body, Controller, Post } from '@nestjs/common';
import { OrderedDataService } from './ordered-data.service';
import { orderedDataDto } from './dto/ordered-data.dto';

@Controller('ordered-data')
export class OrderedDataController {
  constructor(private orderService: OrderedDataService) {}
  @Post()
  async create(@Body() data: orderedDataDto) {
    return this.orderService.create(data);
  }
}
