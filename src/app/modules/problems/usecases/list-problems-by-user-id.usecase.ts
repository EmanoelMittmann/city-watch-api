import { Inject, Injectable } from '@nestjs/common';
import { CustomHeaderListing, IUseCaseBaseContract } from '@shared/contracts';
import { IProblemRepository } from '../repositories/problem.repository';
import { ProblemSerializer } from '../serializers/problems.serializers';

@Injectable()
export class ListProblemsByUserIdUseCase implements IUseCaseBaseContract {
    constructor(
        @Inject('IProblemRepository')
        private readonly problemRepository: IProblemRepository,
    ) {}

    async execute(userId: number) {
        const data = await this.problemRepository.findByUserid(userId);

        const transform = ProblemSerializer.transformToManyGetProblem(data);

        return new CustomHeaderListing({
            data: transform,
            size: data.length,
        });
    }
}
