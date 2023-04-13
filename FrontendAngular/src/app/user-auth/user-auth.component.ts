import { Component, OnInit } from '@angular/core';
import { Login, SignUp } from 'src/data-type';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css'],
})
export class UserAuthComponent implements OnInit {
  showLogin = false;
  authError: string = '';

  constructor(private user: UserService) {}

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
      }
    });
  }

  openLogin() {
    this.showLogin = true;
  }
  openSignUp() {
    this.showLogin = false;
  }
}
