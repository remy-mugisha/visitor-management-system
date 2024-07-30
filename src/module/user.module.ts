import { Module } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { UserController } from '../controller/user.controller';
import { PersInfoService } from 'src/service/persInfo.service';
import { PersInfoController } from 'src/controller/persInfo.controller';
import { UserSchema } from 'src/user.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name:'User', schema: UserSchema}])],
  providers: [UserService, PersInfoService],
  controllers: [UserController, PersInfoController],
  exports: [UserService],
})
export class UserModule {}

