import { PrismaClient } from "@prisma/client";
import { generateMastersUsersSeed } from "./master-user.seed";
import { Logger } from "@nestjs/common";

export const PRISMA = new PrismaClient();

export class MainSeed{
    private logger: Logger = new Logger()
    constructor(){
        this.execute()
            .then(() =>{
                PRISMA.$disconnect()
            })
            .catch(() =>{
                this.logger.error(
                    `Error in running seed Postgres in environment : ${process.env.NODE_ENV}`,
                )
                PRISMA.$disconnect()
                process.exit(1)
            })
    }

    async execute(){
        console.info("\x1b[32m","Running seed Postgres in environment: ", process.env.NODE_ENV)
        generateMastersUsersSeed()
    }
}

new MainSeed()
