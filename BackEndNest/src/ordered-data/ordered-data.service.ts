import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { orderedDataDto } from './dto/ordered-data.dto';
import { OrderDocument, checkoutDataInfo } from './schema/ordered-data.schema';
import { Model } from 'mongoose';

@Injectable()
export class OrderedDataService {
  constructor(
    @InjectModel(checkoutDataInfo.name)
    private orderedDataModel: Model<OrderDocument>,
  ) {}

  async create(createOrder: orderedDataDto): Promise<checkoutDataInfo> {
    const model = new this.orderedDataModel();
    model.email = createOrder.email;
    model.address = createOrder.address;
    model.contact = createOrder.contact;
    model.totalPrice = createOrder.totalPrice;
    model.userId = createOrder.userId;
    return model.save();
  }

  getAllProducts(): Promise<checkoutDataInfo[]> {
    return this.orderedDataModel.find().exec();
  }

  async getProduct(id: string): Promise<checkoutDataInfo[]> {
    let products = await this.getAllProducts();
    products = products.filter(
      (product: checkoutDataInfo) => product.userId === id,
    );
    return products;
  }
  async deleteProduct(id: string): Promise<checkoutDataInfo> {
    const deletedProduct = await this.orderedDataModel.findByIdAndRemove(id);
    return deletedProduct;
  }
}
