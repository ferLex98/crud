import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, EditUserDto } from './dtos';
import { ApiTags } from '@nestjs/swagger';
import { compare } from 'bcryptjs';
import { User } from './entities';
import { IsJSON } from 'class-validator';
import { json } from 'stream/consumers';
import { string } from 'joi';

@ApiTags('Usuarios')
@Controller('user')
export class UserController {

  
  constructor(private userService: UserService) { }
  
  @Get()
  async getMany() {
    const data = await this.userService.getMany();
    return { data }
  }

  @Get(':id_user')
  async getOne(
    @Param('id_user') id: number,
  ) {
    const data = await this.userService.getOne(id);
    return { message: "Datos obtenidos", data }
  }
  
  @Get('/login/:username/:password')
  async login(
      @Param('username') username: string,
      @Param('password') password: string,
  ) {

    
      const data = await this.userService.login(username);
    //  console.log("Password:"+Json(data));
     
      return{
        message: 'User information',
        data
      }
      /*
      if(data && (await compare(password, password ))){
        
      }else{
        return{
          message: 'Invalid credentials',
        }
      }
      */

  }



 

  @Post()
  async createOne(
    @Body() createUserDto: CreateUserDto,
  
  ){  
    const data = await this.userService.createOne(createUserDto);
    return { message: 'User created', data }
  }

  @Put(':id_user')
  async editOne(
    @Param('id_user') id: number,
    @Body() dto: EditUserDto
  ) {
    const data = await this.userService.editOne(id, dto)
    return { message: 'User edited', data }
  }

  @Delete(':id_user')
  async deleteOne(
    @Param('id_user') id: number,
  ) {
    const data = await this.userService.deleteOne(id)
    return { message: 'User deleted', data }
  }


}