import { BadRequestException, Injectable, Logger } from '@nestjs/common';
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

    async updateEtiqueta(id_etiqueta: number, dto?:UpdateEtiquetaDto): Promise<Etiqueta> {
        const findPersona = await this.etiquetaRepository.findOneBy({id_etiqueta})
        if(!findPersona) throw new BadRequestException('Etiqueta no encontrada ');
 
        const editPerson = Object.assign(findPersona, dto);
        return await this.etiquetaRepository.save(editPerson);
    }

    async deleteEtiqueta(id_etiqueta:number){
        const findPersona = await this.etiquetaRepository.findOneBy({id_etiqueta})
        if(!findPersona) throw new BadRequestException('Etiqueta no encontrada');
        
        
        return await this.etiquetaRepository.delete(id_etiqueta); 
    }

    async getTicketByUser(username: string){
        const etiquetados = await this.etiquetaRepository
        .createQueryBuilder('et')
        .select([
            'us.username',
            'us.email',
            'et.id_etiqueta',
            'et.descripcion',
        ])
        .innerJoin("et.publicacion", 'pub')
        .innerJoin("pub.persona", 'per')
        .innerJoin("per.user", 'us')
        .where("us.username = :username", { username: username })
        .getRawMany()
        return etiquetados
    }
}
