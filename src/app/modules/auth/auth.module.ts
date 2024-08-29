import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { UserModule } from "../user/user.module";


@Module({
    imports: [
        UserModule
    ],
    exports:[]
})

export class AuthModule {}