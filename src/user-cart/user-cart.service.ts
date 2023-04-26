import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  userProduct,
  userProductDocument,
} from './user-schema/user-cart.schema';
import { Model } from 'mongoose';
import { userCartDto } from './dto/user-cart.dto';

@Injectable()
export class UserCartService {
  constructor(
    @InjectModel(userProduct.name)
    private userProductModel: Model<userProductDocument>,
  ) {}

  async create(createProduct: userCartDto): Promise<userProduct> {
    const model = new this.userProductModel();
    model.name = createProduct.name;
    model.price = createProduct.price;
    model.color = createProduct.color;
    model.category = createProduct.category;
    model.description = createProduct.description;
    model.imageUrl = createProduct.imageUrl;
    model.id = createProduct.id;
    model.productId = createProduct.productId;
    model.userId = createProduct.userId;

    return model.save();
  }

  getAllProducts(): Promise<userProduct[]> {
    return this.userProductModel.find().exec();
  }

  async getProduct(id: string): Promise<userProduct[]> {
    let products = await this.getAllProducts();
    products = products.filter((product: userProduct) => product.userId === id);
    return products;
  }
  async deleteProduct(id: string): Promise<userProduct> {
    const deletedProduct = await this.userProductModel.findByIdAndRemove(id);
    return deletedProduct;
  }
}
