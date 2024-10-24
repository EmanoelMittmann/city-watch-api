import { PROBLEM_TYPE } from "@prisma/client";
import { SaveProblemDto } from "../dto/save-problem.dto";
import { UpdateProblemUseCaseInputDto } from "../dto/update-problem-dto";
import { ProblemEntity } from "../entities/problem.entity";
import { GetProblemDto } from "../dto/get-problem.dto";

export class ProblemSerializer {

    static mapNumberToProblemType(num: number): PROBLEM_TYPE {
        const values = Object.values(PROBLEM_TYPE);
        return values[num - 1];
    }

    static mapProblemTypeToNumber(problemType: PROBLEM_TYPE): number {
        const values = Object.values(PROBLEM_TYPE);
        return values.indexOf(problemType) + 1;
    }

    static transformToSaveProblem(input: SaveProblemDto) {
        const entity = new ProblemEntity();
        
        entity.setName(input.name);
        entity.setAddress(input.address);
        entity.setDescription(input.description);
        entity.setLatitude(input.latitude);
        entity.setLongitude(input.longitude);
        entity.setPhoto(input.photo);
        entity.setProblemType(this.mapNumberToProblemType(input.problemType));
  

        return entity;
    }

    static transformToUpdateProblem(input: UpdateProblemUseCaseInputDto) {
        const entity = new ProblemEntity();

        entity.setId(input.id);
        entity.setName(input.name);
        entity.setAddress(input.address);
        entity.setDescription(input.description);
        entity.setLatitude(input.latitude);
        entity.setLongitude(input.longitude);
        entity.setPhoto(input.photo);
        entity.setProblemType(this.mapNumberToProblemType(input.problemType));
        return entity;
    }

    static transformToGetProblem(input: ProblemEntity) {
        return {
            name: input.getName(),
            address: input.getAddress(),
            description: input.getDescription(),
            latitude: input.getLatitude(),
            longitude: input.getLongitude(),
            photo: input.getPhoto(),
            problemType: ProblemSerializer.mapProblemTypeToNumber(input.getProblemType()), // Chame o método estático pela classe
        };
    }

    static transformToManyGetProblem(input: ProblemEntity[]){
        return input.map(this.transformToGetProblem)
    }
}
