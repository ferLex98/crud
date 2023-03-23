
import { Type } from "@nestjs/class-transformer";
import { IsNumber, IsOptional } from "class-validator";

export class CreateEtiquetaDto {

    @IsNumber()
    @Type(() => Number)
    id_publicacion:number;

    @IsNumber()
    @Type(() => Number)
    id_persona:number;

    @IsOptional()
    descripcion: string;

}
