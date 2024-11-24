import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CustomMailer {
    private DEFAULT_EMAIL = "CityWatch <noreply@citywatch.com>"

    constructor(
        private readonly mailerService: MailerService,
    ){}

    async sendTo(
        destinatary: string,
    ): Promise<void> {
        await this.mailerService.sendMail({
            to:destinatary,
            from: this.DEFAULT_EMAIL,
            subject: "Email recuperação de senha CityWatch",
            template: "recovery-password",
        })
    }
}