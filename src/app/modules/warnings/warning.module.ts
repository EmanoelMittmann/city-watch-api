import { Module } from "@nestjs/common";
import { WarningController } from "./controllers/warning.controller";
import { WarningPostgresRepository } from "@databases/orms/prisma/postgres/warning.repository";
import { LocalizationsModule } from "@modules/locations/localizations.module";

@Module(
    {
        imports: [LocalizationsModule],
        controllers: [WarningController],
        providers: [
            {
                provide: 'IWarningRepository',
                useClass: WarningPostgresRepository
            }
        ]
    }
)
export class WarningModule {}