import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport} from "@nestjs/microservices";
import path from "node:path";

const bootstrap = async () => {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
        transport: Transport.GRPC,
        options: {
            package: 'user',
            protoPath: path.join(__dirname, 'proto/user.proto'),
            url: '0.0.0.0:50052',
        },
    });

    await app.listen();
}

bootstrap();
