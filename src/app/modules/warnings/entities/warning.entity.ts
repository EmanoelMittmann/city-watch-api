import { LocalizationEntity } from "@modules/locations/entities/localization.entity";
import { UserEntity } from "@modules/user/entities/user.entity";

export class WarningEntity {
    private id: number;
    private title: string;
    private description: string;
    private localization: LocalizationEntity;
    private user: UserEntity

    getId(): number {
        return this.id;
    }

    getTitle(): string {
        return this.title;
    } 

    getDescription(): string {
        return this.description;
    }

    getLocalization(): LocalizationEntity { 
        return this.localization;
    }

    getUser(): UserEntity {
        return this.user;
    }

    setId(id: number): void {
        this.id = id;
    }

    setTitle(title: string): void {
        this.title = title;
    }

    setDescription(description: string): void {
        this.description = description;
    }

    setLocalization(localization: LocalizationEntity): void {
        this.localization = localization;
    }

    setUser(user: UserEntity): void {
        this.user = user;
    }
}