import { Inject, Injectable } from '@nestjs/common';
import { UserEntity } from 'src/app/modules/user/entities/user.entity';
import { IUserRepository } from 'src/app/modules/user/repositories/user.repository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UserPostgresRepository implements IUserRepository {
    constructor(private readonly prisma: PrismaService) {}

    async findById(id: number): Promise<UserEntity> {
        // TODO [] - Implements repository
        return new UserEntity()
    }
}
