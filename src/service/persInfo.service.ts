import { Injectable } from "@nestjs/common";
import { CreatePersInfoDto } from "src/create-persInfo.dto";

@Injectable()
export class PersInfoService{
    private personals = [];
    createPersonal(createPersInfoDto: CreatePersInfoDto){
        const newPersonal = { id: Date.now(), ...createPersInfoDto }
        this.personals.push(newPersonal);
        return newPersonal;
    }
    findAll(){
        return this.personals;
    }
}