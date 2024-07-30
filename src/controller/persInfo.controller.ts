import { Controller, Post, Body, Get } from "@nestjs/common";
import { CreatePersInfoDto } from "src/create-persInfo.dto";
import { PersInfoService } from "src/service/persInfo.service";

@Controller('api')
export class PersInfoController {
    constructor(private readonly persInfoService: PersInfoService) {}

    @Post()
    create(@Body() createPersInfoDto: CreatePersInfoDto) {
      return this.persInfoService.createPersonal(createPersInfoDto);
    }
    

  @Get()
  findAll() {
    return this.persInfoService.findAll();
  }
}
