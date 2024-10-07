import { WarningEntity } from "@modules/warnings/entities/warning.entity";
import { IWarningRepository } from "@modules/warnings/repositories/warning.repository";
import { PrismaService } from "../prisma.service";
import { Injectable } from "@nestjs/common";
import { IListAll, WarningSerializer } from "../serializer/warning.serializer";

@Injectable()
export class WarningPostgresRepository implements IWarningRepository {
    constructor(
        private readonly prisma: PrismaService
    ){}

    async createWarning(input: WarningEntity): Promise<void> {
        await this.prisma.warning.create({
            data: {
                title: input.getTitle(),
                description: input.getDescription(),
                user: {
                    connect: {
                        uuid: input.getUser().getUuid()
                    }
                },
                localization: {
                   create: {
                        name: input.getLocalization().getName(),
                        description: input.getLocalization().getDescription(),
                        latitude: input.getLocalization().getLatitude(),
                        longitude: input.getLocalization().getLongitude(),
                        isIncident: input.getLocalization().getIsIncident(),
                        user: {
                            connect: {
                                uuid: input.getUser().getUuid()
                            }
                        }
                   }
                }
            }
        });
    }

    async existBindUser(userid: string): Promise<boolean> {
        const findUser = await this.prisma.warning.findFirst({
            where: {
                user: {
                    uuid: userid
                }
            }
        })

        if(findUser){
            return true;
        }

        return false;
    }

    async listAll(): Promise<WarningEntity[]> {
        const data = await this.prisma.warning.findMany({
            select:{
                description: true,
                localization: {
                    select: {
                        name: true,
                        description: true,
                        latitude: true,
                        longitude: true,
                        isIncident: true,
                    }
                },
                title:true,
            }
        }) as unknown as IListAll[];
        
        if(!data){
            return null
        }

        return WarningSerializer.transformManyToEntityListAll(data);
    }
}