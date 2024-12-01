import { PROBLEM_TYPE } from '@prisma/client';
import { SaveProblemDto, SaveProblemUseCaseInput } from '../dto/save-problem.dto';
import { UpdateProblemUseCaseInputDto } from '../dto/update-problem-dto';
import { ProblemEntity } from '../entities/problem.entity';
import { GetProblemByUuidDto, GetProblemDto } from '../dto/get-problem.dto';
import { UserEntity } from '@modules/user/entities/user.entity';

export class ProblemSerializer {
    static mapNumberToProblemType(num: number): PROBLEM_TYPE {
        const values = Object.values(PROBLEM_TYPE);
        return values[num - 1];
    }

    static mapProblemTypeToNumber(problemType: PROBLEM_TYPE): number {
        const values = Object.values(PROBLEM_TYPE);
        return values.indexOf(problemType) + 1;
    }

    static transformToSaveProblem(input: SaveProblemUseCaseInput): ProblemEntity {
        const entity = new ProblemEntity();

        const user = new UserEntity();
        user.setId(input.userId);

        entity.setName(input.name);
        entity.setAddress(input.address);
        entity.setDescription(input.description);
        entity.setLatitude(input.latitude);
        entity.setLongitude(input.longitude);
        entity.setPhoto(input.photo);
        entity.setUser(user);
        entity.setProblemType(this.mapNumberToProblemType(input.problemType));

        return entity;
    }

    static transformToUpdateProblem(
        input: UpdateProblemUseCaseInputDto,
    ): ProblemEntity {
        const entity = new ProblemEntity();

        entity.setUuid(input.uuid);
        entity.setName(input.name);
        entity.setAddress(input.address);
        entity.setDescription(input.description);
        entity.setLatitude(input.latitude);
        entity.setLongitude(input.longitude);
        entity.setPhoto(input.photo);
        entity.setProblemType(this.mapNumberToProblemType(input.problemType));

        return entity;
    }

    static transformToGetProblem(input: ProblemEntity): GetProblemDto {
        return {
            uuid: input.getUuid(),
            name: input.getName(),
            address: input.getAddress(),
            description: input.getDescription(),
            latitude: input.getLatitude(),
            longitude: input.getLongitude(),
            photo: input.getPhoto(),
            problemType: ProblemSerializer.mapProblemTypeToNumber(
                input.getProblemType(),
            ),
            createdAt: input.getCreatedAt(),
            updatedAt: input.getUpdatedAt(),
        };
    }

    static transformToManyGetProblem(input: ProblemEntity[]) {
        return input.map(this.transformToGetProblem);
    }

    static transformToGetProblemByUuid(
        input: ProblemEntity,
        counts: { like: number; dislike: number },
    ): GetProblemByUuidDto {
        return {
            uuid: input.getUuid(),
            name: input.getName(),
            address: input.getAddress(),
            description: input.getDescription(),
            latitude: input.getLatitude(),
            longitude: input.getLongitude(),
            photo: input.getPhoto(),
            problemType: ProblemSerializer.mapProblemTypeToNumber(
                input.getProblemType(),
            ),
            createdAt: input.getCreatedAt(),
            updatedAt: input.getUpdatedAt(),
            user: {
                name: input.getUser().getName(),
                photo: input.getUser().getPhoto(),
            },
            dislike: counts.dislike,
            like: counts.like,
        };
    }

    static transformToGetProblemByUserId(input: ProblemEntity) {
        return {
            uuid: input.getUuid(),
            name: input.getName(),
            createdAt: input.getCreatedAt(),
            problemType: ProblemSerializer.mapProblemTypeToNumber(
                input.getProblemType(),
            ),
        };
    }

    static transformToManyGetProblemByUserId(input: ProblemEntity[]) {
        return input.map(this.transformToGetProblemByUserId)
    }
}
