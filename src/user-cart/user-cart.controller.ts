import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { UserCartService } from './user-cart.service';
import { userCartDto } from './dto/user-cart.dto';

@Controller('user-cart')
export class UserCartController {
  constructor(private userService: UserCartService) {}
  @Post()
  async create(@Body() userCart: userCartDto) {
    return this.userService.create(userCart);
  }

  // @Get()
  // popularProduct() {
  //   return this.userService.getAllProducts();
  // }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.userService.getProduct(id);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    const product = await this.userService.deleteProduct(id);
    if (!product) throw new NotFoundException('Product does not exist');
    return product;
  }
}
