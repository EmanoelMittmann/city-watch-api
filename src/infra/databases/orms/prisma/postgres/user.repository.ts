import { IUserRepository } from "@modules/user/repositories/user.repository"
import { Injectable } from "@nestjs/common"
import { PrismaService } from "../prisma.service"
import { UserEntity } from "@modules/user/entities/user.entity"
import { IFetchUser, IFindByEmail, IFindById, UserSerializer } from "../serializer/user-serializer"


@Injectable()
export class UserPostgresRepository implements IUserRepository {
    constructor(private readonly prisma: PrismaService) {}

    async findById(id: number): Promise<UserEntity> {
        const byId = await this.prisma.users.findUnique({
            where: {
                id
            }
        }) as unknown as IFindById

        if(!byId) return null

        return UserSerializer.FindById(byId)
    }

    async findByUuid(uuid: string): Promise<UserEntity | null> {
        const user = await this.prisma.users.findUnique({
            where: { uuid },
            select: {
                id: true,
                uuid: true,
                name: true,
                email: true,
                photo: true,
                  
            }
        });

        if (!user) {
            return null;
        }

        return UserSerializer.transformToEntity(user);
    }

    async createUser(user: UserEntity): Promise<void> {
        await this.prisma.$transaction([
            this.prisma.users.create({
                data: {
                    name: user.getName(),
                    email: user.getEmail(),
                    password: user.getPassword(),
                    photo: user.getPhoto(),
                }
            })
        ])
    }

    async findByEmail(email: string): Promise<UserEntity> {
        const byEmail = await this.prisma.users.findFirst({
            where:{
                email: email
            },
            select: {
                id: true,
                uuid: true,
                name: true,
                email: true,
                password: true,
                photo: true,
                role: true,
                isActive: true,
            }
        }) as unknown as IFindByEmail

        if(!byEmail) return null

        return UserSerializer.FindByEmail(byEmail)
    }

    async updateUser(data: UserEntity): Promise<void> {
        await this.prisma.users.update({
            where:{
                uuid: data.getUuid()
            },
            data: {
                name: data.getName(),
                email: data.getEmail(),
                password: data.getPassword(),
                photo: data.getPhoto()
            }
        })
    }

    async fetchUser(): Promise<UserEntity[]> {
        const data = await this.prisma.users.findMany({
            select: {
                id: true,
                uuid: true,
                name: true,
                photo: true,
                email: true,
                
            }
        }) as unknown as IFetchUser[];

        return UserSerializer.transformManyToEntity(data);
    }
}
