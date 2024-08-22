import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Personal } from '../entities/tb_personal.entity';

@Injectable()
export class PersonalService {
  constructor(
    @InjectRepository(Personal)
    private personalRepository: Repository<Personal>,
  ) {}

  findAll(): Promise<Personal[]> {
    return this.personalRepository.find();
  }

  findOne(id: number): Promise<Personal> {
    return this.personalRepository.findOne({where:{id}});
  }

  create(personal: Personal): Promise<Personal> {
    return this.personalRepository.save(personal);
  }

  async update(id: number, personal: Partial<Personal>): Promise<void> {
    await this.personalRepository.update(id, personal);
  }

  async remove(id: number): Promise<void> {
    await this.personalRepository.delete(id);
  }
}
