import { Module } from "@nestjs/common";
import { SecurityRepository } from "./repository/security.repository";


@Module({
    providers: [
        {
            provide:"SecurityContract",
            useClass: SecurityRepository
        }
    ],
    exports: ['SecurityContract']
})
export class SecurityModule {}