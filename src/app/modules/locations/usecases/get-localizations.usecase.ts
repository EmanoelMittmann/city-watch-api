import { Inject } from "@nestjs/common";
import { IUseCaseBaseContract } from "@shared/contracts/base-use-case.contract";
import { ILocalizationRepository } from "../repositories/localization.repository";
import { LocalizationSerializer } from "../serializers/localizations.serializers";
import { CustomHeaderListing } from "@shared/contracts/custom-header-listing.contract";

export class GetLocalizationUseCase implements IUseCaseBaseContract {
    constructor(
        @Inject('ILocalizationRepository')
        private readonly localizationRepository: ILocalizationRepository
    ){}

    async execute() {
        const getLocalization = await this.localizationRepository.fetchLocation()

        const transform = LocalizationSerializer.transformToManyGetLocalization(getLocalization)

        return new CustomHeaderListing({
            data: transform,
            size: transform.length
        })
    }
}