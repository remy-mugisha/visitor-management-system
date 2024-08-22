import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User } from '../entities/tb_user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('getAll')
  findAll() {
    return this.userService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(+id);
  }
  @Post('create')
  create(@Body() user: User) {
    return this.userService.create(user);
  }
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.userService.remove(+id);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() user: Partial<User>) {
    return this.userService.update(+id, user);
  }
}
