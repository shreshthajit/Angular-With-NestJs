import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AllSuperHeroesComponent } from './super-heroes/all-super-heroes/all-super-heroes.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {
    path: 'seller-auth',
    component: SellerAuthComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'seller-home',
    component: SellerHomeComponent,
  },
  {
    component: SellerAddProductComponent,
    path: 'seller-add-product',
  },
  {
    component: ProductDetailsComponent,
    path:'details/:productId',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
