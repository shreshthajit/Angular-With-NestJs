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
          let newData = JSON.parse(cartData);

          newData = newData.filter((item: any) => productId == item._id);
          // let latestD = JSON.stringify(newData);
          if (newData.length) {
            this.removeCart = true;
          } else {
            this.removeCart = false;
          }
        }
        let user = localStorage.getItem('user');
        if (user) {
          let userId = user && JSON.parse(user)._id;
          this.product.getUserCart(userId);
          this.product.cartData.subscribe((result) => {
            let items = result.filter(
              (item: product) => productId === item.productId
            );
            if (items.length) {
              console.log('item checking' + items[0]);
              this.cartData = items[0];
              this.removeCart = true;
            } else {
              this.removeCart = false;
            }
          });
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
      let productId = this.activeRoute.snapshot.paramMap.get('productId');
      if (!localStorage.getItem('user')) {
        this.product.localAddToCart(this.productData);
        this.removeCart = true;
      } else {
        let user = localStorage.getItem('user');
        let userId = user && JSON.parse(user)._id;
        let latestCartData: cart = {
          ...this.productData,
          userId,
          productId,
        };
        this.product.addCartDataToDb(latestCartData).subscribe((result) => {
          if (result) {
            this.product.getUserCart(userId);
            this.removeCart = true;
          }
        });
        console.log(latestCartData);
      }
    }
  }

  removeToCart() {
    if (!localStorage.getItem('user')) {
      this.product.removeItemFromCart(this.removeProductId);
    } else {
      let user = localStorage.getItem('user');
      let userId = user && JSON.parse(user)._id;
      this.cartData &&
        this.product
          .removeUserCart(this.cartData._id)
          .subscribe((result: any) => {
            if (result) {
              this.product.getUserCart(userId);
            }
          });
    }
    this.removeCart = false;
  }
}
