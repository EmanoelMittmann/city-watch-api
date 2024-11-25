import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { IUseCaseBaseContract } from '@shared/contracts';
import { RatingRepository } from '../repositories/rating.repository';
import { ValidateExistRatingForUserDto } from '../dtos/validate-exist-rating-for-user.dto';

@Injectable()
export class ValidateExistRatingForUserUseCase implements IUseCaseBaseContract {
    constructor(
        @Inject('RatingRepository')
        private readonly ratingRepository: RatingRepository,
    ) {}

    async execute(input: ValidateExistRatingForUserDto): Promise<void> {
        const exist = await this.ratingRepository.findByUserId(input.userId);

        if (exist) {
            if (exist.getProblem().getId() === input.problemId) {
                throw new ConflictException({
                    message: 'Rating already exists'
                })
            }
        }
    }
}
