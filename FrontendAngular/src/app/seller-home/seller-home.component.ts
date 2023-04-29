import { Component, OnInit } from '@angular/core';
import { cart, priceSummary, product } from 'src/data-type';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {

  cartData: product[] | undefined;
  constructor(private product: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.loadDetails();
  }

  loadDetails() {
    this.product.trendyProducts().subscribe((data) => {
      this.cartData = data;
    });
  }
}
