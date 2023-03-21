import { PartialType } from "@nestjs/mapped-types";
import { CreatePostsDto } from "./create-post.dto";

export class EditPostsDto extends  PartialType(CreatePostsDto){
    
}
