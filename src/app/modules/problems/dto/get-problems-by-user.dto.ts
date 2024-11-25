import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";


export class GetProblemsByUserDto {
    @ApiProperty()
    @IsString()
    uuid: string

    @ApiProperty()
    @IsString()
    name: string

    @ApiProperty()
    @IsString()
    createdAt: Date

    @ApiProperty()
    problemType: number
}