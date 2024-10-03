import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from 'src/infra/databases/orms/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { GatewaysModule } from '@gateways/gateways.module';
import { SecurityModule } from 'src/infra/security/security.module';
import { JwtStrategy } from '@modules/auth/jwt.strategy';
import { LocalizationsModule } from '@modules/locations/localizations.module';
import { WarningModule } from '@modules/warnings/warning.module';

@Module({
    imports: [
        JwtModule.registerAsync({
            imports: [ConfigModule],
            global: true,
            useFactory: (config: ConfigService) => ({
                secret: config.get<string>('JWT_SECRET'),
                secretOrKeyProvider: () => config.get('JWT_SECRET'),
            }),
            inject: [ConfigService],
        }),
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '../.env',
        }),
        PrismaModule,
        AuthModule,
        UserModule,
        WarningModule,
        GatewaysModule,
        SecurityModule,
        LocalizationsModule
    ],
    controllers: [AppController],
    providers: [JwtStrategy],
    exports: [],
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply()
            .exclude(
                {
                    path: '/auth/login',
                    method: RequestMethod.POST,
                },
                {
                    method: RequestMethod.POST,
                    path: '/auth/register',
                },
            )
            .forRoutes({
                method: RequestMethod.ALL,
                path: '*',
            });
    }
}
