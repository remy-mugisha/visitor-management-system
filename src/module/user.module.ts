import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from '../service/user.service';
import { UserController } from '../controller/user.controller';
import { User } from '../entities/tb_user.entity';

@Module({
  imports: [],
})
export class UserModule {}
