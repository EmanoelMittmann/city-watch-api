import { Inject, Injectable } from "@nestjs/common";
import { IUseCaseBaseContract } from "@shared/contracts";
import { RatingRepository } from "../repositories/rating.repository";
import { RemoveDislikeRatingUseCaseDto } from "../dtos/remove-dislike-rating.usecase";

@Injectable()
export class RemoveDislikeRatingUseCase implements IUseCaseBaseContract {
    constructor(
        @Inject('RatingRepository')
        private readonly ratingRepository: RatingRepository 
    ){}    

    async execute(input: RemoveDislikeRatingUseCaseDto) {
        const recoveryRatingId = await this.ratingRepository.findByUserId(input.userId)

        await this.ratingRepository.subsDislikeRating(recoveryRatingId)
    }
}