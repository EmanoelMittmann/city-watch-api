import { UpdateUserUseCaseInputDto } from "../dtos/update-user-dto";
import { UserEntity } from "../entities/user.entity";

interface IRegisterUserSerialize {
    email: string;
    name: string;
    password: string;
    photo: string;
}

export class UserSerializer {
    static registerUserTransform(input: IRegisterUserSerialize) {
        const entity = new UserEntity();

        entity.setName(input.name);
        entity.setEmail(input.email);
        entity.setPassword(input.password);
        entity.setPhoto(input.photo);

        return entity;
    }

    static transformToUpdateUser(input: UpdateUserUseCaseInputDto) {
        const entity = new UserEntity();
    
        entity.setUuid(input.uuid);
    
        if (input.name !== undefined && input.name !== null && input.name !== "") {
            entity.setName(input.name);
        }
        if (input.password !== undefined && input.password !== null && input.password !== "") {
            entity.setPassword(input.password);
        }
        if (input.email !== undefined && input.email !== null && input.email !== "") {
            entity.setEmail(input.email);
        }

        if (input.photo !== undefined && input.photo !== null && input.photo !== "") {
            entity.setPhoto(input.photo);
        }
    
        return entity;
    }
    
}
