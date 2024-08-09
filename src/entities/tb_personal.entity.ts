import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_personal')
export class Personal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  identity: string;

  @Column()
  create_date: Date;
}
