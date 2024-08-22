import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { VillageService } from 'src/service/village.service';
import { Village } from '../entities/tb_village.entity';

@Controller('village')
export class VillageController {
  constructor(private readonly villageService: VillageService) {}

  @Get('getAll')
  findAll() {
    return this.villageService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.villageService.findOne(+id);
  }
  @Post('create')
  create(@Body() village: Village) {
    return this.villageService.create(village);
  }
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.villageService.remove(+id);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() village: Partial<Village>) {
    return this.villageService.update(+id, village);
  }
}
