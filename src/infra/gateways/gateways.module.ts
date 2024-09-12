import { Module } from "@nestjs/common";
import { AuthenticationModule } from "./authentication/authentication.module";

@Module({
    providers: [AuthenticationModule]
})
export class GatewaysModule {}