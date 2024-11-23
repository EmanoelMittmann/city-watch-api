import { RatingRepository } from '@modules/ratings/repositories/rating.repository';
import { Inject, Injectable } from '@nestjs/common';
import { IProblemRepository } from '../repositories/problem.repository';
import { DEFAULT_NAME_RATING } from '@shared/enums/default-name-rating.enum';

@Injectable()
export class CountRatingByProblemUuidUseCase {
    constructor(
        @Inject('IProblemRepository')
        private readonly problemRepository: IProblemRepository,
    ) {}

    async execute(input: { problemUuid: string; type: DEFAULT_NAME_RATING }) {
        const { problemUuid, type } = input;
        const ratings = await this.problemRepository.countByProblemUuid(
            problemUuid,
            type,
        );

        return ratings;
    }
}
