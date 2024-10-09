import { LocalizationEntity } from "@modules/locations/entities/localization.entity";
import { CreateWarningBehaviorDto, CreateWarningDto } from "../dtos/create-warning.dto";
import { WarningEntity } from "../entities/warning.entity";
import { UserEntity } from "@modules/user/entities/user.entity";


export class WarningSerializer{

    static tranformToEntityCreateWarning(data: CreateWarningBehaviorDto): WarningEntity{
        const entity = new WarningEntity();
        const user = new UserEntity();
        const localization = new LocalizationEntity();

        user.setUuid(data.userId)

        localization.setName(data.localization.name);
        localization.setDescription(data.localization.description);
        localization.setLatitude(data.localization.latitude);
        localization.setLongitude(data.localization.longitude);
        localization.setIsIncident(data.localization.isIncident)

        entity.setTitle(data.title);
        entity.setDescription(data.description);
        entity.setLocalization(localization);
        entity.setUser(user);

        return entity;  
    }
}