import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './book/book.module';
import { SuperHeroesModule } from './super-heroes/super-heroes.module';
import { SellerModule } from './seller/seller.module';
import { SellerProductModule } from './seller-product/seller-product.module';
import { UserCartModule } from './user-cart/user-cart.module';
import { OrderedDataModule } from './ordered-data/ordered-data.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.local.env'],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('MONGO_URI'),
      }),
      inject: [ConfigService],
    }),
    BookModule,
    UserModule,
    SuperHeroesModule,
    SellerModule,
    SellerProductModule,
    UserCartModule,
    OrderedDataModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
