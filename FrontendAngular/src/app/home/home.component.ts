import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from 'src/data-type';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faQuoteLeft,faQuoteRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Input() ite: string = '';

  startIcon=faStar;
  quoteLeft=faQuoteLeft;
  quoteRight=faQuoteRight


  popularProduct: undefined | product[];
  trendyProducts: undefined | product[];
  filedata: any;
  itemId:string | undefined;
  latestId: string | undefined;
  constructor(private product: ProductService) {}


  ngOnInit(): void {
    this.product.popularProducts().subscribe((data) => {
      this.popularProduct = data;
    });

    this.product.trendyProducts().subscribe((data) => {
      this.trendyProducts = data;
    });
    
    this.latestId=this.itemId;
  }
  
  // getItem(item:any) {
  //   console.log('what did I get?', item._id);
  //   this.itemId=item._id;
  // }
  viewDetails(item:any) {
    console.log('what did I get?', item._id);
    this.itemId=item._id;
  }
}
