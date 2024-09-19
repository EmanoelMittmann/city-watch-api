import { LocationEntity } from "../entities/location.entity"

export interface ILocationRepository {
    saveLocation(data: LocationEntity): Promise<void>
    fetchLocation(): Promise<LocationEntity[]>
    updateLocation(data: LocationEntity): Promise<void>
}