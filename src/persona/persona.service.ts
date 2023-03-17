import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto, EditPostDto } from './dtos';
import { Persona } from './entities';

@Injectable()
export class PersonaService {

   constructor(
        //Aqui se iyecta el repositorio desde le uqe se extiende capacidades
        @InjectRepository(Persona)
        private readonly personaRepository: Repository<Persona>
   ){}


   //Esto va a retornar una promesa
   //Cuanndo es una promesa el metodo se debe convertir a asincrono
   //Utilizar la palbr await para uqe sea un asincrono
    async getMany(): Promise <Persona[]>{
        return this.personaRepository.find()
    }

    async getOne(id: number){
        const exitsPerson = await this.personaRepository.findOneById(id)
        if(!exitsPerson) throw new NotFoundException()

        return exitsPerson;
    }

    async createPerson(dto?: CreatePostDto){
        const identificacion = await this.personaRepository.findOne({
            where: {
                identificacion: dto.identificacion
            }
        })

        if(identificacion) throw new BadRequestException('This user already exists');
        const persona = await this.personaRepository.create(dto as any);
        return await this.personaRepository.save(persona);
    }

    async editPerson(id: number, dto: EditPostDto){
       const findPersona = await this.personaRepository.findOneById(id)
       if(!findPersona) throw new BadRequestException('User nor fund');

       const editPerson = Object.assign(findPersona, dto);
       return await this.personaRepository.save(editPerson);
    }

    async deletePerson(id: number){
        return await this.personaRepository.delete(id);  
    }
}
