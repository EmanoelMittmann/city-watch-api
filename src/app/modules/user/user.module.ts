import { Module } from "@nestjs/common";
import { UserController } from "./controllers/user.controller";
import { UpdateUserUseCase } from "./usecases/update-users.usecase";
import { UserPostgresRepository } from "@databases/orms/prisma/postgres/user.repository";
import { GetUserUseCase } from "./usecases/get-users.usecase";
import { GetUserByUuidUseCase } from "./usecases/get-user-by-uuid.usecase";


@Module({
    controllers: [UserController],
    providers: [
        {
            provide: 'IUserRepository',
            useClass: UserPostgresRepository
        },
        UpdateUserUseCase,
        GetUserUseCase,
        GetUserByUuidUseCase
    ],
    exports: ['IUserRepository',GetUserByUuidUseCase]
})
export class UserModule {}