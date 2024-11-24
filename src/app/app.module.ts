import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from 'src/infra/databases/orms/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import {HandlebarsAdapter} from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter'
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { GatewaysModule } from '@gateways/gateways.module';
import { SecurityModule } from 'src/infra/security/security.module';
import { JwtStrategy } from '@modules/auth/jwt.strategy';
import { LocalizationsModule } from '@modules/locations/localizations.module';
import { WarningModule } from '@modules/warnings/warning.module';
import { AuthValidatorMiddleware } from '@modules/auth/middleware/auth-validator.middleware';
import { ProblemsModule } from '@modules/problems/problems.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { SmtpModule } from '@gateways/smtp/smtp.module';
import path from 'path';

@Module({
    imports: [
        MailerModule.forRoot({
            transport: process.env.SMTP_TRANSPORT,
            template:{
                dir: path.resolve(__dirname,'/shared','/templates'),
                adapter: new HandlebarsAdapter(),
                options:{
                    extName: '.hbs',
                    layoutsDir: path.resolve(__dirname,'/shared','/templates'),
                }
            },
            defaults: {
                secure: false,
                from: process.env.SMTP_FROM,
            }
        }),
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
        SmtpModule,
        SecurityModule,
        LocalizationsModule,
        ProblemsModule,
    ],
    controllers: [AppController],
    providers: [JwtStrategy],
    exports: [],
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(AuthValidatorMiddleware)
            .exclude(
                {
                    path:"/",
                    method: RequestMethod.ALL,
                },
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
