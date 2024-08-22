import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EuclBranch } from '../entities/tb_eucl_branch.entity';

@Injectable()
export class EuclBranchService {
  constructor(
    @InjectRepository(EuclBranch)
    private euclRepository: Repository<EuclBranch>,
  ) {}

  findAll(): Promise<EuclBranch[]> {
    return this.euclRepository.find();
  }

  findOne(id: number): Promise<EuclBranch> {
    return this.euclRepository.findOne({where:{id}});
  }

  create(eucl: EuclBranch): Promise<EuclBranch> {
    return this.euclRepository.save(eucl);
  }

  async update(id: number, eucl: Partial<EuclBranch>): Promise<void> {
    await this.euclRepository.update(id, eucl);
  }

  async remove(id: number): Promise<void> {
    await this.euclRepository.delete(id);
  }
}
