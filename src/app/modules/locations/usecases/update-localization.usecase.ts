import { Inject } from "@nestjs/common";
import { IUseCaseBaseContract } from "@shared/contracts/base-use-case.contract";
import { ILocalizationRepository } from "../repositories/localization.repository";
import { UpdateLocalizationUseCaseInputDto } from "../dto/update-localization.dto";
import { LocalizationSerializer } from "../serializers/localizations.serializers";

export class UpdateLocalizationUseCase implements IUseCaseBaseContract{
    constructor(
        @Inject("ILocalizationRepository")
        private readonly locationRepository:ILocalizationRepository
    ){}

    async execute(input: UpdateLocalizationUseCaseInputDto) {
        const serializer = LocalizationSerializer.transformToUpdateLocation(input)

        return this.locationRepository.updateLocation(serializer)
    }
} 