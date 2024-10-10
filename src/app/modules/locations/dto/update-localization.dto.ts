import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class UpdateLocalizationDto{
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string

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
}


export class UpdateLocalizationUseCaseInputDto extends UpdateLocalizationDto{
    @IsNumber()
    id: number
}