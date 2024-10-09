import { AuthGuard } from "@modules/auth/guards/auth.guard";
import { Body, Controller, Get, HttpCode, Logger, Post, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { CreateWarningDto } from "../dtos/create-warning.dto";
import { GetUserAuth } from "@shared/decorators/get-user-auth.decorator";
import { UserEntity } from "@modules/user/entities/user.entity";
import { CreateWarningUseCase } from "../usecases/create-warning.usecase";
import { ListAllWarningsUseCase } from "../usecases/list-all-warnings.usecase";

@ApiBearerAuth()
@ApiTags('Warning')
@Controller('warnings')
export class WarningController{ 
    private readonly logger: Logger = new Logger(WarningController.name);
    constructor(
        private readonly createWarningUseCase: CreateWarningUseCase,
        private readonly listAllWarningsUseCase: ListAllWarningsUseCase
    ){}

    @Post()
    @HttpCode(200)
    @UseGuards(AuthGuard)
    async createWarning(
        @Body() body: CreateWarningDto,
        @GetUserAuth() user: UserEntity
    ){
        return this.createWarningUseCase.execute({
            userId: user.getUuid(),
            description: body.description,
            localization: body.localization,
            title: body.title
        });
    }

    @Get()
    @HttpCode(200)
    @UseGuards(AuthGuard)
    async listAllWarnings(){
        return this.listAllWarningsUseCase.execute();
    }
}