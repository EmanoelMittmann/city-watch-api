import { Module } from '@nestjs/common';
import { LocationController } from './controllers/locations.controllers';
import { SaveLocationUseCase } from './usecases/save-localization.usecase';
import { LocationPostgresRepository } from '@databases/orms/prisma/postgres/locations.repository';
import { UpdateLocalizationUseCase } from './usecases/update-localization.usecase';

@Module({
    controllers: [LocationController],
    providers:[
        {
            provide: 'ILocationRepository',
            useClass: LocationPostgresRepository
        },
        SaveLocationUseCase,
        UpdateLocalizationUseCase
    ]
})
export class LocationsModule {}
