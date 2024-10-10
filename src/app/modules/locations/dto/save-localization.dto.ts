import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsDecimal, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class SaveLocationDto {
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

    @ApiProperty()
    @IsBoolean()
    isIncident?: boolean

    @ApiProperty()
    @IsNumber()
    userId: number
}