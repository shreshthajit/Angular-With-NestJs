import { Module } from '@nestjs/common';
import { SellerProductService } from './seller-product.service';
import { SellerProductController } from './seller-product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SellerProductSchema } from './schema/seller-product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'SellerProduct',
        schema: SellerProductSchema,
        collection: 'SellerProduct',
      },
    ]),
  ],
  providers: [SellerProductService],
  controllers: [SellerProductController],
})
export class SellerProductModule {}
