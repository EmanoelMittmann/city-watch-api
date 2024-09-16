import { LocationEntity } from "@modules/locations/entities/location.entity";
import { ILocationRepository } from "@modules/locations/repositories/location.repository";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";


@Injectable()
export class LocationPostgresRepository implements ILocationRepository{
    constructor(
        private readonly prisma: PrismaService
    ){}

    fetchLocation(): Promise<LocationEntity[]> {
        //TODO [] implement this service
        throw new Error('Method not implement')
    }

    async saveLocation(data: LocationEntity): Promise<void> {
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
}