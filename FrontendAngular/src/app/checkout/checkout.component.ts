import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { cart, order, product } from 'src/data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  totalPrice: Number | undefined;
  imageUrl:string| undefined;
  cartData: product[] | undefined;
  orderMsg:string | undefined;
  constructor(private product: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.product.currentUserCart().subscribe((result) => {
      let price = 0;
      this.cartData=result;
      result.forEach((item: any) => {
        price = price + +item.price;
      });
      this.totalPrice = price + price / 10 + 100;
    });
  }
  orderNow(data: { email: string; address: string; contact: string }) {
    let user = localStorage.getItem('user');
    let userId = user && JSON.parse(user)._id;

    let orderData: order = {
      ...data,
      totalPrice: this.totalPrice as number,
      userId,
      _id: '',
    };

    //this for loop will make cart length=0 a
    this.cartData?.forEach((item)=>{
      setTimeout(()=>{
        item._id && this.product.deleteCartItems(item._id);
      },800)
    })
    
    this.product.orderNow(orderData).subscribe((result) => {
      this.orderMsg="Your order has been placed";
      setTimeout(()=>{
        this.router.navigate(['/my-orders']);
        this.orderMsg=undefined;
      },900);
    });
  }
}
