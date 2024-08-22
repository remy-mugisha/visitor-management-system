import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sector } from '../entities/tb_sector.entity';

@Injectable()
export class SectorService {
  constructor(
    @InjectRepository(Sector)
    private sectorRepository: Repository<Sector>,
  ) {}

  findAll(): Promise<Sector[]> {
    return this.sectorRepository.find();
  }

  findOne(id: number): Promise<Sector> {
    return this.sectorRepository.findOne({where:{id}});
  }

  create(sector: Sector): Promise<Sector> {
    return this.sectorRepository.save(sector);
  }

  async update(id: number, sector: Partial<Sector>): Promise<void> {
    await this.sectorRepository.update(id, sector);
  }

  async remove(id: number): Promise<void> {
    await this.sectorRepository.delete(id);
  }
}
