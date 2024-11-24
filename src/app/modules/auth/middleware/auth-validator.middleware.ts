import { IUserRepository } from "@modules/user/repositories/user.repository";
import { Inject, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { NextFunction, Request, Response } from "express";

export class AuthValidatorMiddleware implements NestMiddleware {
    constructor(
        @Inject('IUserRepository')
        private readonly userRepository: IUserRepository,
        private readonly jwtService: JwtService
    ){}

    async use(req: Request, res: Response, next: NextFunction) {
        const POSITION_BEARER_TOKEN = 1 
        const getToken = req.headers.authorization.split(' ')[POSITION_BEARER_TOKEN]

        const isValidToken = await this.jwtService.verifyAsync(getToken)
        
        if(!isValidToken){
            throw new UnauthorizedException({
                message: 'Token esta Expirado, faça o login novamente'
            })
        }
        
        const existUser = await this.userRepository.findByUuid(isValidToken.sub)

        if(!existUser){
            throw new UnauthorizedException({
                message: 'Usuário não existe'
            })
        }

        req.user = existUser

        next()
    }
}