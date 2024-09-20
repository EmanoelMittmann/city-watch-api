import { Inject, Injectable } from "@nestjs/common";
import { IUseCaseBaseContract } from "@shared/contracts/base-use-case.contract";
import { ILocalizationRepository } from "../repositories/localization.repository";
import { SaveLocationDto } from "../dto/save-localization.dto";
import { LocalizationSerializer } from "../serializers/localizations.serializers";


@Injectable()
export class SaveLocationUseCase implements IUseCaseBaseContract {
    constructor(
        @Inject('ILocalizationRepository')
        private readonly locationRepository: ILocalizationRepository
    ){}
    
    execute(input: SaveLocationDto) {

        const serialize = LocalizationSerializer.transformToSaveLocation(input)

        return this.locationRepository.saveLocation(serialize)
    }
}