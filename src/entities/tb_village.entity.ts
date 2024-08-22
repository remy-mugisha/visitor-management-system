import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Cell } from './tb_cell.entity';

@Entity('tb_village')
export class Village {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Cell, (cell) => cell.id)
  @JoinColumn({ name:'cellId'})
  @Column()
  cellId: number;

  @Column()
  village_name: string;
}
