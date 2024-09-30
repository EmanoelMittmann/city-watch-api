import { PROBLEM_TYPE } from "@prisma/client"
import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class UpdateProblemDto{
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    address: string

    @IsString()
    @IsNotEmpty()
    description: string

    @IsNumber()
    latitude: number

    @IsNumber()
    longitude: number

    @IsString()
    photo: string

    @IsEnum(PROBLEM_TYPE)
    problemType: PROBLEM_TYPE
}


export class UpdateProblemUseCaseInputDto extends UpdateProblemDto{
    @IsNumber()
    id: number
}