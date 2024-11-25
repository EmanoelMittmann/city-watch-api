import { Inject, NotFoundException } from "@nestjs/common";
import { GetUserByUuidDto } from "../dtos/get-user-by-uuid-dto";
import { UserEntity } from "../entities/user.entity";
import { IUserRepository } from "../repositories/user.repository";

export class GetUserByUuidUseCase {
    constructor(
        @Inject('IUserRepository')
        private readonly userRepository: IUserRepository
    ) {}

    async execute(input: GetUserByUuidDto): Promise<UserEntity> {
        const user = await this.userRepository.findByUuid(input.uuid);

        if (!user) {
            throw new NotFoundException(`User not found`);
        }

        return user;
    }
}