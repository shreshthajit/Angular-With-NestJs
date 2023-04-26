import { Module } from '@nestjs/common';
import { OrderedDataController } from './ordered-data.controller';
import { OrderedDataService } from './ordered-data.service';
import { MongooseModule } from '@nestjs/mongoose';
import { orderedDataSchema } from './schema/ordered-data.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'checkoutDataInfo',
        schema: orderedDataSchema,
        collection: 'checkoutDataInfo',
      },
    ]),
  ],
  controllers: [OrderedDataController],
  providers: [OrderedDataService],
})
export class OrderedDataModule {}
