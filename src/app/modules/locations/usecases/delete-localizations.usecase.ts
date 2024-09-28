import { Inject } from "@nestjs/common";
import { IUseCaseBaseContract } from "@shared/contracts/base-use-case.contract";
import { ILocalizationRepository } from "../repositories/localization.repository";
import { DeleteLocalizationUseCaseInput } from "../dto/delete-localization.dto";

export class DeleteLocalizationUseCase implements IUseCaseBaseContract {
    constructor(
        @Inject('ILocalizationRepository')
        private readonly localizationRepository: ILocalizationRepository
    ){}

    async execute(input: DeleteLocalizationUseCaseInput) {
        return this.localizationRepository.deleteById(input.id, input.userId)
    }
}