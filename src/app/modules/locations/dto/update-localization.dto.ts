import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class UpdateLocalizationDto{
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
}


export class UpdateLocalizationUseCaseInputDto extends UpdateLocalizationDto{
    @IsNumber()
    id: number
}