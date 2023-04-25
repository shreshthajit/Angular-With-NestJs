import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { order } from 'src/data-type';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  totalPrice:Number | undefined;
  constructor(private product:ProductService) { }

  ngOnInit(): void {
    this.product.currentUserCart().subscribe((result) => {
      let price = 0;
      result.forEach((item:any)=>{
        price = price + + item.price;
      })
      this.totalPrice=price+(price)/10+100;
      
    });
  }
  orderNow(data:{email:string,address:string,contact:string}){
    let user = localStorage.getItem('user');
    let userId = user && JSON.parse(user)._id;
    let orderData:order={
      ...data,
      totalPrice:this.totalPrice as number,
      userId,
    }
    this.product.orderNow(orderData).subscribe((result)=>{
      alert('order placed');
    })
  }

}
