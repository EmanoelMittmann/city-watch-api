import { ProblemEntity } from "../entities/problem.entity"

export interface IProblemRepository{
    saveProblem(data: ProblemEntity): Promise<void>
    fetchProblem(): Promise<ProblemEntity[]>
    updateProblem(data: ProblemEntity): Promise<void>
    deleteById(id: number): Promise<void>
    findById(id: number): Promise<ProblemEntity | null>;
}