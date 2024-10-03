import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { IUseCaseBaseContract } from '@shared/contracts/base-use-case.contract';
import { LoginUserDto } from '../dto/login-user.dto';
import { IUserRepository } from '@modules/user/repositories/user.repository';
import { SecurityContract } from 'src/infra/security/contract/security.contract';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class LoginUseCase implements IUseCaseBaseContract {
    constructor(
        @Inject('IUserRepository')
        private readonly userRepository: IUserRepository,
        @Inject('SecurityContract')
        private readonly securityRepository: SecurityContract,
        private readonly jwtService: JwtService,
        private readonly config: ConfigService
    ) {}

    async execute(input: LoginUserDto) {
        const data = await this.validateUser(input);

        const access_token = await this.jwtService.signAsync(data, {
            secret: this.config.get('JWT_SECRET')
        });

        return {
            access_token,
        };
    }

    async validateUser(
        input: LoginUserDto,
    ): Promise<{ sub: string; username: string }> {
        const findUserByEmail = await this.userRepository.findByEmail(
            input.email,
        );

        if (!findUserByEmail) {
            this.exceptionLogin();
        }

        const verifyPass = this.securityRepository.comparePass(
            input.password,
            findUserByEmail.getPassword(),
        );

        if (!verifyPass) {
            this.exceptionLogin();
        }

        if (!findUserByEmail.getIsActive()) {
            this.exceptionLogin();
        }

        return {
            sub: findUserByEmail.getUuid(),
            username: findUserByEmail.getEmail(),
        };
    }

    exceptionLogin() {
        throw new BadRequestException({
            message: 'Usuário ou senha Inválida',
        });
    }
}
