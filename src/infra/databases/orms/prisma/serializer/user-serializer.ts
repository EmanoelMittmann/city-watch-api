import { UserEntity } from '@modules/user/entities/user.entity';
import { RoleEnum } from '@shared/enums/role.enum';

export interface IFindByEmail {
    id: number;
    uuid: string;
    name: string;
    email: string;
    password: string;
    role: RoleEnum;
    isActive: boolean;
}

export interface IFindById {
    id: number;
    uuid: string;
    name: string;
    email: string;
    password: string;
    role: RoleEnum;
    createdAt: Date;
    isActive: boolean;
    updatedAt: Date;
}

export class UserSerializer {
    static FindByEmail(input: IFindByEmail): UserEntity {
        const entity = new UserEntity();

        entity.setUuid(input.uuid);
        entity.setPassword(input.password)
        entity.setIsActive(input.isActive)

        return entity;
    }

    static FindById(input: IFindById): UserEntity {
        const entity = new UserEntity();

        entity.setId(input.id);
        entity.setUuid(input.uuid);
        entity.setName(input.name);
        entity.setEmail(input.email);
        entity.setRole(input.role), entity.setPassword(input.password);

        return entity;
    }
}
