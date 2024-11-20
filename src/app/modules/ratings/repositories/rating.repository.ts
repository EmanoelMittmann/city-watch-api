import { RatingEntity } from "../entities/rating.entity";

export interface RatingRepository {
    addRating(rating: RatingEntity): Promise<void>
    subsRating(rating: RatingEntity): Promise<void>
}