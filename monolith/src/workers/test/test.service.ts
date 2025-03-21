// Можно удалить, это просто для теста

import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
    arr: string[] = []

    constructor() {
    }

    async create(name: string) {
        return this.arr.push(name)
    }

    async give() {
        return this.arr
    }
}
