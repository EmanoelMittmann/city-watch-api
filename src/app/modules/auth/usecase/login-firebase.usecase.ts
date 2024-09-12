import { IExternalAuthenticationRepository } from '@gateways/authentication/contract/authentication.contract';
import { Inject, Injectable } from '@nestjs/common';
import { IUseCaseBaseContract } from '@shared/contracts/base-use-case.contract';
import { RegisterUserDto } from '../dto/register-user.dto';
import { LoginUserDto } from '../dto/login-user.dto';

@Injectable()
export class LoginFirebaseUseCase implements IUseCaseBaseContract {
    constructor(
        @Inject('IExternalAuthenticationRepository')
        private readonly externalServiceRepository: IExternalAuthenticationRepository,
    ) {}

    async execute(input: LoginUserDto) {
        const { email, password } = input;

        return this.externalServiceRepository.signIn({
            email,
            password,
        });
    }
}
