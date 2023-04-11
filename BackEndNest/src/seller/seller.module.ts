import { Module } from '@nestjs/common';
import { SellerService } from './seller.service';
import { SellerController } from './seller.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SellerSchema } from './schema/seller.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'SellerInfo',
        schema: SellerSchema,
        collection: 'SellerInfo',
      },
    ]),
  ],
  providers: [SellerService],
  controllers: [SellerController],
})
export class SellerModule {}
