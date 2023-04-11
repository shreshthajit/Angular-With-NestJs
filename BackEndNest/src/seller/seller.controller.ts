import { Body, Controller, Post } from '@nestjs/common';
import { SellerService } from './seller.service';
import { sellerCreateDto } from './dto/seller.dto';

@Controller('seller')
export class SellerController {
  constructor(private sellerService: SellerService) {}

  @Post()
  async create(@Body() createSeller: sellerCreateDto) {
    return this.sellerService.create(createSeller);
  }
}
