import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto, EditPostDto } from 'src/persona/dtos';
import { Repository } from 'typeorm';
import { CreatePostsDto } from './dtos/create-post.dto';
import { Publicacion } from './entities';


@Injectable()
export class PublicacionService {
    
    constructor(
        @InjectRepository(Publicacion)
        private readonly publicacionesRepository: Repository<Publicacion>
    ){}

    
    async getOne() {
        return this.publicacionesRepository.find();
    }

    
    async getMany(idPublicacion: number) {
        const existPost = await this.publicacionesRepository.findOneBy({idPublicacion});

        if(!existPost) throw new NotFoundException()

        return existPost;
    }

  
    async createPost(dto?: CreatePostsDto) {
        const post = await this.publicacionesRepository.create(dto as any);
        return await this.publicacionesRepository.save(post);
    }



    async updatePost(idPublicacion: number, dto: EditPostDto){
       const findPost = await this.publicacionesRepository.findOneBy({idPublicacion})
       if(!findPost) throw new BadRequestException('Post dont found');

       const editPost = Object.assign(findPost, dto);
       return await this.publicacionesRepository.save(editPost);

    }


    async deletePost(id_publicacion: number) {
        return await this.publicacionesRepository.delete(id_publicacion);
    }

    
  async getPublicacionByUsername( username: string){
    const publicacion = await this.publicacionesRepository
    .createQueryBuilder('post')
    .select([
        `per.id_persona as id_persona`,
        `per.nombre as nombre`,
        `per.apellido as apellido`,
        `post.id_publicacion as id`,
        `post.description as description`,
        `post.created_at as create_date`,
        `us.username as username`,
    ])
    .innerJoin('post.persona', 'per')
    .innerJoin('per.user','us')
    .where("us.username = :username", { username: username })
    .getRawMany();

    if (publicacion.length === 0) {
        throw new NotFoundException();
    }else{
        return publicacion;
    }

  }

}
