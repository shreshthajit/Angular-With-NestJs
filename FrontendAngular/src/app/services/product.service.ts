import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { SignUp, cart, order, product } from 'src/data-type';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  cartData = new EventEmitter<product[] | []>();

  constructor(private http: HttpClient) {}

  addProduct(data: product) {
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
      this.cartData.emit([data]);
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

    if (cartData) {
      myObject = myObject.filter((item: any) => productId !== item._id);
      this.cartData.emit(myObject);
      localStorage.setItem('localCart', JSON.stringify(myObject));
    }
  }

  addCartDataToDb(cartData: cart) {
    return this.http.post('http://localhost:3000/user-cart', cartData);
  }

  getUserCart(id: string) {
    return this.http
      .get<product[]>(`http://localhost:3000/user-cart/${id}`, {
        observe: 'response',
      })
      .subscribe((result) => {
        console.log(result);
        if (result && result.body) {
          this.cartData.emit(result.body);
        }
      });
  }

  removeUserCart(id: string) {
    return this.http.delete(`http://localhost:3000/user-cart/${id}`);
  }

  currentUserCart() {
    let userStore = localStorage.getItem('user');
    let userData = userStore && JSON.parse(userStore);
    return this.http.get<product[]>(
      `http://localhost:3000/user-cart/${userData._id}`
    );
  }

  orderNow(data:order){
    return this.http.post('http://localhost:3000/ordered-data', data);
  }

  orderList(){
    let userStore = localStorage.getItem('user');
    let userData = userStore && JSON.parse(userStore);
    return this.http.get<order[]>(
      `http://localhost:3000/ordered-data/${userData._id}`
    );
  }
  deleteCartItems(id:string){
    return this.http.delete(`http://localhost:3000/user-cart/${id}`,{observe:'response'}).subscribe((result)=>{
      if(result){
        this.cartData.emit([]);
      }
    })
  }
  removeItem(id:string){
    return this.http.delete(`http://localhost:3000/ordered-data/${id}`);
  }

  cancelOrder(id:string){
    return this.http.delete(`http://localhost:3000/ordered-data/${id}`);
  }
}
