import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Login, SignUp } from 'src/data-type';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userLoginData: any;
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  invalidUserAuth = new EventEmitter<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {}

  userSignUp(user: SignUp) {
    this.http
      .post('http://localhost:3000/user/signup', user, { observe: 'response' })
      .subscribe((result) => {
        if (result) {
          localStorage.setItem('user', JSON.stringify(result.body));
          this.router.navigate(['/']);
        }
      });
  }

  userAuthReload() {
    if (localStorage.getItem('user')) {
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['/']);
    }
  }

  userLogin(user: Login) {
    this.http
      .post(`http://localhost:3000/user/signin`, user, { observe: 'response' })
      .subscribe((result: any) => {
        if (result && result.body) {
          this.invalidUserAuth.emit(false);
          localStorage.setItem('user', JSON.stringify(result.body));
          this.userLoginData = JSON.stringify(result.body);
          this.router.navigate(['/']);
        } else {
          console.warn('login failed');
          this.invalidUserAuth.emit(true);
        }
      });
  }

 
  getUserLoginData(): any {
    return this.userLoginData;
  }
}
