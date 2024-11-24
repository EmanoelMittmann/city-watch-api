import { Inject, Injectable } from "@nestjs/common";
import { IUseCaseBaseContract } from "@shared/contracts";
import { RatingRepository } from "../repositories/rating.repository";
import { RemoveLikeRatingUseCaseDto } from "../dtos/remove-like-rating.usecase";


@Injectable()
export class RemoveLikeRatingUseCase implements IUseCaseBaseContract {
    constructor(
        @Inject('RatingRepository') 
        private readonly ratingRepository: RatingRepository
    ){}    

    async execute(input: RemoveLikeRatingUseCaseDto) {
        const recoveryRatingId = await this.ratingRepository.findByUserId(input.userId)

        await this.ratingRepository.subsLikeRating(recoveryRatingId)
    }
}