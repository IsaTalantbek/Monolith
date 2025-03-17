import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { TestService } from './test.service';
import { PrismaModule } from '../../core/prisma/prisma.module';
import { GrpcClientModule } from '../../microservices/client/grpc.client.module';

@Module({
    imports: [PrismaModule, GrpcClientModule],
    controllers: [TestController],
    providers: [TestService]
})
export class TestModule {}
