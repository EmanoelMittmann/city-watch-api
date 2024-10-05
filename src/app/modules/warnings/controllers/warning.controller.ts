import { AuthGuard } from "@modules/auth/guards/auth.guard";
import { Body, Controller, HttpCode, Post, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { CreateWarningDto } from "../dtos/create-warning.dto";
import { GetUserAuth } from "@shared/decorators/get-user-auth.decorator";
import { UserEntity } from "@modules/user/entities/user.entity";

@ApiBearerAuth()
@ApiTags('Warning')
@Controller('warnings')
export class WarningController{ 

    @Post()
    @HttpCode(200)
    @UseGuards(AuthGuard)
    async createWarning(
        @Body() body: CreateWarningDto,
        @GetUserAuth() user: UserEntity
    ){
        return 
    }
}