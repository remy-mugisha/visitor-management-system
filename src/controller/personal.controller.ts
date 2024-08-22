import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PersonalService } from 'src/service/personal.service';
import { Personal } from '../entities/tb_personal.entity';

@Controller('personal')
export class PersonalController {
  constructor(private readonly personalService: PersonalService) {}

  @Get('getAll')
  findAll() {
    return this.personalService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.personalService.findOne(+id);
  }
  @Post('create')
  create(@Body() personal: Personal) {
    return this.personalService.create(personal);
  }
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.personalService.remove(+id);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() personal: Partial<Personal>) {
    return this.personalService.update(+id, personal);
  }
}
