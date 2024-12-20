import { DEFAULT_NAME_RATING } from "@shared/enums/default-name-rating.enum";
import { ProblemEntity } from "../entities/problem.entity"

export interface IProblemRepository{
    saveProblem(data: ProblemEntity): Promise<void>
    fetchProblem(): Promise<ProblemEntity[]>
    updateProblem(data: ProblemEntity): Promise<void>
    findById(id: number): Promise<ProblemEntity | null>;
    findByUserid(userId: number): Promise<ProblemEntity[]>
    findSameProblem(data: ProblemEntity): Promise<ProblemEntity | null>;
    findByUuid(id: string): Promise<ProblemEntity | null>;
    deleteByUuid(id: string): Promise<void>;
    countByProblemUuid(uuid: string, type: DEFAULT_NAME_RATING): Promise<number>
}