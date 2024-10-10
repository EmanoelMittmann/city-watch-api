import { ApiProperty } from "@nestjs/swagger"
import { PROBLEM_TYPE } from "@prisma/client"
import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator"

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

    @ApiProperty()
    @IsEnum(PROBLEM_TYPE)
    problemType: PROBLEM_TYPE
}


export class UpdateProblemUseCaseInputDto extends UpdateProblemDto{
    @IsNumber()
    id: number
}