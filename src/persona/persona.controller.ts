import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EditPostDto } from './dtos';
import { CreatePostDto } from './dtos/create-post.dto';
import { PersonaService } from './persona.service';

@ApiTags('Personas')
@Controller('persona')
export class PersonaController {

     //Instanciamos el provider, con una dependencia del controlador
     //Readonly: Se utiliza para que esta clas no se ocupe en otra
     constructor(private readonly personaService: PersonaService){
     }

    @Get()
    async getMany(){
        const data = await this.personaService.getMany();
        return {
            message: data
        }
    }

    @Get(':id')
    async getOne(
        @Param('id', ParseIntPipe) id: number,
    ){
        console.log(typeof id);
        const data = await this.personaService.getOne(id);
        return{
            message: 'Results returned',
            data
        } 
    }

    @Post()
    async createPerson(
        @Body() dto:CreatePostDto
    ){
        return this.personaService.createPerson(dto);
    }

    @Put(':id')
    async editPerson(
        @Param('id') id:number,
        @Body() dto:EditPostDto
    ){
        return this.personaService.editPerson(id, dto)
    }

    @Delete(':id')
    async deletePerson(
        @Param('id') id:number
    ){
        const data = this.personaService.deletePerson(id)
        return {
            message: 'Deleted person',
            data
        }
    }
}
