import { IsEmail, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {

  id:number;

  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  id_persona: number;
  

}

