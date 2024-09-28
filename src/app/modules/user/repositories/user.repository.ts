import { UserEntity } from "../entities/user.entity";

export interface IUserRepository {
    findById(id: number): Promise<UserEntity>
    findByUuid(uuid: string): Promise<UserEntity>
    findByEmail(email: string): Promise<UserEntity>
    createUser(user: UserEntity): Promise<void>
}