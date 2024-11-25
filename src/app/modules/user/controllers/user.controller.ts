import { Body, Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiParam, ApiTags } from "@nestjs/swagger";
import { UpdateUserUseCase } from "../usecases/update-users.usecase";
import { UpdateUserDto } from "../dtos/update-user-dto";
import { AuthGuard } from "@modules/auth/guards/auth.guard";
import { GetUserDto } from "../dtos/get-user-dto";
import { CustomHeaderListing } from "@shared/contracts";
import { GetUserUseCase } from "../usecases/get-users.usecase";
import { UserEntity } from "../entities/user.entity";
import { GetUserByUuidUseCase } from "../usecases/get-user-by-uuid.usecase";


@ApiBearerAuth()
@ApiTags('User')
@Controller('user')
export class UserController {
    constructor(
        private readonly getUserUseCase: GetUserUseCase,
        private readonly updateUserUseCase: UpdateUserUseCase,
        private readonly getUserByUuidUseCase: GetUserByUuidUseCase,
    ) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard)
    async fetchUser(): Promise<CustomHeaderListing<GetUserDto>> {
        return this.getUserUseCase.execute()
    }


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

    @Get(':uuid')
    @UseGuards(AuthGuard)
    @ApiParam({
        name: "uuid",
        required: true,
        type: String
    })
    async getUserByUuid(
        @Param('uuid') uuid: string,
    ): Promise<UserEntity> {
        return this.getUserByUuidUseCase.execute({ uuid });  
    }

}
