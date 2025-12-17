import * as path from "node:path";
import { Server, loadPackageDefinition, ServerCredentials } from '@grpc/grpc-js';
import { loadSync } from "@grpc/proto-loader";
import { ProtoGrpcType as UserGrpcType  } from '../proto/user';
import UsersServiceController from "./controllers/usersServiceController";

const PORT = 8081;

const packageDef = loadSync(path.resolve(__dirname, '../../proto/user/user.proto'));
const packageGrpc = (loadPackageDefinition(packageDef) as unknown) as UserGrpcType;

const registerServices = (server: Server) => {
    server.addService(packageGrpc.user.UsersService.service, UsersServiceController);
}

const bootstrap = () => {
    const server = new Server();

    server.bindAsync(`0.0.0.0:${PORT}`, ServerCredentials.createInsecure(), (err, port) => {
        try {
            if (err !== null ) throw err;
            registerServices(server);
            console.log(`Server properly started on port: ${port}`);
        }
        catch (err) {
            console.log('There was an error during starting of server.', err);
            return;
        }
    });
}

bootstrap();



