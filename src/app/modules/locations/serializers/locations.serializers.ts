import { UserEntity } from "@modules/user/entities/user.entity";
import { SaveLocationDto } from "../dto/save-location.dto";
import { LocationEntity } from "../entities/location.entity";

export class LocationSerializer {
    static transformToSaveLocation(input: SaveLocationDto){
        const entity = new LocationEntity()
        const userEntity = new UserEntity()

        userEntity.setId(input.userId)

        entity.setName(input.name)
        entity.setDescription(input.description)
        entity.setLatitude(input.latitude)
        entity.setLongitude(input.longitude)
        entity.setUser(userEntity)
        entity.setIsIncident(input.isIncident)

        return entity
    }
}