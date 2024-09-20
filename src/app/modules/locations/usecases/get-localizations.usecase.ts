import { Inject } from "@nestjs/common";
import { IUseCaseBaseContract } from "@shared/contracts/base-use-case.contract";
import { ILocalizationRepository } from "../repositories/localization.repository";
import { LocalizationSerializer } from "../serializers/localizations.serializers";

export class GetLocalizationUseCase implements IUseCaseBaseContract {
    constructor(
        @Inject('ILocalizationRepository')
        private readonly localizationRepository: ILocalizationRepository
    ){}

    async execute() {
        const getLocalization = await this.localizationRepository.fetchLocation()

        return LocalizationSerializer.transformToManyGetLocalization(getLocalization)
    }
}