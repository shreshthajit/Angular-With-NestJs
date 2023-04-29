import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { cart, priceSummary } from 'src/data-type';
import { product } from 'src/data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  cartData: product[] | undefined;
  priceSummary: priceSummary = {
    price: 0,
    discount: 0,
    tax: 0,
    delivery: 0,
    total: 0,
    _id: '',
  };
  constructor(private product: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.loadDetails();
  }

  loadDetails() {
    this.product.currentUserCart().subscribe((result) => {
      this.cartData = result;

      let price = 0;
      result.forEach((item) => {
        // console.log(item);
        if (item.quantity) {
          price = price + (+item.price * +item.quantity)
        }  
      });
      this.priceSummary.price = price;
      this.priceSummary.discount = price / 10;
      this.priceSummary.tax = price / 10;
      this.priceSummary.delivery = 100;
      this.priceSummary.total = price + price / 10 + 100;
      if (!this.cartData.length) {
        this.router.navigate(['/']);
      }
    });
  }

  checkout() {
    this.router.navigate(['/checkout']);
  }
  removeItem(id: string) {
    //console.log(id);
    let user = localStorage.getItem('user');
    let userId = user && JSON.parse(user)._id;
    id &&
      this.cartData &&
      this.product.removeUserCart(id).subscribe((result: any) => {
        this.loadDetails();
      });
  }
}
