import { SaveLocationDto } from "@modules/locations/dto/save-localization.dto";
import { ApiProperty } from "@nestjs/swagger";
import { IsObject, IsString } from "class-validator";

export class CreateWarningDto{
    @ApiProperty()
    @IsString()
    title: string;

    @ApiProperty()
    @IsString()
    description: string;

    @ApiProperty()
    @IsObject()
    localization: Exclude<SaveLocationDto, 'userId'>
}

export class CreateWarningBehaviorDto extends CreateWarningDto{
    userId: string;
}