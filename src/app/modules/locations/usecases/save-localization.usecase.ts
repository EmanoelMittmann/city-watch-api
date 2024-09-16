import { Inject, Injectable } from "@nestjs/common";
import { IUseCaseBaseContract } from "@shared/contracts/base-use-case.contract";
import { ILocationRepository } from "../repositories/location.repository";
import { SaveLocationDto } from "../dto/save-location.dto";
import { LocationSerializer } from "../serializers/locations.serializers";


@Injectable()
export class SaveLocationUseCase implements IUseCaseBaseContract {
    constructor(
        @Inject('ILocationRepository')
        private readonly locationRepository: ILocationRepository
    ){}
    
    execute(input: SaveLocationDto) {

        const serialize = LocationSerializer.transformToSaveLocation(input)

        return this.locationRepository.saveLocation(serialize)
    }
}