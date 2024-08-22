import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Village } from '../entities/tb_village.entity';

@Injectable()
export class VillageService {
  constructor(
    @InjectRepository(Village)
    private villageRepository: Repository<Village>,
  ) {}

  findAll(): Promise<Village[]> {
    return this.villageRepository.find();
  }

  findOne(id: number): Promise<Village> {
    return this.villageRepository.findOne({where:{id}});
  }

  create(village: Village): Promise<Village> {
    return this.villageRepository.save(village);
  }

  async update(id: number, village: Partial<Village>): Promise<void> {
    await this.villageRepository.update(id, village);
  }

  async remove(id: number): Promise<void> {
    await this.villageRepository.delete(id);
  }
}
