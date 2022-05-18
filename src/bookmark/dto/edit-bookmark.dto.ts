import { IsString,IsOptional,IsNotEmpty } from 'class-validator';

export class EditBookmarkDto{

    @IsString()
    @IsNotEmpty()
    title?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsNotEmpty()
    link?: string;
}
