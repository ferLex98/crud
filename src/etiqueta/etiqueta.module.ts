import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnumToString } from 'src/helpers/enumToString';
import { Etiqueta } from './entities/etiqueta.entity';
import { EtiquetaController } from './etiqueta.controller';
import { EtiquetaService } from './etiqueta.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([Etiqueta])
  ],
  controllers: [EtiquetaController],
  providers: [EtiquetaService],
  exports: [EtiquetaService]  
})
export class EtiquetaModule {}


//commennt 
                      