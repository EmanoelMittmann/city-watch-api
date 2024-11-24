import { ApiProperty } from "@nestjs/swagger";
import { DEFAULT_NAME_RATING } from "@shared/enums/default-name-rating.enum";
import { IsNumber, IsString } from "class-validator";

export class AddLikeUseCaseDto {
    @IsNumber()
    @ApiProperty()
    userId: number;

    @IsNumber()
    @ApiProperty()
    problemId: number;

    @ApiProperty()
    @IsString()
    type: DEFAULT_NAME_RATING;
}