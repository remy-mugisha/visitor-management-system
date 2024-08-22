import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { EuclBranchService } from 'src/service/eucl_branch.service';
import { EuclBranch } from '../entities/tb_eucl_branch.entity';

@Controller('euclBranch')
export class EuclBranchController {
  constructor(private readonly euclBranchService: EuclBranchService) {}

  @Get('getAll')
  findAll() {
    return this.euclBranchService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.euclBranchService.findOne(+id);
  }
  @Post('create')
  create(@Body() euclBranch: EuclBranch) {
    return this.euclBranchService.create(euclBranch);
  }
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.euclBranchService.remove(+id);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() euclBranch: Partial<EuclBranch>) {
    return this.euclBranchService.update(+id, euclBranch);
  }
}
