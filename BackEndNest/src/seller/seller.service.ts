import { Injectable } from '@nestjs/common';
import { SellerDocument, SellerInfo } from './schema/seller.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { sellerCreateDto } from './dto/seller.dto';

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
}
