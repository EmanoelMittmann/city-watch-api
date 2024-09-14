import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { RegisterUserDto } from "../dto/register-user.dto";
import { IBaseMessageFeedback } from "@shared/contracts/base-message-feedback.contract";
import { RegisterUserUseCase } from "../usecase/register-user.usecase";
import { GenerateTokenAccessUseCase } from "../usecase/generate-token-access.usecase";
import { LoginFirebaseUseCase } from "../usecase/login-firebase.usecase";
import { LoginUserDto } from "../dto/login-user.dto";

@Controller('auth')
export class AuthController{
    constructor(
        private readonly registerUserUseCase: RegisterUserUseCase,
        private readonly loginFirebaseUsecase: LoginFirebaseUseCase
    ){}

    @Post('/register')
    @HttpCode(HttpStatus.OK)
    async registerUser(@Body() body:RegisterUserDto): Promise<IBaseMessageFeedback> {
        return this.registerUserUseCase.execute(body)
    }

    @Post('/login')
    @HttpCode(HttpStatus.OK)
    async login(@Body() body:LoginUserDto): Promise<{token: string}> {
        return this.loginFirebaseUsecase.execute(body)
    }
}