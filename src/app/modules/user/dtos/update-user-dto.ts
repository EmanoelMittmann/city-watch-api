import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateUserDto {
    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    name?: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    email?: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    password?: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    photo?: string;
}

export class UpdateUserUseCaseInputDto extends UpdateUserDto {
    @IsUUID()
    uuid: string;
}
