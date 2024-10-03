import { CanActivate, ExecutionContext, ForbiddenException, Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
    private readonly logger: Logger;
    constructor(
        private readonly jwtService: JwtService,
    ){
        this.logger = new Logger()
    }

    async canActivate(
        context: ExecutionContext,
    ): Promise<boolean> {
        const request = context.switchToHttp().getRequest()

        if(request.headers.authorization == null) {
            throw new ForbiddenException({
                status: 401,
                message: "É necessario estar logado pra usar essas funções"
            })
        }
        const [prefix, token] = request.headers.authorization.split(' ') ?? []

        if(prefix !== "Bearer"){
            throw new ForbiddenException({
                status: 401,
                message: "É Apenas permitido tokens do tipo Bearer"
            })
        }

        try {
            const payload = await this.jwtService.verifyAsync(token.trim(), {
                secret: process.env.JWT_SECRET
            })
            
            request['user'] = payload
        } catch (error) {
            this.logger.verbose(error)
            throw new UnauthorizedException({
                message: 'Token Inválido, Faça o Login novamente'
            })      
        }
        
        return true 
    }
}
