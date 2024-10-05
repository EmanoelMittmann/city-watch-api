import { Inject } from "@nestjs/common"
import { IUseCaseBaseContract } from "@shared/contracts/base-use-case.contract"
import { IProblemRepository } from "../repositories/problem.repository"
import { ProblemSerializer } from "../serializers/problems.serializers"

export class GetProblemUseCase implements IUseCaseBaseContract {
    constructor(
        @Inject('IProblemRepository')
        private readonly problemRepository: IProblemRepository
    ){}

    async execute() {
        const getProblems = await this.problemRepository.fetchProblem()

        return ProblemSerializer.transformToManyGetProblem(getProblems)
    }
}