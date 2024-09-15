import { ConflictException, Inject } from '@nestjs/common';
import { IUseCaseBaseContract } from 'src/app/shared/contracts/base-use-case.contract';
import { RegisterUserDto } from '../dto/register-user.dto';
import { IUserRepository } from '@modules/user/repositories/user.repository';
import { UserSerializer } from '@modules/user/serializers/user.serializer';
import { SecurityContract } from 'src/infra/security/contract/security.contract';

export class RegisterUserUseCase implements IUseCaseBaseContract {
    constructor(
        @Inject('IUserRepository')
        private readonly userRepository: IUserRepository,
        @Inject('SecurityContract')
        private readonly securityRepository: SecurityContract
    ) {}

    async execute(input: RegisterUserDto) {
        const hashedPass = this.securityRepository.hashPass(input.password)

        await this.userRepository.createUser(UserSerializer.registerUserTransform({
            password: hashedPass,
            email: input.email,
            name: input.name
        }))

        return {
            message: "Usuario criado com sucesso"
        }
    }

    async validateInputs(input: RegisterUserDto){
        const findPossibleUser = await this.userRepository.findByEmail(input.email)

        if(findPossibleUser){
            throw new ConflictException({
                message: 'Já existe um usuario cadastrado com esse email'
            })
        }
    }
}
