import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { get } from 'http';
import { string } from 'joi';
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

    
    @Put(':id_etiqueta')
    async update(
        @Param('id_etiqueta') id: number,
        @Body() dto:UpdateEtiquetaDto,
    ){
        const data = await this.etiquetaService.updateEtiqueta(id,dto);
        return { 
            message: "Etiqueta actualizada",
            data 
        }
    }


    @Delete(':id_etiqueta')
    async deteleEtiqueta(
        @Param('id_etiqueta') id: number
    ){
        const data = await this.etiquetaService.deleteEtiqueta(id)
    
        
        return {
            message: "Etiqueta eliminada",
            data
        }
    }

    @Get('/listaEtiquetados/:username')
    async getTicketByUser(
        @Param('username') username:string
    ){
       const data = await this.etiquetaService.getTicketByUser(username)

       const validateData = data.length

       if(data.length>0){
            return{
                message: "Etiqueta encontrada",
                data
            }
       }else{
            return{
                message: "Este usuario no esta etiquetado",
            }
       }

       
    }
  

}
