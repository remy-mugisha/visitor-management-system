import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Personal } from './tb_personal.entity';
import { Village } from './tb_village.entity';
import { EuclBranch } from './tb_eucl_branch.entity';
import { User } from './tb_user.entity';

@Entity('tb_visitor')
export class Visitor {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Personal, (personal) => personal.id)
  @JoinColumn({ name:'personalId' })
  personalId: number;

  @ManyToOne(() => Village, (village) => village.id)
  @JoinColumn({ name:'villageId' })
  villageId: number;

  @ManyToOne(() => EuclBranch, (euclBranch) => euclBranch.id)
  @JoinColumn({ name:'branchId' })
  branchId: number;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name:'userId' })
  userId: number;

  @Column()
  arrival_time: Date;
}
