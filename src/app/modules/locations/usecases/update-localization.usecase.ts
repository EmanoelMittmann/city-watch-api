import { Inject } from "@nestjs/common";
import { IUseCaseBaseContract } from "@shared/contracts/base-use-case.contract";
import { ILocationRepository } from "../repositories/location.repository";
import { UpdateLocalizationDto, UpdateLocalizationUseCaseInputDto } from "../dto/update-localization.dto";
import { LocationSerializer } from "../serializers/locations.serializers";

export class UpdateLocalizationUseCase implements IUseCaseBaseContract{
    constructor(
        @Inject("ILocationRepository")
        private readonly locationRepository:ILocationRepository
    ){

    }

    async execute(input: UpdateLocalizationUseCaseInputDto) {
        const serializer = LocationSerializer.transformToUpdateLocation(input)

        return this.locationRepository.updateLocation(serializer)
    }
} 