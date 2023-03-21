import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Publicacion } from './entities';
import { PublicacionController } from './publicacion.controller';
import { PublicacionService } from './publicacion.service';



@Module({
  imports: [
    TypeOrmModule.forFeature([Publicacion])
  ],
  controllers: [PublicacionController],
  providers: [PublicacionService],
  exports: [PublicacionService]
})
export class PublicacionesModule {}
