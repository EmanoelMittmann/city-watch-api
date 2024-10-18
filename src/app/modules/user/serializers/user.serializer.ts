import { UpdateUserUseCaseInputDto } from "../dtos/update-user-dto";
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

    static transformToUpdateUser(input: UpdateUserUseCaseInputDto) {
        const entity = new UserEntity()

        entity.setId(input.id);
        entity.setName(input.name);
        entity.setPassword(input.password)

        return entity;
    }
}
