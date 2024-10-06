import { ConflictException, Inject, Injectable } from "@nestjs/common";
import { IUseCaseBaseContract } from "@shared/contracts/base-use-case.contract";
import {IBaseMessageFeedback} from '@shared/contracts/base-message-feedback.contract'
import { IWarningRepository } from "../repositories/warning.repository";
import { CreateWarningBehaviorDto } from "../dtos/create-warning.dto";
import { WarningSerializer } from "../serializers/warning.serializer";

@Injectable()
export class CreateWarningUseCase implements IUseCaseBaseContract {
    constructor(
        @Inject('IWarningRepository')
        private readonly warningRepository: IWarningRepository
    ){}

    async execute(input: CreateWarningBehaviorDto): Promise<IBaseMessageFeedback> {   
        await this.existBindUser(input.userId);

        const serialize = WarningSerializer.tranformToEntityCreateWarning(input);

        await this.warningRepository.createWarning(serialize);

        return {
            "message": "Aviso cadastrado com sucesso"
        }
    }

    async existBindUser(userid: string) {
        const existUser = this.warningRepository.existBindUser(userid);

        if(existUser){
            throw new ConflictException({
                "message": "Usuário já possui um aviso cadastrado"
            })
        }
    }
}