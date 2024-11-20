import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiParam, ApiTags } from "@nestjs/swagger";
import { UpdateProblemDto } from "../dto/update-problem-dto";
import { SaveProblemUseCase } from "../usecases/save-problems.usecase";
import { UpdateProblemUseCase } from "../usecases/update-problems.usecase";
import { GetProblemUseCase } from "../usecases/get-problems.usecase";
import { DeleteProblemUseCase } from "../usecases/delete-problems.usecase";
import { SaveProblemDto } from "../dto/save-problem.dto";
import { AuthGuard } from "@modules/auth/guards/auth.guard";
import { ProblemEntity } from "../entities/problem.entity";
import { GetProblemByUuidUseCase } from "../usecases/get-problem-by-uuid.usecase";  
import { CustomHeaderListing } from "@shared/contracts";
import { GetProblemDto } from "../dto/get-problem.dto";

@ApiBearerAuth()
@ApiTags('Problem')
@Controller('problem')
export class ProblemController {
    constructor(
        private readonly saveProblemUsecase: SaveProblemUseCase,
        private readonly updateProblemUseCase: UpdateProblemUseCase,
        private readonly getProblemUseCase: GetProblemUseCase,
        private readonly deleteProblemUseCase: DeleteProblemUseCase,
        private readonly getProblemByUuidUseCase: GetProblemByUuidUseCase,  
    ) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard)
    async fetchProblem(): Promise<CustomHeaderListing<GetProblemDto>> {
        return this.getProblemUseCase.execute()
    }
    
    @Post()
    @UseGuards(AuthGuard)
    @HttpCode(HttpStatus.OK)
    async problem(@Body() body: SaveProblemDto): Promise<void> {
        return this.saveProblemUsecase.execute(body);
    }

    @Delete(':uuid')
    @UseGuards(AuthGuard)
    @ApiParam({
        name: "uuid",
        required: true,
        type: String
    })
    async deleteProblem(
        @Param('uuid') uuid: string,
    ): Promise<void> {
        return this.deleteProblemUseCase.execute({
            uuid
        });
    }

    @Put(':uuid')
    @UseGuards(AuthGuard)
    @ApiParam({
        name: 'uuid',
        required: true,
        type: String
    })
    @HttpCode(HttpStatus.OK)
    async updateProblem(
        @Body() body: UpdateProblemDto,
        @Param('uuid') uuid: string,
    ): Promise<void> {
        return this.updateProblemUseCase.execute({
            ...body,
            uuid,
        });
    }

    @Get(':uuid')
    @UseGuards(AuthGuard)
    @ApiParam({
        name: "uuid",
        required: true,
        type: String
    })
    async getProblemByUuid(
        @Param('uuid') uuid: string,
    ): Promise<ProblemEntity> {
        return this.getProblemByUuidUseCase.execute({ uuid });  
    }
}
