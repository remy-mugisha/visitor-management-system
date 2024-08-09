import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { UserModule } from './module/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { District } from './entities/tb_district.entity';
import { Sector } from './entities/tb_sector.entity';
import { Cell } from './entities/tb_cell.entity';
import { Village } from './entities/tb_village.entity';
import { EuclBranch } from './entities/tb_eucl_branch.entity';
import { User } from './entities/tb_user.entity';
import { Personal } from './entities/tb_personal.entity';
import { Visitor } from './entities/tb_visitor.entity';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';

@Module({
  imports: [
    // MongooseModule.forRoot
    // ("mongodb://localhost:27017/visitor_management"),
    // UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Remier@&30',
      database: 'vms2',
      entities: [District, Sector, Cell, Village, EuclBranch,  User, Personal, Visitor,],
      synchronize: true,
    }),

    TypeOrmModule.forFeature([
      District, Sector, Cell, Village, EuclBranch,  User, Personal, Visitor
    ])

  ],

  providers: [UserService],
  controllers: [UserController],
})
export class AppModule {}
