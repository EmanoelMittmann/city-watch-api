import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from 'src/infra/databases/orms/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { GatewaysModule } from '@gateways/gateways.module';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET')
      }),
      inject: [ConfigService]
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './.env'
    }),
    PrismaModule,
    AuthModule,
    UserModule,
    GatewaysModule
  ],
  controllers: [AppController],
  providers: [],
  exports: []
})
export class AppModule {}
