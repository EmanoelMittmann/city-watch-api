import { LocalizationEntity } from "@modules/locations/entities/localization.entity";
import { WarningEntity } from "@modules/warnings/entities/warning.entity";

export interface IListAll {
    title: string,
    description: string,
    localization: {
        description: string;
        name: string;
        longitude: number;
        latitude: number;
        isIncident: boolean;
    };
}

export class WarningSerializer {
    static transformToEntityListAll(input: IListAll) {
        const entity = new WarningEntity();
        const localization = new LocalizationEntity();

        localization.setDescription(input.localization.description);
        localization.setName(input.localization.name);
        localization.setLatitude(input.localization.latitude);
        localization.setLongitude(input.localization.longitude);
        localization.setIsIncident(input.localization.isIncident);

        entity.setTitle(input.title);
        entity.setDescription(input.description);
        entity.setLocalization(localization);   

        return entity;
    }

    static transformManyToEntityListAll(input: IListAll[]) {
        return input.map(this.transformToEntityListAll);
    }
}