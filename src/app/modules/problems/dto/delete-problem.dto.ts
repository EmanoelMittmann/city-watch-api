import { IsNumber } from "class-validator"

export class DeleteProblemUseCaseInput {
    @IsNumber()
    id: number


}