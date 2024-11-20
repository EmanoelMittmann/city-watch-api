import { ProblemEntity } from '@modules/problems/entities/problem.entity';
import { UserEntity } from '@modules/user/entities/user.entity';
import { DEFAULT_NAME_RATING } from '@shared/enums/default-name-rating.enum';

export class RatingEntity {
    id: number;
    name: DEFAULT_NAME_RATING;
    problem: ProblemEntity;
    user: UserEntity;

    public getId(): number {
        return this.id;
    }

    public setId(value: number) {
        this.id = value;
    }

    public getName(): DEFAULT_NAME_RATING {
        return this.name;
    }

    public setName(value: DEFAULT_NAME_RATING) {
        this.name = value;
    }

    public getProblem(): ProblemEntity {
        return this.problem;
    }

    public setProblem(value: ProblemEntity) {
        this.problem = value;
    }

    public getUser(): UserEntity {
        return this.user;
    }

    public setUser(value: UserEntity) {
        this.user = value;
    }
}
