import { Module } from '@nestjs/common';
import { UserCartService } from './user-cart.service';
import { UserCartController } from './user-cart.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { userCartSchema } from './user-schema/user-cart.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'userProduct',
        schema: userCartSchema,
        collection: 'userProduct',
      },
    ]),
  ],
  providers: [UserCartService],
  controllers: [UserCartController],
})
export class UserCartModule {}
