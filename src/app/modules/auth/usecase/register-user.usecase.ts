import { Inject } from '@nestjs/common';
import { IUseCaseBaseContract } from 'src/app/shared/contracts/base-use-case.contract';
import { RegisterUserDto } from '../dto/register-user.dto';
import { IExternalAuthenticationRepository } from '@gateways/authentication/contract/authentication.contract';

export class RegisterUserUseCase implements IUseCaseBaseContract {
    constructor(
        @Inject('IExternalAuthenticationRepository')
        private readonly externalServiceRepository: IExternalAuthenticationRepository,
    ) {}

    async execute(input: RegisterUserDto) {
        const {email,name,password} = input
    
        return this.externalServiceRepository.signUp({
            email,
            password
        })
    }
}
