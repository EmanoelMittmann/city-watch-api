import { RoleEnum } from 'src/app/shared/enums/role.enum';

export class UserEntity {
    private _id: number;
    private _uuid: string
    private _name: string;
    private _email: string;
    private _password: string;
    private _isActive: boolean;
    _location: {
        x: string;
        y: string;
    };
    private _role: RoleEnum;
    _createdAt: Date;
    _updatedAt: Date;

    public getId(): number {
        return this._id;
    }

    public getUuid(): string {
        return this._uuid
    }

    public getName(): string {
        return this._name;
    }

    public getEmail(): string {
        return this._email;
    }

    public getPassword(): string {
        return this._password;
    }

    public getLocation(): { x: string; y: string } {
        return this._location;
    }

    public getRole(): RoleEnum {
        return this._role;
    }

    public getIsActive(): boolean {
        return this._isActive;
    }

    public setId(input: number) {
        this._id = input;
    }

    public setUuid(uuid: string) {
        this._uuid = uuid
    }

    public setName(input: string) {
        this._name = input;
    }

    public setEmail(input: string) {
        this._email = input;
    }

    public setLocation(input: { x: string; y: string }) {
        this._location = input;
    }

    public setRole(input: RoleEnum) {
        this._role = input;
    }

    public setPassword(input: string) {
        this._password = input;
    }

    public setIsActive(input: boolean) {
        this._isActive = input
    }
}
