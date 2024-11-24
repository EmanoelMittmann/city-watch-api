import { DEFAULT_NAME_RATING } from "@shared/enums/default-name-rating.enum";
import { RatingEntity } from "../entities/rating.entity";
import { UserEntity } from "@modules/user/entities/user.entity";
import { ProblemEntity } from "@modules/problems/entities/problem.entity";

interface IAddLikeRating {
    userId: number,
    name: string,
    problemId: number
}

export class RatingSerializer {
    static toEntityAddLikeRating(data: IAddLikeRating) {
       const entity = new RatingEntity()

       const user = new UserEntity()
       user.setId(data.userId)
       
       const problem = new ProblemEntity()
       problem.setId(data.problemId)

       entity.setName(data.name as DEFAULT_NAME_RATING)
       entity.setUser(user)
       entity.setProblem(problem)

       return entity
    }
}