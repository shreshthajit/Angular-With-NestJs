import { Injectable } from '@nestjs/common';
import {
  SellerProduct,
  SellerProductDocument,
} from './schema/seller-product.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SellerProductDto } from './dto/seller-product.dto';

@Injectable()
export class SellerProductService {
  constructor(
    @InjectModel(SellerProduct.name)
    private sellerProductModel: Model<SellerProductDocument>,
  ) {}

  async create(createProduct: SellerProductDto): Promise<SellerProduct> {
    const model = new this.sellerProductModel();
    model.name = createProduct.name;
    model.price = createProduct.price;
    model.color = createProduct.color;
    model.category = createProduct.category;
    model.description = createProduct.description;
    model.imageUrl = createProduct.imageUrl;

    return model.save();
  }

  popularProduct(): Promise<SellerProduct[]> {
    return this.sellerProductModel.find().exec();
  }

  trendyProduct(): Promise<SellerProduct[]> {
    return this.sellerProductModel.find().exec();
  }

  getProduct(id: string): Promise<SellerProduct> {
    return this.sellerProductModel.findById(id).exec();
  }
}
