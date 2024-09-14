import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { AuthController } from './controller/auth.controller';
import { RegisterUserUseCase } from './usecase/register-user.usecase';
import { GenerateTokenAccessUseCase } from './usecase/generate-token-access.usecase';
import { AuthenticationModule } from '@gateways/authentication/authentication.module';
import { ConfigModule } from '@nestjs/config';
import { LoginFirebaseUseCase } from './usecase/login-firebase.usecase';

@Module({
    imports: [UserModule, AuthenticationModule, ConfigModule],
    controllers: [AuthController],
    providers: [
        RegisterUserUseCase,
        LoginFirebaseUseCase,
        GenerateTokenAccessUseCase,
        JwtService,
    ],
    exports: [],
})
export class AuthModule {}
