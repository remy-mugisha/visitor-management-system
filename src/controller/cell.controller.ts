import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CellService } from 'src/service/cell.service';
import { Cell } from '../entities/tb_cell.entity';

@Controller('cell')
export class CellController {
  constructor(private readonly cellService: CellService) {}

  @Get('getAll')
  findAll() {
    return this.cellService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.cellService.findOne(+id);
  }
  @Post('create')
  create(@Body() cell: Cell) {
    return this.cellService.create(cell);
  }
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.cellService.remove(+id);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() cell: Partial<Cell>) {
    return this.cellService.update(+id, cell);
  }
}
