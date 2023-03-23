import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './user/entities';
import { PersonaModule } from './persona/persona.module';
import { Persona } from './persona/entities';
import { PublicacionesModule } from './publicaciones/publicacion.module';
import { Publicacion } from './publicaciones/entities';
import { EtiquetaModule } from './etiqueta/etiqueta.module';
import { Etiqueta } from './etiqueta/entities';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: '192.168.3.12',
    port: 5432,
    username: 'postgres',
    password: 'sa',
    database: 'pruebas',
    entities: [
      Publicacion,
      User,
      Persona,
      Etiqueta,
    ],
    synchronize: false,
    logging: true
  }), 
  UserModule,
  PersonaModule,
  PublicacionesModule,
  EtiquetaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

