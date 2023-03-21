import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities';
import { Persona } from './entities';
import { PersonaController } from './persona.controller';
import { PersonaService } from './persona.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Persona]),
    
  ],
  controllers: [PersonaController],
  providers: [PersonaService],
  exports: [PersonaService]
})
export class PersonaModule {}
