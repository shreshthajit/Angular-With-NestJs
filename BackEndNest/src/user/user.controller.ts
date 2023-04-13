import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { userCreateDto } from './dto/create-user.dto';
import { userLoginDto } from './dto/loging-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/signup')
  async create(@Body() createUser: userCreateDto) {
    return this.userService.create(createUser);
  }

  @Post('/signin')
  async signIn(@Body() user: userLoginDto) {
    return this.userService.signin(user);
  }
}
