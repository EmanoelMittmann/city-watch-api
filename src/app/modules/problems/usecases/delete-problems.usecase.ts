import { Inject } from "@nestjs/common";
import { IUseCaseBaseContract } from "@shared/contracts/base-use-case.contract";
import { IProblemRepository } from "../repositories/problem.repository";
import { DeleteProblemUseCaseInput } from "../dto/delete-problem.dto";

export class DeleteProblemUseCase implements IUseCaseBaseContract {
    constructor(
        @Inject('IProblemRepository')
        private readonly problemRepository: IProblemRepository
    ){}

    async execute(input: DeleteProblemUseCaseInput) {
        return this.problemRepository.deleteById(input.id)
    }
}