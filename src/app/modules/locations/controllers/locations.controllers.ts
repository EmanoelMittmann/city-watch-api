import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SaveLocationDto } from '../dto/save-location.dto';
import { SaveLocationUseCase } from '../usecases/save-localization.usecase';

@ApiBearerAuth()
@ApiTags('Location')
@Controller('location')
export class LocationController {
    constructor(private readonly saveLocationUsecase: SaveLocationUseCase) {}

    @Post()
    @HttpCode(HttpStatus.OK)
    async location(@Body() body: SaveLocationDto): Promise<void> {
        return this.saveLocationUsecase.execute(body)
    }
}
