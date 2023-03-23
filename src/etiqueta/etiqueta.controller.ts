import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateEtiquetaDto, UpdateEtiquetaDto } from './dtos';
import { EtiquetaService } from './etiqueta.service';


@Controller('etiqueta')
export class EtiquetaController {
    constructor(private etiquetaService: EtiquetaService){
    }

    @Get()
    async getAll() {
        const data = await this.etiquetaService.getAll();
        return { 
            message: "Todas las etiquetas",
            data 
        }
    }

    @Post()
    async create(
        @Body() dto:CreateEtiquetaDto,
    ){
        const data = await this.etiquetaService.createEtiqueta(dto);
        return { 
            message: "Etiqueta creada",
            data 
        }
    }

    @Put(':id_persona')
    async update(
        @Param('id_persona') id: number,
        @Body() dto:UpdateEtiquetaDto,
    ){
        const data = await this.etiquetaService.updateEtiqueta(id,);
        return { 
            message: "Etiqueta actualizada",
            data 
        }
    }


  

}
