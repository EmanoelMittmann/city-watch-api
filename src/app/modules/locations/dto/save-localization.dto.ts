import { IsBoolean, IsDecimal, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class SaveLocationDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    description: string

    @IsNumber()
    latitude: number

    @IsNumber()
    longitude: number

    @IsBoolean()
    isIncident?: boolean

    @IsNumber()
    userId: number
}