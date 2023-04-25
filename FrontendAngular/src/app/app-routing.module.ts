import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AllSuperHeroesComponent } from './super-heroes/all-super-heroes/all-super-heroes.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AuthGuard } from './auth.guard';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {
    path: 'seller-auth',
    component: SellerAuthComponent,
  },
  {
    path: 'user-auth',
    component: UserAuthComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'seller-home',
    component: SellerHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    component: SellerAddProductComponent,
    path: 'seller-add-product',
    canActivate: [AuthGuard]
  },
  {
    component: SellerUpdateProductComponent,
    path: 'seller-update-product',
    canActivate: [AuthGuard]
  },
  {
    component: ProductDetailsComponent,
    path:'details/:productId',
  }
  ,{
    component: CartPageComponent,
    path:'cart-page',
  },
  {
    component: CheckoutComponent,
    path:'checkout'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
