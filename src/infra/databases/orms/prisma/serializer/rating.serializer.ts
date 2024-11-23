import { ProblemEntity } from "@modules/problems/entities/problem.entity"
import { RatingEntity } from "@modules/ratings/entities/rating.entity"
import { UserEntity } from "@modules/user/entities/user.entity"
import { DEFAULT_NAME_RATING } from "@shared/enums/default-name-rating.enum"

interface RatingInput {
    id: number
    problemId: number
    userId: number
    name: string
}

export class RatingSerializer {
    static toEntity(rating: RatingInput): RatingEntity {
        const entity = new RatingEntity()

        const problem = new ProblemEntity()
        problem.setId(rating.problemId)

        const user = new UserEntity()
        user.setId(rating.userId)

        entity.setId(rating.id)
        entity.setProblem(problem)
        entity.setUser(user)
        entity.setName(rating.name as DEFAULT_NAME_RATING)

        return entity
    }
}