import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    UseGuards,
} from '@nestjs/common';
import {
    AddLikeRatingUseCase,
    AddDislikeRatingUseCase,
    RemoveDislikeRatingUseCase,
    RemoveLikeRatingUseCase,
} from '../usecases';
import { AuthGuard } from '@modules/auth/guards/auth.guard';
import { GetUserAuth } from '@shared/decorators/get-user-auth.decorator';
import { UserEntity } from '@modules/user/entities/user.entity';
import { DEFAULT_NAME_RATING } from '@shared/enums/default-name-rating.enum';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { GetProblemByUuidUseCase } from '@modules/problems/usecases/get-problem-by-uuid.usecase';
import { ValidateExistRatingForUserUseCase } from '../usecases/validate-exist-rating-for-user.usecase';

@Controller('ratings')
@ApiTags('Ratings')
@ApiBearerAuth()
export class RatingController {
    constructor(
        private readonly addLikeRatingUseCase: AddLikeRatingUseCase,
        private readonly validateExistRatingForUserUseCase: ValidateExistRatingForUserUseCase,
        private readonly addDislikeRatingUseCase: AddDislikeRatingUseCase,
        private readonly getProblemByUuidUseCase: GetProblemByUuidUseCase,
        private readonly removeLikeRatingUseCase: RemoveLikeRatingUseCase,
        private readonly removeDislikeRatingUseCase: RemoveDislikeRatingUseCase,
    ) {}

    @Post('like')
    @UseGuards(AuthGuard)
    @HttpCode(HttpStatus.OK)
    async addLikeRating(
        @GetUserAuth() user: UserEntity,
        @Body() data: { problemId: string; name: string },
    ) {
        const getProblem = await this.getProblemByUuidUseCase.execute({
            uuid: data.problemId,
        });

        await this.validateExistRatingForUserUseCase.execute({
            problemId: getProblem.getId(),
            userId: user.getId(),
        })

        await this.addLikeRatingUseCase.execute({
            userId: user.getId(),
            problemId: getProblem.getId(),
            type: data.name as DEFAULT_NAME_RATING,
        });
    }

    @Post('dislike')
    @UseGuards(AuthGuard)
    @HttpCode(HttpStatus.OK)
    async addDislikeRating(
        @GetUserAuth() user: UserEntity,
        @Body() data: { problemId: string; name: string },
    ) {
        const getProblem = await this.getProblemByUuidUseCase.execute({
            uuid: data.problemId,
        });

        await this.validateExistRatingForUserUseCase.execute({
            problemId: getProblem.getId(),
            userId: user.getId(),
        })

        await this.addDislikeRatingUseCase.execute({
            userId: user.getId(),
            problemId: getProblem.getId(),
            type: data.name as DEFAULT_NAME_RATING,
        });
    }

    @Delete('remove-like')
    @UseGuards(AuthGuard)
    @HttpCode(HttpStatus.OK)
    async removeLike(@GetUserAuth() user: UserEntity) {
        await this.removeLikeRatingUseCase.execute({
            userId: user.getId(),
        });
    }

    @Delete('remove-dislike')
    @UseGuards(AuthGuard)
    @HttpCode(HttpStatus.OK)
    async removeDislike(@GetUserAuth() user: UserEntity) {
        await this.removeDislikeRatingUseCase.execute({
            userId: user.getId(),
        });
    }
}
