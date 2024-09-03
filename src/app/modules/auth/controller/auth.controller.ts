import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { RegisterUserDto } from "../dto/register-user.usecase";
import { IBaseMessageFeedback } from "@shared/contracts/base-message-feedback.contract";
import { RegisterUserUseCase } from "../usecase/register-user.usecase";
import { GenerateTokenAccessUseCase } from "../usecase/generate-token-access.usecase";

@Controller('auth')
export class AuthController{
    constructor(
        private readonly registerUserUseCase: RegisterUserUseCase,
        private readonly generateAccessToken: GenerateTokenAccessUseCase
    ){}

    @Post('/register')
    @HttpCode(HttpStatus.OK)
    async registerUser(@Body() body:RegisterUserDto): Promise<IBaseMessageFeedback> {
        return this.registerUserUseCase.execute(body)
    }

    @Post('/login')
    @HttpCode(HttpStatus.OK)
    async login(@Body() body:any): Promise<{token: string}> {
        //return this.generateAccessToken.execute()
        return
    }
}