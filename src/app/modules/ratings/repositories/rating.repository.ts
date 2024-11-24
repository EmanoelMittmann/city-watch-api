import { RatingEntity } from "../entities/rating.entity";

export interface RatingRepository {
    addLikeRating(rating: RatingEntity): Promise<void>
    subsLikeRating(rating: RatingEntity): Promise<void>
    addDislikeRating(rating: RatingEntity): Promise<void>
    subsDislikeRating(rating: RatingEntity): Promise<void>
    findByUserId(userId: number): Promise<RatingEntity>
}