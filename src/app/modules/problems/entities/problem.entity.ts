import { PROBLEM_TYPE } from "@prisma/client"


export class ProblemEntity{
    private id: number
    private uuid: string
    private name: string
    private description:string
    private longitude: number
    private latitude: number
    private address: string
    private photo: string 
    private problemType: PROBLEM_TYPE
    private createdAt: Date;
    private updatedAt: Date;

    public getCreatedAt(): Date {
        return this.createdAt;
    }

    public setCreatedAt(createdAt: Date): void {
        this.createdAt = createdAt;
    }

    public getUpdatedAt(): Date {
        return this.updatedAt;
    }

    public setUpdatedAt(updatedAt: Date): void {
        this.updatedAt = updatedAt;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getUuid(): string {
        return this.uuid
    }

    public setUuid(uuid: string) {
        this.uuid = uuid
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

    public getAddress(): string {
        return this.address;
    }

    public setAddress(address: string): void {
        this.address = address;
    }

    public getPhoto(): string {
        return this.photo;
    }

    public setPhoto(photo: string): void {
        this.photo = photo;
    }

    public getProblemType():PROBLEM_TYPE {
        return this.problemType
    }

    public setProblemType(problemType: PROBLEM_TYPE) {
        this.problemType = problemType
    }

}