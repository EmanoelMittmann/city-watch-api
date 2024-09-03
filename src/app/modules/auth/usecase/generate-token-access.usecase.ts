import { Injectable } from "@nestjs/common";
import { IUseCaseBaseContract } from "@shared/contracts/base-use-case.contract";
import { JwtPayloadDto } from "../dto/jwt-payload.dto";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class GenerateTokenAccessUseCase implements IUseCaseBaseContract {
    constructor(
        private readonly JwtService: JwtService,
        private readonly config: ConfigService
    ){}
    
    execute(input: JwtPayloadDto) {
        return this.JwtService.signAsync(input, {
            expiresIn: this.config.get<string>("JWT_EXPIRATION")
        })
    }
}