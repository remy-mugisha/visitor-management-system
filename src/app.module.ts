import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './module/user.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017/visitor_management"),
    UserModule,
  ],


})
export class AppModule {}
