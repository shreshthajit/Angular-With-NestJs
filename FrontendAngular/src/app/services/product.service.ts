import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from 'src/data-type';


@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http:HttpClient) {}

  addProduct(data:product){
    //console.warn("service called");
    return this.http.post('http://localhost:3000/seller-product',data);
  }

  productList(){
    return this.http.get<product[]>('http://localhost:3000/seller-product');
  }

  deleteProduct(id:number){
    return this.http.delete(`http://localhost:3000/seller-product/${id}`)
  }

  getProduct(id:string){
    return this.http.get<product>(`http://localhost:3000/seller-product/${id}`)
  }

  updateProduct(product:product){
    return this.http.put<product>(`http://localhost:3000/seller-product/${product.id}`,product);
  }

  popularProducts(){
    return this.http.get<product[]>('http://localhost:3000/seller-product?_limit=3');
  }

  trendyProducts(){
    return this.http.get<product[]>('http://localhost:3000/seller-product?_limit=8');
  }

  searchProducts(query:string){
    return this.http.get<product[]>(`http://localhost:3000/seller-product?q=${query}`);
  }

}
