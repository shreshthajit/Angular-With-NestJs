import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { cart, product } from 'src/data-type';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  cartData = new EventEmitter<product[] | []>();

  constructor(private http: HttpClient) {}

  addProduct(data: product) {
    //console.warn("service called");
    return this.http.post('http://localhost:3000/seller-product', data);
  }

  productList() {
    return this.http.get<product[]>('http://localhost:3000/seller-product');
  }

  deleteProduct(id: number) {
    return this.http.delete(`http://localhost:3000/seller-product/${id}`);
  }

  getProduct(id: string) {
    return this.http.get<product>(`http://localhost:3000/seller-product/${id}`);
  }

  updateProduct(product: product) {
    return this.http.put<product>(
      `http://localhost:3000/seller-product/${product.id}`,
      product
    );
  }

  popularProducts() {
    return this.http.get<product[]>(
      'http://localhost:3000/seller-product?_limit=3'
    );
  }

  trendyProducts() {
    return this.http.get<product[]>(
      'http://localhost:3000/seller-product?_limit=8'
    );
  }

  searchProducts(query: string) {
    return this.http.get<product[]>(
      `http://localhost:3000/seller-product?q=${query}`
    );
  }

  localAddToCart(data: product) {
    let cartData = [];
    let localCart = localStorage.getItem('localCart');
    if (!localCart) {
      localStorage.setItem('localCart', JSON.stringify([data]));
    } else {
      cartData = JSON.parse(localCart);
      cartData.push(data);
      localStorage.setItem('localCart', JSON.stringify(cartData));
    }
    this.cartData.emit(cartData);
  }

  removeItemFromCart(productId: string) {
    let cartData = localStorage.getItem('localCart');
    let myObjectString: any;
    myObjectString = localStorage.getItem('localCart');
    let myObject: any;
    myObject = JSON.parse(myObjectString);

    // for (const key in myObject) {
    //   if (myObject.hasOwnProperty(key)) {
    //     console.log(key, myObject[key]._id);
    //   }
    // }

    if (cartData) {
      // let items: product[] = JSON.parse(cartData);
      myObject = myObject.filter((item: any) => productId !== item._id);
      console.log(myObject);
     // this.cartData.emit(myObject);
     localStorage.setItem('localCart', JSON.stringify(myObject));
    }
  }
}
