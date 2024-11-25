import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class GetUserByUuidDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    uuid: string;
}
