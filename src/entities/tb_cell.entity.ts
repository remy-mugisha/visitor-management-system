import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Sector } from './tb_sector.entity';

@Entity('tb_cell')
export class Cell {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Sector, (sector) => sector.id)
  @JoinColumn({ name:'sectorId'})
  @Column()
  sectorId: number;

  @Column()
  cell_name: string;
}
