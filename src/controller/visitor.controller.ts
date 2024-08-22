import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { VisitorService } from 'src/service/visitor.service';
import { Visitor } from '../entities/tb_visitor.entity';

@Controller('visitor')
export class VisitorController {
  constructor(private readonly visitorService: VisitorService) {}

  @Get('getAll')
  findAll() {
    return this.visitorService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.visitorService.findOne(+id);
  }
  @Post('create')
  create(@Body() visitor: Visitor) {
    return this.visitorService.create(visitor);
  }
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.visitorService.remove(+id);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() visitor: Partial<Visitor>) {
    return this.visitorService.update(+id, visitor);
  }
}
