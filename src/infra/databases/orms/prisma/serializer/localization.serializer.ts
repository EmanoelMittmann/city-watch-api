import { LocalizationEntity } from "@modules/locations/entities/localization.entity";

export interface IFetchLocation {
    id: number
    name: string;
    description: string;
    longitude: number;
    latitude: number;
    isIncident: boolean;
}

export class LocalizationSerializer {
    static transformToEntity(input: IFetchLocation){
        const entity = new LocalizationEntity()

        entity.setId(input.id)
        entity.setName(input.name)
        entity.setDescription(input.description)
        entity.setLatitude(input.latitude)
        entity.setLongitude(input.longitude)
        entity.setIsIncident(input.isIncident)

        return entity
    }

    static transformManyToEntity(input: IFetchLocation[]){
        return input.map(this.transformToEntity)
    }
}