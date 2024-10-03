import { UserEntity } from '@modules/user/entities/user.entity';
import { SaveLocationDto } from '../dto/save-localization.dto';
import { LocalizationEntity } from '../entities/localization.entity';
import { UpdateLocalizationUseCaseInputDto } from '../dto/update-localization.dto';
import { GetLocalizationDto } from '../dto/get-localization.dto';

export class LocalizationSerializer {
    static transformToSaveLocation(input: SaveLocationDto) {
        const entity = new LocalizationEntity();
        const userEntity = new UserEntity();

        userEntity.setId(input.userId);

        entity.setName(input.name);
        entity.setDescription(input.description);
        entity.setLatitude(input.latitude);
        entity.setLongitude(input.longitude);
        entity.setUser(userEntity);
        entity.setIsIncident(input.isIncident);

        return entity;
    }

    static transformToUpdateLocation(input: UpdateLocalizationUseCaseInputDto) {
        const entity = new LocalizationEntity();

        entity.setId(input.id);
        entity.setName(input.name);
        entity.setDescription(input.description);
        entity.setLatitude(input.latitude);
        entity.setLongitude(input.longitude);

        return entity;
    }

    static transformToGetLocalization(input: LocalizationEntity): GetLocalizationDto{
        return {
            name: input.getName(),
            description: input.getDescription(),
            latitude: input.getLatitude(),
            longitude: input.getLongitude(),
            isIncident: input.getIsIncident()
        }
    }

    static transformToManyGetLocalization(input: LocalizationEntity[]) : GetLocalizationDto[]{
        return input.map(this.transformToGetLocalization)
    }
}
