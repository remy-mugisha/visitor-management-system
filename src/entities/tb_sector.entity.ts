import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { District } from './tb_district.entity';

@Entity('tb_sector')
export class Sector {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => District, (district) => district.id)
  @JoinColumn({ name:'districtId'})
  @Column()
  districtId: number;

  @Column()
  sector_name: string;
}
