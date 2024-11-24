import { Module } from "@nestjs/common";
import { ProblemController } from "./controllers/problem.controller";
import { DeleteProblemUseCase } from "./usecases/delete-problems.usecase";
import { GetProblemUseCase } from "./usecases/get-problems.usecase";
import { SaveProblemUseCase } from "./usecases/save-problems.usecase";
import { UpdateProblemUseCase } from "./usecases/update-problems.usecase";
import { ProblemPostgresRepository } from "@databases/orms/prisma/postgres/problems.repository";
import { GetProblemByUuidUseCase } from "./usecases/get-problem-by-uuid.usecase";
import { CountRatingByProblemUuidUseCase } from "./usecases/count-rating-by-problem-uuid.usecase";
import { ListProblemsByUserIdUseCase } from "./usecases/list-problems-by-user-id.usecase";

@Module({
    controllers: [ProblemController],
    providers:[
        {
            provide: 'IProblemRepository',
            useClass: ProblemPostgresRepository
        },
        SaveProblemUseCase,
        UpdateProblemUseCase,
        GetProblemUseCase,
        DeleteProblemUseCase,
        GetProblemByUuidUseCase,
        CountRatingByProblemUuidUseCase,
        ListProblemsByUserIdUseCase
    ],
    exports:['IProblemRepository',GetProblemByUuidUseCase]
})
export class ProblemsModule {}