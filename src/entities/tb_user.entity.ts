import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique:true})
  username: string;

  @Column({unique:true})
  password: string;

  @Column()
  role: string;

  @Column({type: 'date'})
  create_date: Date;
}
