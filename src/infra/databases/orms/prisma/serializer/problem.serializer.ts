import { ProblemEntity } from "@modules/problems/entities/problem.entity";
import { PROBLEM_TYPE } from "@prisma/client";

export interface IFetchProblem {
    id: number
    name: string;
    address: string;
    description: string;
    longitude: number;
    latitude: number;
    photo: string;
    problemType: PROBLEM_TYPE;
}

export class ProblemSerializer {
    static transformToEntity(input: IFetchProblem){
        const entity = new ProblemEntity()

        entity.setId(input.id)
        entity.setName(input.name)
        entity.setAddress(input.address)
        entity.setDescription(input.description)
        entity.setLatitude(input.latitude)
        entity.setLongitude(input.longitude)
        entity.setPhoto(input.photo)
        entity.setProblemType(input.problemType)

        return entity
    }

    static transformManyToEntity(input: IFetchProblem[]){
        return input.map(this.transformToEntity)
    }
}