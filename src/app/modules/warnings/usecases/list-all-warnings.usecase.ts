import { Inject } from "@nestjs/common";
import { IWarningRepository } from "../repositories/warning.repository";
import { CustomHeaderListing } from "@shared/contracts/custom-header-listing.contract";

export class ListAllWarningsUseCase {
    constructor(
        @Inject('IWarningRepository')
        private readonly warningRepository: IWarningRepository
    ) {}
    async execute() {
        const data = await this.warningRepository.listAll();

        const paginate = new CustomHeaderListing({
            data: data,
            size: data.length
        })

        return paginate;
    }
}