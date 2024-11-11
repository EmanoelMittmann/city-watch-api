import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class DeleteProblemUseCaseInput {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    uuid: string;

}