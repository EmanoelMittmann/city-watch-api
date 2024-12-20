import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class GetProblemDto {
    
    @ApiProperty()
    @IsString()
    uuid: string;

    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    address: string;

    @ApiProperty()
    @IsString()
    description: string;

    @ApiProperty()
    @IsNumber()
    latitude: number;

    @ApiProperty()
    @IsNumber()
    longitude: number;

    @ApiProperty()
    @IsString()
    photo: string;

    @ApiProperty({ enum: [1, 2, 3, 4, 5] })
    problemType: number;

    @ApiProperty()
    @IsString()
    createdAt: Date;

    @ApiProperty()
    @IsString()
    updatedAt: Date;
}


export class GetProblemByUuidDto extends GetProblemDto {
    user:{
        name: string,
        photo: string
    }
    like: number
    dislike: number
}