import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersService } from "./services/users.service";
import { join } from "path";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [
      ClientsModule.register([
          {
              name: 'USER_PACKAGE',
              transport: Transport.GRPC,
              options: {
                  url: 'localhost:5000',
                  package: 'user',
                  protoPath: join(__dirname, 'proto/user.proto'),
              },
          },
      ]),
      HttpModule
  ],
  controllers: [AppController],
  providers: [UsersService],
})
export class AppModule {}
