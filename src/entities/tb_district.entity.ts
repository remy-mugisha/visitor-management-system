import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_district')
export class District {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  district_name: string;
}
