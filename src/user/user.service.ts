import { Injectable, NotFoundException, BadRequestException, Logger, InternalServerErrorException } from '@nestjs/common';
import { createQueryBuilder, Repository } from 'typeorm';
import { User } from './entities';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto, EditUserDto } from './dtos';
import { Persona } from 'src/persona/entities';
import { plainToClass } from 'class-transformer';
import { hash } from 'bcryptjs';
import { PersonaService } from 'src/persona/persona.service';


@Injectable()
export class UserService {

  logger = new Logger();
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    
  ) { }

  async getMany() {
    return await this.userRepository.find()
  }

  async getOne(id: any) {
    const user = await this.userRepository.findOneById(id);
    if (!user) throw new NotFoundException('User does not exists')
    return user;
  }

  async createOne(dto?: CreateUserDto){
    console.log(dto);

    const newUser = this.userRepository.create(dto)
    const user = await this.userRepository.save(newUser);
    delete user.password;
    return user;

  }


  async editOne(id: any, dto: EditUserDto) {
    const user = await this.getOne(id)   
    const editedUser = Object.assign(user, dto);
    return await this.userRepository.save(editedUser);
  }
  
  async deleteOne(id: any) {
    const user = await this.getOne(id);
    return await this.userRepository.remove(user);
  }

  async login(username2: string){
    console.log(username2);
  
    const userLogin = await this.userRepository
    .createQueryBuilder('us')
    .select([
      `us.id as id`,
      `us.username as "username"`,
      `us.email as "email"`,
      `us.password as "password"`,
      `us.status as "status"`,
      `us.created_date as "created_date"`,
    ])
    .where('us.username= :username', { username: username2})
    .getRawMany()
   
    return userLogin;
  }
}
  