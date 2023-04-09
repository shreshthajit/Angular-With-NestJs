import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  Param,
  Query,
  UsePipes,
  ValidationPipe,
  ParseBoolPipe,
  HttpException,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/user/dtos/CreateUser.dto';
import { AuthGuard } from 'src/user/guards/auth/auth.guard';
import { ValidateCreateUserPipe } from 'src/user/pipes/validate-create-user/validate-create-user.pipe';
import { UsersService } from 'src/user/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  getUsers() {
    return this.userService.fetchUsers();
  }

  @Get('posts')
  getUsersPosts() {
    return [
      {
        username: 'Jisnu',
        email: 'maeve@gmail.com',
        posts: [
          {
            id: 1,
            title: 'Post 1',
          },
          {
            id: 2,
            title: 'Post 2',
          },
        ],
      },
    ];
  }

  @Post('create')
  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe())
  createUser(@Body(ValidateCreateUserPipe) userData: CreateUserDto) {
    console.log(userData);
    return this.userService.createUser(userData);
  }

  @Get(':id')
  getUserById(@Param('id') id: number) {
    const user = this.userService.fetchUserById(id);
    if (!user) {
      throw new HttpException('User Not found', HttpStatus.BAD_REQUEST);
    }
    return user;
  }
}
