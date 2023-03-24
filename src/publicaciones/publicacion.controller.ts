import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreatePostsDto, EditPostsDto } from './dtos';
import { PublicacionService } from './publicacion.service';

@Controller('publicacion')
export class PublicacionController {

    constructor(private readonly publicacionService: PublicacionService ){}

    @Get()
    async getOne() {
        const data = await this.publicacionService.getOne();
        return {
            message: "Data retrieved",
            data
        };
    }

    @Get(':id_publicacion')
    async getMany(
        @Param('id_publicacion') id:number,
    ) {
        const data = await this.publicacionService.getMany(id);
        return {
            message: "Data retrieved",
            data
        };
    }

    @Post()
    async createPost(
        @Body() dto: CreatePostsDto
    ) {
        return this.publicacionService.createPost(dto);
    }

    @Put(':id_publicacion')
    async updatePost(
        @Param('id_publicacion') id:number,
        @Body() dto: EditPostsDto,
    ) {
        const data = await this.publicacionService.updatePost(id, dto);
        return {
            message: "Data updated",
            data
        };
    }

    @Delete(':id_publicacion')
    async deletePost(
        @Param('id_publicacion') id:number,
    ) {
        const data = await this.publicacionService.deletePost(id);
        return {
            message: "Data deleted",
            data    
        };
    }

    @Get('/getList/:username')
    async getPublicacionByUsername( 
        @Param('username') username: string,
    ){
        const data = await this.publicacionService.getPublicacionByUsername(username);
        return {
            message: "Publicaciones by username",
            data
        };

    }
}
