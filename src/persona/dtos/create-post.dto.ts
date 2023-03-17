import { IsArray, IsEnum, IsNumber, IsString } from "class-validator";
import { EnumToString } from "src/helpers/enumToString";
import { PostCategory } from "../enums/post-categori.enum";

export class CreatePostDto {
    @IsString()
    identificacion: string;

    ///Validar ENUMS
    @IsEnum(PostCategory, {
        message: `Opcion invalida, utilize: ${EnumToString(PostCategory)} `
    })
    tipoIdentificacion: PostCategory;

    @IsString()
    nombre: string;

    @IsString()
    apellidos: string;

    @IsNumber()
    edad: number;

    @IsArray()
    @IsString({each: true})
    tags: string[];
    
    
    
}
