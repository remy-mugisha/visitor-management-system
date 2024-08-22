import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { SectorService } from 'src/service/sector.service';
import { Sector } from '../entities/tb_sector.entity';

@Controller('sector')
export class SectorController {
  constructor(private readonly sectorService: SectorService) {}

  @Get('getAll')
  findAll() {
    return this.sectorService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.sectorService.findOne(+id);
  }
  @Post('create')
  create(@Body() sector: Sector) {
    return this.sectorService.create(sector);
  }
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.sectorService.remove(+id);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() sector: Partial<Sector>) {
    return this.sectorService.update(+id, sector);
  }
}
