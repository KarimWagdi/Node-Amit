import { IsString, Length, IsUrl, IsNotEmpty } from 'class-validator';

export class CategoryRequest {
    @IsString()
    @Length(1, 100)
    name: string;

    @IsString()
    @IsNotEmpty()
    image: string;
}