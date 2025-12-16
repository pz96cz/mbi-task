
import { credentials, loadPackageDefinition } from '@grpc/grpc-js';
import { loadSync } from "@grpc/proto-loader";
import { ProtoGrpcType as UserGrpcType } from '../proto/user';
import * as path from "node:path";

const PORT = 8081;

const packageDef = loadSync(path.resolve(__dirname, '../../proto/user/user.proto'));
const packageGrpc = (loadPackageDefinition(packageDef) as unknown) as UserGrpcType;

const client = new packageGrpc.user.UsersService(
    `0.0.0.0:${PORT}`, credentials.createInsecure()
);

const bootstrap = async () => {
    client.GetUsers({offset: 1, limit: 5}, (err, value) => {
        console.log(value);
    })
}

bootstrap();


