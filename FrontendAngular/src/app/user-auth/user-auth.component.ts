import { Component, OnInit } from '@angular/core';
import { Login, SignUp } from 'src/data-type';
import { UserService } from '../services/user.service';
import { cart, product } from 'src/data-type';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css'],
})
export class UserAuthComponent implements OnInit {
  showLogin = false;
  authError: string = '';

  constructor(private user: UserService, private product: ProductService) {}

  ngOnInit(): void {
    this.user.userAuthReload();
  }
  signUp(data: SignUp) {
    this.user.userSignUp(data);
  }

  login(data: Login) {
    this.authError = '';
    this.user.userLogin(data);

    this.user.invalidUserAuth.subscribe((isError) => {
      if (isError) {
        this.authError = 'Please Enter valid user details';
      } else {
        //let newData:any = this.user.getUserLoginData();
       // console.log('This is my newData= ' + newData);
       setTimeout(() => {
         this.localCartToDb();
      }, 2000);
      }
    });
  }

  openLogin() {
    this.showLogin = true;
  }
  openSignUp() {
    this.showLogin = false;
  }

  localCartToDb() {
    let data = localStorage.getItem('localCart');
    let user = localStorage.getItem('user');
    //console.log("this is my user = "+user);
    let userData = user && JSON.parse(user);
    let userId = userData._id;
    console.log('this is my userId ' + userId);

    if (data) {
      let cartDataList = JSON.parse(data);

      cartDataList.forEach((product: product, index: any) => {
        let cartData: cart = {
          ...product,
          productId: product._id,
          userId,
        };

        setTimeout(() => {
          this.product.addCartDataToDb(cartData).subscribe((result) => {
            if (result) {
              console.warn('item stored in DB');
            }
          });
          if (cartDataList.length === index + 1) {
            localStorage.removeItem('localCart');
          }
        }, 500);
      });
    }

    setTimeout(() => {
      this.product.getUserCart(userId);
    }, 2000);
  }
}
