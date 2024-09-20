import { Logger, Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { AuthController } from './controller/auth.controller';
import { RegisterUserUseCase } from './usecase/register-user.usecase';
import { GenerateTokenAccessUseCase } from './usecase/generate-token-access.usecase';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoginUseCase } from './usecase/login.usecase';
import { SecurityModule } from 'src/infra/security/security.module';

@Module({
    imports: [
        UserModule,
        JwtModule,
        ConfigModule,
        SecurityModule,
    ],
    controllers: [AuthController],
    providers: [
        RegisterUserUseCase,
        LoginUseCase,
        GenerateTokenAccessUseCase,
        JwtService,
    ],
    exports: [],
})
export class AuthModule {}
