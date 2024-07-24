import { Module } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { UserController } from '../controller/user.controller';
import { PersInfoService } from 'src/service/persInfo.service';
import { PersInfoController } from 'src/controller/persInfo.controller';


@Module({
  providers: [UserService, PersInfoService],
  controllers: [UserController, PersInfoController]
})
export class UserModule {}

