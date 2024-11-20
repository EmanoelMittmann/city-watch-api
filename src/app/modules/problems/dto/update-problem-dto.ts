import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class UpdateProblemDto{
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string

    @ApiProperty()
    @IsString()
    address: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    description: string

    @ApiProperty()
    @IsNumber()
    latitude: number

    @ApiProperty()
    @IsNumber()
    longitude: number

    @ApiProperty()
    @IsString()
    photo: string

    @ApiProperty({ enum: [1, 2, 3, 4, 5] })
    @IsNumber()
    problemType: number;
}


export class UpdateProblemUseCaseInputDto extends UpdateProblemDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    uuid: string;
}