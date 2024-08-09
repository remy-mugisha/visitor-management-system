import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_eucl_branch')
export class EuclBranch {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  branch_name: string;

  @Column()
  branch_type: string;
}
