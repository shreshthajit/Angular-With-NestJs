import { Injectable } from '@nestjs/common';
import { userSignupDocument } from './schema/user-signup.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { userCreateDto } from './dto/create-user.dto';
import { SignUpInfo } from './schema/user-signup.schema';
import { userLoginDto } from './dto/loging-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(SignUpInfo.name)
    private userModel: Model<userSignupDocument>,
  ) {}

  async create(createUser: userCreateDto): Promise<SignUpInfo> {
    const model = new this.userModel();
    model.name = createUser.name;
    model.email = createUser.email;
    model.password = createUser.password;

    return model.save();
  }

  async signin(user: userLoginDto): Promise<SignUpInfo> {
    const foundUser = await this.userModel
      .findOne({ email: user.email })
      .exec();
    if (foundUser) {
      return foundUser;
    } else {
    }
  }
}
