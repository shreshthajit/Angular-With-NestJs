import { Body, Controller, Post } from '@nestjs/common';
import { SellerService } from './seller.service';
import { sellerCreateDto } from './dto/seller.dto';
import { sellerLoginDto } from './dto/seller-login.dto';

@Controller('seller')
export class SellerController {
  constructor(private sellerService: SellerService) {}

  @Post('/signup')
  async create(@Body() createSeller: sellerCreateDto) {
    return this.sellerService.create(createSeller);
  }

  @Post('/signin')
  async signIn(@Body() user: sellerLoginDto) {
    return this.sellerService.signin(user);
  }
}
