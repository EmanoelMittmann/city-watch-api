import { Body, Controller, HttpCode, HttpStatus, Param, ParseIntPipe, Put, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiParam, ApiTags } from "@nestjs/swagger";
import { UpdateUserUseCase } from "../usecases/update-users.usecase";
import { UpdateUserDto } from "../dtos/update-user-dto";
import { AuthGuard } from "@modules/auth/guards/auth.guard";

@ApiBearerAuth()
@ApiTags('User')
@Controller('user')
export class UserController {
    constructor(
        private readonly updateUserUseCase: UpdateUserUseCase,
    ) {}

    
    @Put(':id')
    @UseGuards(AuthGuard)
    @ApiParam({
        name: 'id',
        required: true,
        type: Number
    })
    @HttpCode(HttpStatus.OK)
    async updateUser(
        @Body() body: UpdateUserDto,
        @Param('id', ParseIntPipe) param: number,
    ): Promise<void> {

        return this.updateUserUseCase.execute({
            ...body,
            id: param,
        })
    }
}