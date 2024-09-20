import { Module } from '@nestjs/common';
import { LocationController } from './controllers/localizations.controllers';
import { SaveLocationUseCase } from './usecases/save-localization.usecase';
import { LocationPostgresRepository } from '@databases/orms/prisma/postgres/locations.repository';
import { UpdateLocalizationUseCase } from './usecases/update-localization.usecase';
import { GetLocalizationUseCase } from './usecases/get-localizations.usecase';

@Module({
    controllers: [LocationController],
    providers:[
        {
            provide: 'ILocalizationRepository',
            useClass: LocationPostgresRepository
        },
        SaveLocationUseCase,
        UpdateLocalizationUseCase,
        GetLocalizationUseCase
    ]
})
export class LocalizationsModule {}
