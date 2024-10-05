import { Inject, Injectable } from "@nestjs/common";
import { IUseCaseBaseContract } from "@shared/contracts/base-use-case.contract";
import { IWarningRepository } from "../repositories/warning.repository";
import { CreateWarningBehaviorDto } from "../dtos/create-warning.dto";
import { WarningSerializer } from "../serializers/warning.serializer";

@Injectable()
export class CreateWarningUseCase implements IUseCaseBaseContract {
    constructor(
        @Inject('IWarningRepository')
        private readonly warningRepository: IWarningRepository
    ){}

    async execute(input: CreateWarningBehaviorDto): Promise<void> {    
        const serialize = WarningSerializer.tranformToEntityCreateWarning(input);

        await this.warningRepository.createWarning(serialize);
    }
}