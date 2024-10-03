import { LocalizationEntity } from "../entities/localization.entity"

export interface ILocalizationRepository {
    saveLocation(data: LocalizationEntity): Promise<void>
    fetchLocation(): Promise<LocalizationEntity[]>
    updateLocation(data: LocalizationEntity): Promise<void>
}