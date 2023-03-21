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
     constructor(private personaService: PersonaService){
     }

    @Get()
    async getMany(){
        console.log('Se ejecuta getManu');
        const data = await this.personaService.getMany();
        return {
            message: data
        }
        
    }

    @Get(':id_persona')
    async getOne(
        @Param('id_persona', ParseIntPipe) id: number,
    ){
        console.log(typeof id);
        const data = await this.personaService.getOnePerson(id);
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

    @Put(':id_persona')
    async editPerson(
        @Param('id_persona') id:number,
        @Body() dto:EditPostDto
    ){
        return this.personaService.editPerson(id, dto)
    }

    @Delete(':id_persona')
    async deletePerson(
        @Param('id_persona') id:number
    ){
        const data = this.personaService.deletePerson(id)
        return {
            message: 'Deleted person',
            data
        }
    }


    @Get('/personaList/:username')
    async findPostByUsername( 
        @Param('username') username: string
      ){
      console.log(username);
      const data = await this.personaService.findPersonaByUsername(username);
      return{
        message: 'User information',
        data
      }
    }
}
