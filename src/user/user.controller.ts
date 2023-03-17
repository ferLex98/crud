import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, EditUserDto } from './dtos';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Usuarios')
@Controller('user')
export class UserController {

  
  constructor(private userService: UserService) { }
  @Get()
  async getMany() {
    const data = await this.userService.getMany();
    return { data }
  }

  @Get(':id')
  async getOne(
    @Param('id') id: number,
  ) {
    const data = await this.userService.getOne(id);
    return { message: "Datos obtenidos", data }
  }


  @Post()
  async createOne(
    @Body() createUserDto: CreateUserDto
  ){
    const data = await this.userService.createOne(createUserDto);
    return { message: 'User created', data }
  }

  @Put(':id')
  async editOne(
    @Param('id') id: number,
    @Body() dto: EditUserDto
  ) {
    const data = await this.userService.editOne(id, dto)
    return { message: 'User edited', data }
  }

  @Delete(':id')
  async deleteOne(
    @Param('id') id: number,
  ) {
    const data = await this.userService.deleteOne(id)
    return { message: 'User deleted', data }
  }


}