import { SaveProblemDto } from "../dto/save-problem.dto";
import { UpdateProblemUseCaseInputDto } from "../dto/update-problem-dto";
import { ProblemEntity } from "../entities/problem.entity";

export class ProblemSerializer {
    static transformToSaveProblem(input: SaveProblemDto) {
        const entity = new ProblemEntity();
        
        entity.setName(input.name);
        entity.setAddress(input.address);
        entity.setDescription(input.description);
        entity.setLatitude(input.latitude);
        entity.setLongitude(input.longitude);
        entity.setPhoto(input.photo);
        entity.setProblemType(input.problemType);
  

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
        entity.setProblemType(input.problemType);
        return entity;
    }

    static transformToGetProblem(input: ProblemEntity){
        return {
            name: input.getName(),
            address: input.getAddress(),
            description: input.getDescription(),
            latitude: input.getLatitude(),
            longitude: input.getLongitude(),
            photo: input.getPhoto(),
            problemType: input.getProblemType(),
          
        }
    }

    static transformToManyGetProblem(input: ProblemEntity[]){
        return input.map(this.transformToGetProblem)
    }
}
