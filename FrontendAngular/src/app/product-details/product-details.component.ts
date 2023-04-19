import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cart, product } from 'src/data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productData: undefined | product;
  productQuantity: number = 1;
  cartData: product | undefined;
  removeCart = false;
  removeProductId: string = '';

  constructor(
    private activeRoute: ActivatedRoute,
    private product: ProductService
  ) {}

  ngOnInit(): void {
    let productId = this.activeRoute.snapshot.paramMap.get('productId');
    //console.log("my product Id is"+typeof(productId))
    productId &&
      this.product.getProduct(productId).subscribe((result) => {
        this.productData = result;

        let cartData = localStorage.getItem('localCart');
        if (productId) {
          this.removeProductId = productId;
        }
        if (productId && cartData) {
          // let items = JSON.parse(cartData);
          let newData = JSON.parse(cartData);

          //console.log('oldData' + newData);

          newData = newData.filter((item: any) => productId == item._id);
          let latestD = JSON.stringify(newData);
          //console.log('filtered newdata  ' + latestD);

          if (newData.length) {
            this.removeCart = true;
          } else {
            this.removeCart = false;
          }
          console.log("removeCart= " +this.removeCart)
        }
      });
  }

  handleQuantity(val: string) {
    if (this.productQuantity < 20 && val === 'plus') {
      this.productQuantity += 1;
    } else if (this.productQuantity > 1 && val === 'min') {
      this.productQuantity -= 1;
    }
  }

  addToCart() {
    if (this.productData) {
      this.productData.quantity = this.productQuantity;
      if (!localStorage.getItem('user')) {
        this.product.localAddToCart(this.productData);
      } else {
        let user = localStorage.getItem('user');
        //let userId = user && JSON.parse(user).id;
      }
    }
  }

  removeToCart() {
    this.product.removeItemFromCart(this.removeProductId);
  }
}
