import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
    FastifyAdapter,
    NestFastifyApplication
} from '@nestjs/platform-fastify';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter()
    );

    app.setGlobalPrefix('monolith');

    app.useGlobalPipes(
        new ValidationPipe({
            transform: true, // Чтобы `class-transformer` мог преобразовать типы
            whitelist: true, // Удаляет поля, которые не указаны в DTO
            forbidNonWhitelisted: true // Если есть лишние поля — выбросить ошибку
        })
    );

    const PORT = process.env.monolith_PORT_PJ ? process.env.monolith_PORT_PJ : (() => { throw new Error(`Не поставлен порт в monolith`); })();

    await app.listen(PORT, '0.0.0.0', (err) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.log(`Server listening at port ${PORT}`);
    });
}
bootstrap();
