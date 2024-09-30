import { Inject, Injectable } from "@nestjs/common"
import { IUseCaseBaseContract } from "@shared/contracts/base-use-case.contract"
import { IProblemRepository } from "../repositories/problem.repository"
import { SaveProblemDto } from "../dto/save-problem.dto"
import { ProblemSerializer } from "../serializers/problems.serializers"

@Injectable()
export class SaveProblemUseCase implements IUseCaseBaseContract {
    constructor(
        @Inject('IProblemRepository')
        private readonly problemRepository: IProblemRepository
    ){}
    
    execute(input: SaveProblemDto) {

        const serialize = ProblemSerializer.transformToSaveProblem(input)

        return this.problemRepository.saveProblem(serialize)
    }
}