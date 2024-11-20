import { RatingEntity } from '@modules/ratings/entities/rating.entity';
import { RatingRepository } from '@modules/ratings/repositories/rating.repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class RatingPostgresRepository implements RatingRepository {
    constructor(private readonly prisma: PrismaService) {}

    async addRating(rating: RatingEntity): Promise<void> {
        await this.prisma.rating.create({
            data: {
                name: rating.getName(),
                problem: {
                    connect: {
                        id: rating.getProblem().getId(),
                    },
                },
                user: {
                    connect: {
                        id: rating.getUser().getId(),
                    },
                },
            },
        });
    }

    async subsRating(rating: RatingEntity): Promise<void> {
        await this.prisma.rating.delete({
            where: {
                id: rating.getId(),
                userId: rating.getUser().getId(),
            },
        });
    }
}
