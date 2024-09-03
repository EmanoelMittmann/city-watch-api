import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from 'passport-jwt'
import { IUserRepository } from "../user/repositories/user.repository";
import { JwtPayloadDto } from "./dto/jwt-payload.dto";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(
        @Inject('IUserRepository')
        private readonly userRepository: IUserRepository,
        private readonly config: ConfigService
    ){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: true,
            secretOrKey: process.env.JWT_SECRET,
        })
    }

    public async validate(payload: JwtPayloadDto) {
        const {userId} = await this.validateJwt(payload)
        const user = await this.userRepository.findById(userId)

        if(!user){
            // msg something like "User Not found" or "User not Exist" validate with team
            const message = "message" 

            throw new UnauthorizedException(message)
        }
    }

    private async validateJwt(payload: JwtPayloadDto) {
        const expirationTimeInMilliSeconds = payload.exp * 1000
        const tokenExpirationDate = new Date(expirationTimeInMilliSeconds);
        const nowDate = new Date()

        if(tokenExpirationDate < nowDate){
            // msg something like "Session expired, please do retry login validate with team
            const message = "message"
            
            throw new UnauthorizedException(message)
        }

        return payload
    }


}