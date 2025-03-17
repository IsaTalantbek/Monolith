// Можно удалить, это просто для теста

import { Controller, Get, Param, Post } from '@nestjs/common';
import { TestService } from './test.service';
import { GrpcCommandClient } from '../../microservices/client/command/command.client';

@Controller('test')
export class TestController {
    constructor(
        private readonly service: TestService,
        private readonly client: GrpcCommandClient
    ) {}

    @Post(':name')
    async create(@Param('name') name: string) {
        return this.service.create(name);
    }

    @Get()
    async give() {
        console.log(process.env.NODE_ENV);
        return this.service.give();
    }

    @Get(':name')
    async grpc(@Param('name') name: string) {
        return this.client.sendTest({ name });
    }
}
