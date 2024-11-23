import { RatingEntity } from '@modules/ratings/entities/rating.entity';
import { RatingRepository } from '@modules/ratings/repositories/rating.repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { RatingSerializer } from '../serializer/rating.serializer';

@Injectable()
export class RatingPostgresRepository implements RatingRepository {
    constructor(private readonly prisma: PrismaService) {}

    async addLikeRating(rating: RatingEntity): Promise<void> {
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

    async subsLikeRating(rating: RatingEntity): Promise<void> {
        await this.prisma.rating.delete({
            where: {
                id: rating.getId(),
            },
        });
    }

    async addDislikeRating(rating: RatingEntity): Promise<void> {
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

    async subsDislikeRating(rating: RatingEntity): Promise<void> {
        await this.prisma.rating.delete({
            where: {
                id: rating.getId(),
            },
        });
    }

    async findByUserId(userId: number): Promise<RatingEntity> {
        const ratingByUserId = await this.prisma.rating.findFirst({
            where: {
                userId: userId,
            },
        });

        if(!ratingByUserId) {
            return null;
        }

        return RatingSerializer.toEntity(ratingByUserId);
    }
}
