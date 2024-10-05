import { IsNumber } from "class-validator"

export class DeleteLocalizationUseCaseInput {
    @IsNumber()
    id: number

    @IsNumber()
    userId: number
}