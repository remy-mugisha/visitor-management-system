import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { CreateUserDto } from '../create-user.dto';

@Controller('api')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get('getAll')
  findAll() {
    return this.userService.findAll();
  }
}
