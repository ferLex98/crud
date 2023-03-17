import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './user/entities';
import { PersonaModule } from './persona/persona.module';
import { Persona } from './persona/entities';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: '192.168.3.12',
    port: 5432,
    username: 'postgres',
    password: 'sa',
    database: 'pruebas',
    entities: [User, Persona],
    synchronize: true,
    logging: true
  }), UserModule, PersonaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
