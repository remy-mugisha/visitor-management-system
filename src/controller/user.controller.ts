import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { CreateUserDto } from '../create-user.dto';
import { User } from '../user.interface';

@Controller('api')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('post')
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Get('getAll')
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<User> {
    return this.userService.findById(id);
  }
}
