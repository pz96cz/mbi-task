import * as path from "node:path";

const PORT = 8081;
import {Server, loadPackageDefinition, ServerCredentials, handleUnaryCall} from '@grpc/grpc-js';
import { loadSync } from "@grpc/proto-loader";
import { ProtoGrpcType as UserGrpcType  } from '../proto/user';
import UsersServiceController from "../controllers/usersServiceController";

const packageDef = loadSync(path.resolve(__dirname, '../../proto/user/user.proto'));
const packageGrpc = (loadPackageDefinition(packageDef) as unknown) as UserGrpcType;

const registerServices = (server: Server) => {
    server.addService(packageGrpc.user.UsersService.service, UsersServiceController);
}

const bootstrap = () => {
    const server = new Server();

    server.bindAsync(`0.0.0.0:${PORT}`, ServerCredentials.createInsecure(), (err, port) => {
        console.log('server properly stared');

        registerServices(server);
    });
}

bootstrap();



