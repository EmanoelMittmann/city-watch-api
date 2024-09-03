import { IUserRepository } from '@modules/user/repositories/user.repository';
import { Inject } from '@nestjs/common';
import { IUseCaseBaseContract } from 'src/app/shared/contracts/base-use-case.contract';
import { RegisterUserDto } from '../dto/register-user.usecase';
import { UserSerializer } from '@modules/user/serializers/user.serializer';

export class RegisterUserUseCase implements IUseCaseBaseContract {
    constructor(
        @Inject('IUserRepository')
        private readonly userRepository: IUserRepository
    ) {}

    async execute(input: RegisterUserDto) {
        const serialize = UserSerializer.registerUserTransform(input)

        await this.userRepository.createUser(serialize)

        return {
            message: `User ${input.name} created successfully! `
        }
    }
}
