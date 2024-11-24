import { Module } from "@nestjs/common";
import { CustomMailer } from "./mailer/mailer.smtp";

@Module({
    imports: [CustomMailer],
    providers: [],
    exports: [CustomMailer],
})
export class SmtpModule {}