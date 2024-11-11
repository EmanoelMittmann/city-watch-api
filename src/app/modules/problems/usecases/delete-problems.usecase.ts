import { Inject, NotFoundException } from "@nestjs/common";
import { IUseCaseBaseContract } from "@shared/contracts/base-use-case.contract";
import { IProblemRepository } from "../repositories/problem.repository";
import { DeleteProblemUseCaseInput } from "../dto/delete-problem.dto";

export class DeleteProblemUseCase implements IUseCaseBaseContract {
    constructor(
        @Inject('IProblemRepository')
        private readonly problemRepository: IProblemRepository
    ) {}

    async execute(input: DeleteProblemUseCaseInput) {
        const problem = await this.problemRepository.findByUuid(input.uuid);

        if (!problem) {
            throw new NotFoundException(`This problem is not found`);
        }

        return this.problemRepository.deleteByUuid(input.uuid);
    }
}
