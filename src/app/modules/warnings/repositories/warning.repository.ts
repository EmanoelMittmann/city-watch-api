import { CreateWarningDto } from "../dtos/create-warning.dto";
import { WarningEntity } from "../entities/warning.entity";

export interface IWarningRepository {
    createWarning(input: WarningEntity): Promise<void>;
}