import { ApiProperty } from "@nestjs/swagger";

export class GetProblemDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    address: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    latitude: number;

    @ApiProperty()
    longitude: number;

    @ApiProperty()
    photo: string;

    @ApiProperty({ enum: [1, 2, 3, 4, 5] })
    problemType: number;
}
