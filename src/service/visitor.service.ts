import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Visitor } from '../entities/tb_visitor.entity';

@Injectable()
export class VisitorService {
  constructor(
    @InjectRepository(Visitor)
    private visitorRepository: Repository<Visitor>,
  ) {}

  findAll(): Promise<Visitor[]> {
    return this.visitorRepository.find();
  }

  findOne(id: number): Promise<Visitor> {
    return this.visitorRepository.findOne({where:{id}});
  }

  create(visitor: Visitor): Promise<Visitor> {
    return this.visitorRepository.save(visitor);
  }

  async update(id: number, visitor: Partial<Visitor>): Promise<void> {
    await this.visitorRepository.update(id, visitor);
  }

  async remove(id: number): Promise<void> {
    await this.visitorRepository.delete(id);
  }
}
