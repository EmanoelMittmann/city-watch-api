import { Module } from "@nestjs/common";
import { UserPostgresRepository } from "src/infra/databases/orms/prisma/postgres/user-repository";


@Module({
    imports: [],
    controllers: [],
    providers: [
        {
            provide: 'IUserRepository',
            useClass: UserPostgresRepository
        }
    ],
    exports: ['IUserRepository']
})
export class UserModule {}