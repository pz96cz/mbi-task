
import { credentials, loadPackageDefinition } from '@grpc/grpc-js';
import { loadSync } from "@grpc/proto-loader";
import { ProtoGrpcType as UserGrpcType } from '../proto/user';
import * as path from "node:path";
import {User} from "../proto/user/User";

const PORT = 8081;

const packageDef = loadSync(path.resolve(__dirname, '../../proto/user/user.proto'));
const packageGrpc = (loadPackageDefinition(packageDef) as unknown) as UserGrpcType;

const client = new packageGrpc.user.UsersService(
    `0.0.0.0:${PORT}`, credentials.createInsecure()
);

const clientCallback = (err: Error | undefined) => {
    if (err) {
        console.error(err)
        return
    }
    const user: User = {
        id: 2,
        firstName: 'Patrik',
        lastName: 'Zapletal',
        companyName: 'MBI',
        email: 'email@email32.cz',
        password: 'hashedPassword'
    }

    client.InsertUser(user, (err, result) => {
        console.log('running insert user');
    })
}

const deadline = new Date()
deadline.setSeconds(deadline.getSeconds() + 5)
client.waitForReady(deadline, clientCallback);