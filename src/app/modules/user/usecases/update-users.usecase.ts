import { IUseCaseBaseContract } from "@shared/contracts";
import { IUserRepository } from "../repositories/user.repository";
import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { UpdateUserUseCaseInputDto } from "../dtos/update-user-dto";
import { UserSerializer } from "../serializers/user.serializer";

@Injectable()
export class UpdateUserUseCase implements IUseCaseBaseContract {
    constructor(
        @Inject("IUserRepository")
        private readonly userRepository: IUserRepository
    ) {}

    async execute(input: UpdateUserUseCaseInputDto) {
        
        const existingUser = await this.userRepository.findByUuid(input.uuid);

        if (!existingUser) {
            throw new NotFoundException(`User not found`);
        }

        const serializer = UserSerializer.transformToUpdateUser(input);
        return this.userRepository.updateUser(serializer);
    }
}
