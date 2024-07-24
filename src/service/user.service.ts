import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../create-user.dto';

@Injectable()
export class UserService {
  private users = [];

  createUser(createUserDto: CreateUserDto) {
    const newUser = { id: Date.now(), ...createUserDto };
    this.users.push(newUser);
    return newUser;
  }

  findAll() {
    return this.users;
  }
}
