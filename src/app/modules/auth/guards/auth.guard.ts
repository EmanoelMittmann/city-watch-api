import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private readonly jwtService: JwtService,
    ){}

    async canActivate(
        context: ExecutionContext,
    ): Promise<boolean> {
        const request = context.switchToHttp().getRequest()
        const [_, token] = request.headers.authorization.split(' ') ?? []

        try {
            const payload = await this.jwtService.verifyAsync(token, {
                secret: process.env.JWT_SECRET
            })
            
            request['user'] = payload
        } catch (error) {
            throw new UnauthorizedException({
                message: 'Token Inválido, Faça o Login novamente'
            })      
        }
        
        return true 
    }
}
