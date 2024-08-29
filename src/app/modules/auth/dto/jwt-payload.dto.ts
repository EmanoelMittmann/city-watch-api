import { RoleEnum } from "src/app/shared/enums/role.enum";

export interface JwtPayloadDto {
    sub?: string;
    userId: number;
    type: RoleEnum;
    iat?:number;
    exp?:number;
}