import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { userSignupSchema } from './schema/user-signup.schema';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'SignUpInfo',
        schema: userSignupSchema,
        collection: 'SignUpInfo',
      },
    ]),
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
