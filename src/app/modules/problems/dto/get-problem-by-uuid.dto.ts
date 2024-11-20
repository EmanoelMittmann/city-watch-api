import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class GetProblemByUuidDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    uuid: string;
}
