import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User } from '../entities/tb_user.entity';

@Controller('api')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('getAll')
  findAll() {
    return this.userService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }
  @Post('create')
  create(@Body() user: User) {
    return this.userService.create(user);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
