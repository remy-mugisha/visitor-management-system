import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { District } from '../entities/tb_district.entity';

@Injectable()
export class DistrictService {
  constructor(
    @InjectRepository(District)
    private districtRepository: Repository<District>,
  ) {}

  findAll(): Promise<District[]> {
    return this.districtRepository.find();
  }

  findOne(id: number): Promise<District> {
    return this.districtRepository.findOne({where:{id}});
  }

  create(district: District): Promise<District> {
    return this.districtRepository.save(district);
  }

  async update(id: number, district: Partial<District>): Promise<void> {
    await this.districtRepository.update(id, district);
  }

  async remove(id: number): Promise<void> {
    await this.districtRepository.delete(id);
  }
}
