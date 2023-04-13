import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SellerDocument, SellerInfo } from './schema/seller.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { sellerCreateDto } from './dto/seller.dto';
import { sellerLoginDto } from './dto/seller-login.dto';
import {
  SellerLoginDocument,
  SellerLoginInfo,
} from './schema/seller-login.schema';

@Injectable()
export class SellerService {
  constructor(
    @InjectModel(SellerInfo.name)
    private sellerModel: Model<SellerDocument>,
  ) {}

  async create(createSeller: sellerCreateDto): Promise<SellerInfo> {
    const model = new this.sellerModel();
    model.name = createSeller.name;
    model.email = createSeller.email;
    model.password = createSeller.password;

    return model.save();
  }

  async signin(user: sellerLoginDto): Promise<SellerInfo> {
    const foundUser = await this.sellerModel
      .findOne({ email: user.email })
      .exec();
    if (foundUser) {
      return foundUser;
    } else {
    }
  }
}
