import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EditPostDto } from 'src/persona/dtos';
import { Repository } from 'typeorm';
import { CreateEtiquetaDto, UpdateEtiquetaDto } from './dtos';
import { Etiqueta } from './entities';

@Injectable()
export class EtiquetaService {
    logger = new Logger();
    constructor(
        @InjectRepository(Etiqueta) private readonly etiquetaRepository: Repository<Etiqueta>,
    ) {}

    async getAll(){
        const all = await this.etiquetaRepository.find();
        return all;
    }

    async createEtiqueta(dto?:CreateEtiquetaDto) {
        const etiqueta = await this.etiquetaRepository.create(dto);
        const guardarEtiqueta = await this.etiquetaRepository.save(etiqueta);

        return guardarEtiqueta;
    }

    async updateEtiqueta(id: number, dto?:UpdateEtiquetaDto): Promise<Etiqueta> {
        const findPersona = await this.etiquetaRepository.findOneBy({id_etiqueta})
        if(!findPersona) throw new BadRequestException('User nor fund');
 
        const editPerson = Object.assign(findPersona, dto);
        return await this.personaRepository.save(editPerson);
    }
}
