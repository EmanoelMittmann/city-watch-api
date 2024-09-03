import { RoleEnum } from 'src/app/shared/enums/role.enum';

export class UserEntity {
    _id: number;
    _uuid: string
    _name: string;
    _email: string;
    _password: string;
    _isActive: boolean;
    _location: {
        x: string;
        y: string;
    };
    _role: RoleEnum;
    _createdAt: Date;
    _updatedAt: Date;

    public getId(): number {
        return this._id;
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

    public setId(input: number) {
        this._id = input;
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
}
