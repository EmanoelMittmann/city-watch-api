import { ProblemEntity } from '@modules/problems/entities/problem.entity';
import { UserEntity } from '@modules/user/entities/user.entity';
import { PROBLEM_TYPE } from '@prisma/client';

export interface IFetchProblem {
    id: number;
    uuid: string;
    name: string;
    address: string;
    description: string;
    longitude: number;
    latitude: number;
    photo: string;
    problemType: PROBLEM_TYPE;
    createdAt: Date;
    updatedAt: Date;
    
}

export interface IFetchProblemCustom extends IFetchProblem{
    user: {
        name: string,
        photo: string
    }
}

export interface IFindByUserId {
    uuid: string;
    name: string;
    createdAt: Date;
    problemType: PROBLEM_TYPE;
}

export class ProblemSerializer {
    static transformToEntity(input: IFetchProblem) {
        const entity = new ProblemEntity();

        entity.setId(input.id);
        entity.setUuid(input.uuid);
        entity.setName(input.name);
        entity.setAddress(input.address);
        entity.setDescription(input.description);
        entity.setLatitude(input.latitude);
        entity.setLongitude(input.longitude);
        entity.setPhoto(input.photo);
        entity.setProblemType(input.problemType);
        entity.setCreatedAt(input.createdAt);
        entity.setUpdatedAt(input.updatedAt);

        return entity;
    }
    static transformToEntityByUuid(input: IFetchProblemCustom) {
        const entity = new ProblemEntity();
        const user = new UserEntity();

        entity.setId(input.id);
        entity.setUuid(input.uuid);
        entity.setName(input.name);
        entity.setAddress(input.address);
        entity.setDescription(input.description);
        entity.setLatitude(input.latitude);
        entity.setLongitude(input.longitude);
        entity.setPhoto(input.photo);
        entity.setProblemType(input.problemType);
        entity.setCreatedAt(input.createdAt);
        entity.setUpdatedAt(input.updatedAt);
        user.setName(input.user.name);
        user.setPhoto(input.user.photo);
        entity.setUser(user);

        return entity;
    }

    static transformManyToEntity(input: IFetchProblem[]) {
        return input.map(this.transformToEntity);
    }

    static transformFindByUserId(input: IFindByUserId) {
        const entity = new ProblemEntity();

        entity.setUuid(input.uuid);
        entity.setName(input.name);
        entity.setCreatedAt(input.createdAt);
        entity.setProblemType(input.problemType);

        return entity;
    }

    static transformManyFindByUserId(input: IFindByUserId[]) {
        return input.map(this.transformFindByUserId);
    }
}
