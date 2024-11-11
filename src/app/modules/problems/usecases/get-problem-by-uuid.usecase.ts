// usecases/get-problem-by-uuid.usecase.ts
import { Inject, NotFoundException } from '@nestjs/common';
import { IProblemRepository } from '../repositories/problem.repository';
import { GetProblemByUuidDto } from '../dto/get-problem-by-uuid.dto';
import { ProblemEntity } from '../entities/problem.entity';
import { ProblemSerializer } from '../serializers/problems.serializers';

export class GetProblemByUuidUseCase {
    constructor(
        @Inject('IProblemRepository')
        private readonly problemRepository: IProblemRepository
    ) {}

    async execute(input: GetProblemByUuidDto): Promise<ProblemEntity> {
        const problem = await this.problemRepository.findByUuid(input.uuid);

        if (!problem) {
            throw new NotFoundException(`Problem not found`);
        }

        return problem;
    }
}
