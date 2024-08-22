import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cell } from '../entities/tb_cell.entity';

@Injectable()
export class CellService {
  constructor(
    @InjectRepository(Cell)
    private cellRepository: Repository<Cell>,
  ) {}

  findAll(): Promise<Cell[]> {
    return this.cellRepository.find();
  }

  findOne(id: number): Promise<Cell> {
    return this.cellRepository.findOne({where:{id}});
  }

  create(cell: Cell): Promise<Cell> {
    return this.cellRepository.save(cell);
  }

  async update(id: number, cell: Partial<Cell>): Promise<void> {
    await this.cellRepository.update(id, cell);
  }

  async remove(id: number): Promise<void> {
    await this.cellRepository.delete(id);
  }
}
