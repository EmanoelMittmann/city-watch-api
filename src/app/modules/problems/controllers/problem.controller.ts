import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiParam, ApiTags } from "@nestjs/swagger";
import { UpdateProblemDto } from "../dto/update-problem-dto";
import { SaveProblemUseCase } from "../usecases/save-problems.usecase";
import { UpdateProblemUseCase } from "../usecases/update-problems.usecase";
import { GetProblemUseCase } from "../usecases/get-problems.usecase";
import {  DeleteProblemUseCase } from "../usecases/delete-problems.usecase";
import { SaveProblemDto } from "../dto/save-problem.dto";
import { AuthGuard } from "@modules/auth/guards/auth.guard";

@ApiBearerAuth()
@ApiTags('Problem')
@Controller('problem')
export class ProblemController {
    constructor(
        private readonly saveProblemUsecase: SaveProblemUseCase,
        private readonly updateProblemUseCase: UpdateProblemUseCase,
        private readonly getProblemUseCase: GetProblemUseCase,
        private readonly deleteProblemUseCase: DeleteProblemUseCase
    ) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard)
    async fetchLocalization(){
        return this.getProblemUseCase.execute()
    }

    @Post()
    @UseGuards(AuthGuard)
    @HttpCode(HttpStatus.OK)
    async location(@Body() body: SaveProblemDto): Promise<void> {
        return this.saveProblemUsecase.execute(body);
    }

    @Delete(':id')
    @UseGuards(AuthGuard)
    @ApiParam({
        name: "idaccess_token",
        required: true,
        type: Number
    })
    async deleteLocalization(
        @Param('id', ParseIntPipe) id: number,     
    ): Promise<void> {
        return this.deleteProblemUseCase.execute({
            id
        })
    }

    @Put(':id')
    @UseGuards(AuthGuard)
    @ApiParam({
        name: 'id',
        required: true,
        type: Number
    })
    @HttpCode(HttpStatus.OK)
    async updateLocation(
        @Body() body: UpdateProblemDto,
        @Param('id', ParseIntPipe) param: number,
    ): Promise<void> {

        return this.updateProblemUseCase.execute({
            ...body,
            id: param,
        })
    }
}