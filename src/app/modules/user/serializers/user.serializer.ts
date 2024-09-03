import { UserEntity } from "../entities/user.entity";

interface IRegisterUserSerialize {
    email: string;
    name: string;
    password: string;
}

export class UserSerializer {
    static registerUserTransform(input: IRegisterUserSerialize) {
        const entity = new UserEntity()

        entity.setName(input.name)
        entity.setEmail(input.email),
        entity.setPassword(input.password)

        return entity
    }
}
