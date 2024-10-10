import { ConflictException, Inject, Injectable } from "@nestjs/common";
import { IUseCaseBaseContract } from "@shared/contracts/base-use-case.contract";
import { IProblemRepository } from "../repositories/problem.repository";
import { SaveProblemDto } from "../dto/save-problem.dto";
import { ProblemSerializer } from "../serializers/problems.serializers";

@Injectable()
export class SaveProblemUseCase implements IUseCaseBaseContract {
    constructor(
        @Inject('IProblemRepository')
        private readonly problemRepository: IProblemRepository
    ) {}

    async execute(input: SaveProblemDto) {
        const serialize = ProblemSerializer.transformToSaveProblem(input);

        const existingProblem = await this.problemRepository.findSameProblem(serialize);
        
        if (existingProblem) {
            throw new ConflictException('Este problema já foi registrado anteriormente.');
        }

        return this.problemRepository.saveProblem(serialize);
    }
}
