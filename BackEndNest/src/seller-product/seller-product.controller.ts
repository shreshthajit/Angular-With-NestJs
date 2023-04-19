import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { SellerProductService } from './seller-product.service';
import { SellerProductDto } from './dto/seller-product.dto';

@Controller('seller-product')
export class SellerProductController {
  constructor(private sellerProductService: SellerProductService) {}

  @Post()
  async create(@Body() createProduct: SellerProductDto) {
    return this.sellerProductService.create(createProduct);
  }

  @Get()
  popularProduct() {
    return this.sellerProductService.popularProduct();
  }

  @Get()
  trendyProduct() {
    return this.sellerProductService.trendyProduct();
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.sellerProductService.getProduct(id);
  }
  // @Get()
  // async getProduct(@Query('_id') _id?: string): Promise<SellerProduct> {
  //   return this.sellerProductService.getProduct(_id);
  // }
}
