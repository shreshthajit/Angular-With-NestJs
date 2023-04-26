import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { OrderedDataService } from './ordered-data.service';
import { orderedDataDto } from './dto/ordered-data.dto';

@Controller('ordered-data')
export class OrderedDataController {
  constructor(private orderService: OrderedDataService) {}
  @Post()
  async create(@Body() data: orderedDataDto) {
    return this.orderService.create(data);
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.orderService.getProduct(id);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    const product = await this.orderService.deleteProduct(id);
    if (!product) throw new NotFoundException('Product does not exist');
    return product;
  }
}
