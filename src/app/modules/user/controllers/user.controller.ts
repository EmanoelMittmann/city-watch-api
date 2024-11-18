import { Body, Controller, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, UseGuards } from "@nestjs/common";
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

    @Patch(':uuid')
    @UseGuards(AuthGuard)
    @ApiParam({
        name: 'uuid',
        required: true,
        type: String
    })
    @HttpCode(HttpStatus.OK)
    async updateUser(
        @Body() body: UpdateUserDto,
        @Param('uuid') uuid: string,
    ): Promise<void> {
        return this.updateUserUseCase.execute({
            ...body,
            uuid: uuid,
        });
    }

}
