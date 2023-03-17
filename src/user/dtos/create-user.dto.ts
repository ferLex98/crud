import { IsEmail, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {

  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
  

}

