import { PartialType, OmitType } from "@nestjs/mapped-types";
import { CreatePostDto } from "./create-post.dto";

export class EditPostDto extends PartialType(
     //Se utiliza cuando se quiere evitar que se editen campos en especifico
    ///-----
    OmitType(CreatePostDto, 
        ['identificacion','tipoIdentificacion'] as const 
    ),
    ///-----
){}
