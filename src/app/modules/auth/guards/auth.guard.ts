import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { FirebaseApp } from 'src/infra/gateways/authentication/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private readonly refletor: Reflector,
    ){}

    async canActivate(
        context: ExecutionContext,
    ): Promise<boolean> {
        //TODO [] implements role verification for user
       return true 
    }
}
