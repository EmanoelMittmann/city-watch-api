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
import { GetProblemByUuidUseCase } from '@modules/problems/usecases/get-problem-by-uuid.usecase';

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
        GetProblemByUuidUseCase,
        RemoveDislikeRatingUseCase,
        RemoveLikeRatingUseCase,
        ValidateExistRatingForUserUseCase
    ],
})
export class RatingModule {}
