import { Inject } from "@nestjs/common"
import { IUseCaseBaseContract } from "@shared/contracts/base-use-case.contract"
import { IProblemRepository } from "../repositories/problem.repository"
import { UpdateProblemUseCaseInputDto } from "../dto/update-problem-dto"
import { ProblemSerializer } from "../serializers/problems.serializers"

export class UpdateProblemUseCase implements IUseCaseBaseContract{
    constructor(
        @Inject("IProblemRepository")
        private readonly problemRepository:IProblemRepository
    ){}

    async execute(input: UpdateProblemUseCaseInputDto) {
        const serializer = ProblemSerializer.transformToUpdateProblem(input)

        return this.problemRepository.updateProblem(serializer)
    }
} 