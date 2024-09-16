import { UserEntity } from "@modules/user/entities/user.entity"

export class LocationEntity {
    private id: number
    private name: string
    private description:string
    private longitude: number
    private latitude: number
    private isIncident: boolean
    private user: UserEntity

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getDescription(): string {
        return this.description;
    }

    public setDescription(description: string): void {
        this.description = description;
    }

    public getLongitude(): number {
        return this.longitude;
    }

    public setLongitude(longitude: number): void {
        this.longitude = longitude;
    }

    public getLatitude(): number {
        return this.latitude;
    }

    public setLatitude(latitude: number): void {
        this.latitude = latitude;
    }

    public getIsIncident(): boolean {
        return this.isIncident;
    }

    public setIsIncident(isIncident: boolean): void {
        this.isIncident = isIncident;
    }

    public getUser():UserEntity {
        return this.user
    }

    public setUser(entity: UserEntity) {
        this.user = entity
    }

}