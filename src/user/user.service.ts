import { Injectable, NotFoundException, BadRequestException, Logger, InternalServerErrorException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto, EditUserDto } from './dtos';


@Injectable()
export class UserService {

  logger = new Logger();
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
    
  }

  async getMany() {
    return await this.userRepository.find()
  }

  async getOne(id: any) {
    const user = await this.userRepository.findOneById(id);
    if (!user) throw new NotFoundException('User does not exists')
    return user;
  }

  async createOne(dto?: CreateUserDto){
    const userExist = await this.userRepository.findOneBy({email: dto.email})
    if(userExist) throw new NotFoundException('User already exists')

    const newUser = this.userRepository.create(dto)
    const user = await this.userRepository.save(newUser);
    delete user.password;
    return user;

  }

/*
  async createOne(dto?: CreateUserDto) { 
    
    console.log('creando persona: dtoServi',dto);
    const personaExistente = await this.userRepository.findOneBy({
      email: dto.email,
    });

    if (personaExistente)
    throw new BadRequestException(
      'Persona ya registrada: ',
      dto.email,
    );

    const user = new User();

    const nuevaPersona = Object.assign(user, dto);

    console.log(':::: dto:  ', dto);
    console.log(':::: newUser Created:  ', nuevaPersona);

    try {
      const personaCrear = this.userRepository.create(nuevaPersona);
      console.log('Create user: ', personaCrear);

      const personaCreada = await this.userRepository.save(personaCrear);

      console.log('User created: ', personaCreada);

      return dto;
    } catch (err) {
      this.logger.error('Error persona.service, crearPersona: ', err.message);
      throw new InternalServerErrorException(err.message);
    }
  
    
  }
 */ 
  async editOne(id: any, dto: EditUserDto) {
    const user = await this.getOne(id)   
    const editedUser = Object.assign(user, dto);
    return await this.userRepository.save(editedUser);
  }
  
  async deleteOne(id: any) {
    const user = await this.getOne(id);
    return await this.userRepository.remove(user);
  }
}