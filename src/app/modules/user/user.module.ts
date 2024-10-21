import { Module } from "@nestjs/common";
import { UserController } from "./controllers/user.controller";
import { UpdateUserUseCase } from "./usecases/update-users.usecase";
import { UserPostgresRepository } from "@databases/orms/prisma/postgres/user.repository";


@Module({
    controllers: [UserController],
    providers: [
        {
            provide: 'IUserRepository',
            useClass: UserPostgresRepository
        },
        UpdateUserUseCase
    ],
    exports: ['IUserRepository']
})
export class UserModule {}