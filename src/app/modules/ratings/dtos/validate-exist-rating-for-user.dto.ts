import { IsNumber } from "class-validator";


export class ValidateExistRatingForUserDto {
    @IsNumber()
    userId: number;

    @IsNumber()
    problemId: number
}