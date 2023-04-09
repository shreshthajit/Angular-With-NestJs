import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/user/utils/type';

@Injectable()
export class UsersService {
  private fakeUsers = [{ username: 'jisnu', email: 'jisnu@gmail.com' }];
  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userDetails: CreateUserType) {
    //console.log('good');
    this.fakeUsers.push(userDetails);
    return;
  }
  fetchUserById(id: number) {
    return { id, username: 'jisnu', email: 'jisnu@gmail.com' };
  }
}
