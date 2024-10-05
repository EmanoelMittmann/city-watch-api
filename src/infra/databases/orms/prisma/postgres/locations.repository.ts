import { LocalizationEntity } from "@modules/locations/entities/localization.entity";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { IFetchLocation, LocalizationSerializer } from "../serializer/localization.serializer";
import { ILocalizationRepository } from "@modules/locations/repositories/localization.repository";


@Injectable()
export class LocationPostgresRepository implements ILocalizationRepository{
    constructor(
        private readonly prisma: PrismaService
    ){}

    async fetchLocation(): Promise<LocalizationEntity[]> {
        const data = await this.prisma.localizations.findMany({
            select: {
                id: true,
                name: true,
                description: true,
                latitude: true,
                longitude: true,
                isIncident: true
            }
        }) as unknown as IFetchLocation[]

        return LocalizationSerializer.transformManyToEntity(data)
    }

    async saveLocation(data: LocalizationEntity): Promise<void> {
        await this.prisma.localizations.create({
            data: {
                name: data.getName(),
                description: data.getDescription(),
                latitude: data.getLatitude(),
                longitude: data.getLongitude(),
                userId: data.getUser().getId()
            }
        })
    }

    async updateLocation(data: LocalizationEntity): Promise<void> {
        await this.prisma.localizations.update({
            where:{
                id: data.getId()
            },
            data: {
                name: data.getName(),
                description: data.getDescription(),
                latitude: data.getLatitude(),
                longitude: data.getLongitude()
            }
        })
    }

    async deleteById(id: number, userId: number): Promise<void> {
        await this.prisma.localizations.delete({
            where: {
                id,
                userId
            }
        })  
    }
}