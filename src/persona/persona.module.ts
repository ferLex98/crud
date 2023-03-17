import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Persona } from './entities';
import { PersonaController } from './persona.controller';
import { PersonaService } from './persona.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Persona])
  ],
  controllers: [PersonaController],
  providers: [PersonaService]
  
})
export class PersonaModule {}
