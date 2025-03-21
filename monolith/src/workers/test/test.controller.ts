// Можно удалить, это просто для теста

import { Controller, Get, Param, Post } from '@nestjs/common';
import { TestService } from './test.service';

@Controller('test')
export class TestController {
    constructor(
        private readonly service: TestService,
    ) {}

    @Post(':name')
    async create(@Param('name') name: string) {
        console.log(1);
        return this.service.create(name);
    }

    @Get()
    async give() {
        console.log(process.env.NODE_ENV);
        return this.service.give();
    }
}
