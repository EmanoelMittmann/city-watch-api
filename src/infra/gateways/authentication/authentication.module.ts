import { Module } from '@nestjs/common';
import { FirebaseApp } from './authentication.service';
import { ExternalAuthenticationService } from './repository/authentication-service.repository';

@Module({
    providers: [
        FirebaseApp,
        {
            provide: 'IExternalAuthenticationRepository',
            useClass: ExternalAuthenticationService,
        },
    ],
    exports: [FirebaseApp, 'IExternalAuthenticationRepository'],
})
export class AuthenticationModule {}
