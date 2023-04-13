import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './book/book.module';
import { SuperHeroesModule } from './super-heroes/super-heroes.module';
import { SellerModule } from './seller/seller.module';
import { SellerProductModule } from './seller-product/seller-product.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
