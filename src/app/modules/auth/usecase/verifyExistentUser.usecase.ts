import { IUserRepository } from "@modules/user/repositories/user.repository";
import { ConflictException, Inject, Injectable } from "@nestjs/common";
import { IUseCaseBaseContract } from "@shared/contracts/base-use-case.contract";

@Injectable()
export class VerifyExistentUserUseCase implements IUseCaseBaseContract {
    constructor(
        @Inject('IUserRepository')
        private readonly userRepository: IUserRepository
    ){}

    async execute(email: string) {
        const isExist = await this.userRepository.findByEmail(email);

        if(isExist){
            throw new ConflictException({
                message: "Usuario existente com este e-mail"
            })
        }
    }
}