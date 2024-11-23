import { RatingPostgresRepository } from '@databases/orms/prisma/postgres/rating.repository';
import { Module } from '@nestjs/common';
import {
    AddDislikeRatingUseCase,
    AddLikeRatingUseCase,
    RemoveDislikeRatingUseCase,
    RemoveLikeRatingUseCase,
    ValidateExistRatingForUserUseCase,
} from './usecases';
import { RatingController } from './controllers/rating.controller';
import { ProblemsModule } from '@modules/problems/problems.module';

@Module({
    imports: [ProblemsModule],
    controllers: [RatingController],
    providers: [
        {
            provide: 'RatingRepository',
            useClass: RatingPostgresRepository,
        },
        AddLikeRatingUseCase,
        AddDislikeRatingUseCase,
        RemoveDislikeRatingUseCase,
        RemoveLikeRatingUseCase,
        ValidateExistRatingForUserUseCase
    ],
})
export class RatingModule {}
