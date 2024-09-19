import {
    Body,
    Controller,
    HttpCode,
    HttpStatus,
    Param,
    ParseIntPipe,
    Post,
    Put,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SaveLocationDto } from '../dto/save-location.dto';
import { SaveLocationUseCase } from '../usecases/save-localization.usecase';
import { UpdateLocalizationDto } from '../dto/update-localization.dto';
import { UpdateLocalizationUseCase } from '../usecases/update-localization.usecase';

@ApiBearerAuth()
@ApiTags('Location')
@Controller('location')
export class LocationController {
    constructor(
        private readonly saveLocationUsecase: SaveLocationUseCase,
        private readonly updateLocazationUseCase: UpdateLocalizationUseCase,
    ) {}

    @Post()
    @HttpCode(HttpStatus.OK)
    async location(@Body() body: SaveLocationDto): Promise<void> {
        return this.saveLocationUsecase.execute(body);
    }

    @Put(':id')
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
