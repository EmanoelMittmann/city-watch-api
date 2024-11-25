import { Inject } from "@nestjs/common"
import { CustomHeaderListing, IUseCaseBaseContract } from "@shared/contracts"
import { IUserRepository } from "../repositories/user.repository"
import { UserSerializer } from "../serializers/user.serializer"

export class GetUserUseCase implements IUseCaseBaseContract {
    constructor(
        @Inject('IUserRepository')
        private readonly userRepository: IUserRepository
    ){}

    async execute() {
        const getUsers = await this.userRepository.fetchUser()

        const transform = UserSerializer.transformToManyGetUser(getUsers)

        return new CustomHeaderListing({
            data: transform,
            size: transform.length
        })
    }
}