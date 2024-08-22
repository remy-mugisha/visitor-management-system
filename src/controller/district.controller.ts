import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { DistrictService } from 'src/service/district.service';
import { District } from '../entities/tb_district.entity';

@Controller('district')
export class DistrictController {
  constructor(private readonly districtService: DistrictService) {}

  @Get('getAll')
  findAll() {
    return this.districtService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.districtService.findOne(+id);
  }
  @Post('create')
  create(@Body() district: District) {
    return this.districtService.create(district);
  }
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.districtService.remove(+id);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() district: Partial<District>) {
    return this.districtService.update(+id, district);
  }
}
