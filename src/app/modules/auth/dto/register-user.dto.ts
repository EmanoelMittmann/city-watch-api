import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { LoginUserDto } from "./login-user.dto";
import { ApiProperty } from "@nestjs/swagger";

export class RegisterUserDto extends LoginUserDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string

    @ApiProperty()
    @IsString()
    photo: string

}