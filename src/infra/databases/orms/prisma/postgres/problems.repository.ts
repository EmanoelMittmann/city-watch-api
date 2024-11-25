import { IProblemRepository } from "@modules/problems/repositories/problem.repository";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { ProblemEntity } from "@modules/problems/entities/problem.entity";
import { IFetchProblem, ProblemSerializer } from "../serializer/problem.serializer";
import { DEFAULT_NAME_RATING } from "@shared/enums/default-name-rating.enum";

@Injectable()
export class ProblemPostgresRepository implements IProblemRepository {
    constructor(
        private readonly prisma: PrismaService
    ) {}

    async fetchProblem(): Promise<ProblemEntity[]> {
        const data = await this.prisma.problems.findMany({
            select: {
                id: true,
                uuid: true,
                name: true,
                address: true,
                description: true,
                latitude: true,
                longitude: true,
                photo: true,
                problemType: true,  
                createdAt: true,
                updatedAt: true,
            }
        }) as unknown as IFetchProblem[];

        return ProblemSerializer.transformManyToEntity(data);
    }

    async saveProblem(data: ProblemEntity): Promise<void> {
        await this.prisma.problems.create({
            data: {
                uuid: data.getUuid(),  
                name: data.getName(),
                address: data.getAddress(),
                description: data.getDescription(),
                latitude: data.getLatitude(),
                longitude: data.getLongitude(),
                photo: data.getPhoto(),
                problemType: data.getProblemType(),
            }
        });
    }

    async updateProblem(data: ProblemEntity): Promise<void> {
        await this.prisma.problems.update({
            where: {
                uuid: data.getUuid()  
            },
            data: {
                name: data.getName(),
                description: data.getDescription(),
                latitude: data.getLatitude(),
                longitude: data.getLongitude(),
                photo: data.getPhoto(),  
                problemType: data.getProblemType(),
            }
        });
    }

    async deleteByUuid(uuid: string): Promise<void> {
        await this.prisma.problems.delete({
            where: {
                uuid
            }
        });
    }

    async findById(id: number): Promise<ProblemEntity | null> {
        const problem = await this.prisma.problems.findUnique({
            where: { id },
            select: {
                id: true,
                name: true,
                address: true,
                description: true,
                latitude: true,
                longitude: true,
                photo: true,
                problemType: true,
                uuid: true,  
            }
        });

        if (!problem) {
            return null;
        }

        const transformedProblem = {
            ...problem,
            latitude: problem.latitude.toNumber(),
            longitude: problem.longitude.toNumber()
        } as IFetchProblem;

        return ProblemSerializer.transformToEntity(transformedProblem);
    }

    async findByUuid(uuid: string): Promise<ProblemEntity | null> {
        const problem = await this.prisma.problems.findUnique({
            where: { uuid },
            select: {
                id: true,
                name: true,
                address: true,
                description: true,
                latitude: true,
                longitude: true,
                photo: true,
                problemType: true,
                uuid: true,  

                

            }
        });

        if (!problem) {
            return null;
        }

        const transformedProblem = {
            ...problem,
            latitude: problem.latitude.toNumber(),
            longitude: problem.longitude.toNumber()
        } as IFetchProblem;

        return ProblemSerializer.transformToEntity(transformedProblem);
    }

    async findSameProblem(data: ProblemEntity): Promise<ProblemEntity | null> {
        const problem = await this.prisma.problems.findFirst({
            where: {
                name: data.getName(),
                address: data.getAddress(),
                description: data.getDescription(),
                latitude: data.getLatitude(),
                longitude: data.getLongitude(),
            },
        });

        if (!problem) {
            return null;
        }

        const transformedProblem = {
            ...problem,
            latitude: problem.latitude.toNumber(),
            longitude: problem.longitude.toNumber()
        };

        return ProblemSerializer.transformToEntity(transformedProblem as IFetchProblem);
    }

    countByProblemUuid(uuid: string, type: DEFAULT_NAME_RATING): Promise<number> {
        return this.prisma.rating.count({
            where: {
                problem: {
                    uuid: uuid
                },
                name: type
            }
        })
    }
}
