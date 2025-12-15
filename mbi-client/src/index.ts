
import { credentials, loadPackageDefinition } from '@grpc/grpc-js';
import { loadSync } from "@grpc/proto-loader";
import { ProtoGrpcType as UserGrpcType } from '../proto/user';
import * as path from "node:path";
import {ImportService} from "../service/importService";

const PORT = 8081;

const packageDef = loadSync(path.resolve(__dirname, '../../proto/user/user.proto'));
const packageGrpc = (loadPackageDefinition(packageDef) as unknown) as UserGrpcType;

const client = new packageGrpc.user.UsersService(
    `0.0.0.0:${PORT}`, credentials.createInsecure()
);

const bootstrap = async () => {
    const users = await ImportService.import(path.resolve(__dirname, '../static/users-init.json'));

    console.log(users);
}

const deadline = new Date()
deadline.setSeconds(deadline.getSeconds() + 5)
client.waitForReady(deadline, bootstrap);