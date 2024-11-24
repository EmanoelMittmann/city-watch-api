import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { IUseCaseBaseContract } from '@shared/contracts';
import { RatingRepository } from '../repositories/rating.repository';
import { AddLikeUseCaseDto } from '../dtos/add-like.dto';
import { RatingSerializer } from '../serializers/rating.serializer';

@Injectable()
export class AddLikeRatingUseCase implements IUseCaseBaseContract {
    constructor(
        @Inject('RatingRepository')
        private readonly ratingRepository: RatingRepository,
    ) {}

    async execute(input: AddLikeUseCaseDto): Promise<void> {

        const toEntity = RatingSerializer.toEntityAddLikeRating({
            name: input.type,
            userId: input.userId,
            problemId: input.problemId
        })

        await this.ratingRepository.addLikeRating(toEntity);
    }
}
