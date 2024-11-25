import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class GetUserDto{
    @ApiProperty()
    @IsString()
    uuid: string;

    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    email: string;

    @ApiProperty()
    @IsString()
    photo: string;
}