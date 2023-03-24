import { IsNumber, IsString } from "class-validator";

export class CreatePostsDto {

    @IsString()
    description: String;

    @IsNumber()
    idPersona:number
}
