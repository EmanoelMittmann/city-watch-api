import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';
import { PrismaService } from './infra/databases/orms/prisma/prisma.service';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.enableCors({
        origin: '*',
    });

    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            whitelist: true,
        }),
    );

    const config = new DocumentBuilder()
        .addBearerAuth({
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
        })
        .setTitle('Omni CTW')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/doc', app, document);

    const prismaService = app.get(PrismaService);

    await prismaService.enableShutdownHooks(app);

    await app.listen(3000);
}
bootstrap();
