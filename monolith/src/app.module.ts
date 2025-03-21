import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BasePackModule } from './base.pack.module';
import { WorkerModule } from './workers/workers.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true
        }),
        BasePackModule,
        WorkerModule
    ]
})
export class AppModule {}
