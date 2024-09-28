import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    ParseIntPipe,
    Post,
    Put,
    UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger';
import { SaveLocationDto } from '../dto/save-localization.dto';
import { SaveLocationUseCase } from '../usecases/save-localization.usecase';
import { UpdateLocalizationDto } from '../dto/update-localization.dto';
import { UpdateLocalizationUseCase } from '../usecases/update-localization.usecase';
import { GetLocalizationUseCase } from '../usecases/get-localizations.usecase';
import { AuthGuard } from '@modules/auth/guards/auth.guard';
import { GetUserAuth } from '@shared/decorators/get-user-auth.decorator';
import { UserEntity } from '@modules/user/entities/user.entity';
import { DeleteLocalizationUseCase } from '../usecases/delete-localizations.usecase';

@ApiBearerAuth()
@ApiTags('Location')
@Controller('location')
export class LocationController {
    constructor(
        private readonly saveLocationUsecase: SaveLocationUseCase,
        private readonly updateLocazationUseCase: UpdateLocalizationUseCase,
        private readonly getLocalizationUseCase: GetLocalizationUseCase,
        private readonly deleteLocalizationUseCase: DeleteLocalizationUseCase
    ) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard)
    async fetchLocalization(){
        return this.getLocalizationUseCase.execute()
    }

    @Post()
    @UseGuards(AuthGuard)
    @HttpCode(HttpStatus.OK)
    async location(@Body() body: SaveLocationDto): Promise<void> {
        return this.saveLocationUsecase.execute(body);
    }

    @Delete(':id')
    @UseGuards(AuthGuard)
    @ApiParam({
        name: "id",
        required: true,
        type: Number
    })
    async deleteLocalization(
        @Param('id', ParseIntPipe) id: number,
        @GetUserAuth() user: any
    ): Promise<void> {
        const userId = user._id as any
        return this.deleteLocalizationUseCase.execute({
            id,
            userId
        })
    }

    @Put(':id')
    @UseGuards(AuthGuard)
    @ApiParam({
        name: 'id',
        required: true,
        type: Number
    })
    @HttpCode(HttpStatus.OK)
    async updateLocation(
        @Body() body: UpdateLocalizationDto,
        @Param('id', ParseIntPipe) param: number,
    ): Promise<void> {

        return this.updateLocazationUseCase.execute({
            ...body,
            id: param,
        })
    }
}
