import { Inject, Injectable } from "@nestjs/common";
import { IUseCaseBaseContract } from "@shared/contracts";
import { AddDislikeUseCaseDto } from "../dtos/add-dislike.dto";
import { RatingSerializer } from "../serializers/rating.serializer";
import { RatingRepository } from "../repositories/rating.repository";

@Injectable()
export class AddDislikeRatingUseCase implements IUseCaseBaseContract {

    constructor(
        @Inject('RatingRepository')
        private readonly ratingRepository: RatingRepository
    ){}

    async execute(input: AddDislikeUseCaseDto) { 
        
        const toEntity = RatingSerializer.toEntityAddLikeRating({
            name: input.type,
            userId: input.userId,
            problemId: input.problemId
        })

        await this.ratingRepository.addDislikeRating(toEntity);
    }
}