import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetUserAuth = createParamDecorator(
    (_, ctx: ExecutionContext): any => {
        const req = ctx.switchToHttp().getRequest();
        return req.user;
    },
);
