import { UserEntity } from '@modules/user/entities/user.entity';
import { RoleEnum } from '@shared/enums/role.enum';

export interface IFindByEmail {
    id: number;
    uuid: string;
    name: string;
    email: string;
    password: string;
    photo: string;
    role: RoleEnum;
    isActive: boolean;
}

export interface IFindById {
    id: number;
    uuid: string;
    name: string;
    email: string;
    password: string;
    photo: string;
    role: RoleEnum;
    createdAt: Date;
    isActive: boolean;
    updatedAt: Date;
}

export interface IFetchUser {
    id: number;
    uuid: string;
    name: string;
    email: string;
    photo: string;   
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
        entity.setPhoto(input.email);
        entity.setRole(input.role), entity.setPassword(input.password);

        return entity;
    }

    static transformToEntity(input: IFetchUser){
        const entity = new UserEntity()

        entity.setUuid(input.uuid)
        entity.setName(input.name)
        entity.setEmail(input.email)
        entity.setPhoto(input.photo)
        
        

        return entity
    }

    static transformManyToEntity(input: IFetchUser[]){
        return input.map(this.transformToEntity)
    }
}
