import { WarningEntity } from "@modules/warnings/entities/warning.entity";
import { IWarningRepository } from "@modules/warnings/repositories/warning.repository";
import { PrismaService } from "../prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class WarningPostgresRepository implements IWarningRepository {
    constructor(
        private readonly prisma: PrismaService
    ){}

    async createWarning(input: WarningEntity): Promise<void> {
        await this.prisma.warning.create({
            data: {
                title: input.getTitle(),
                description: input.getDescription(),
                user: {
                    connect: {
                        uuid: input.getUser().getUuid()
                    }
                },
                localization: {
                   create: {
                        name: input.getLocalization().getName(),
                        description: input.getLocalization().getDescription(),
                        latitude: input.getLocalization().getLatitude(),
                        longitude: input.getLocalization().getLongitude(),
                        isIncident: input.getLocalization().getIsIncident(),
                        user: {
                            connect: {
                                uuid: input.getUser().getUuid()
                            }
                        }
                   }
                }
            }
        });
    }
}