import { IsString } from "class-validator";

export class CreatePostsDto {
    @IsString()
    description: String;
}
