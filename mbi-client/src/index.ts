
import { credentials, loadPackageDefinition } from '@grpc/grpc-js';
import { loadSync } from "@grpc/proto-loader";
import { ProtoGrpcType as UserGrpcType } from '../proto/user';
import * as path from "node:path";
import { User } from "../proto/user/User";
import { ImportService } from "./services/importService";

const PORT = 8081;

const packageDef = loadSync(path.resolve(__dirname, '../../proto/user/user.proto'));
const packageGrpc = (loadPackageDefinition(packageDef) as unknown) as UserGrpcType;

const client = new packageGrpc.user.UsersService(
    `0.0.0.0:${PORT}`, credentials.createInsecure()
);

const bootstrap = async () => {
    const users: User[] = await ImportService.import(path.resolve(__dirname, '../static/users-init.json'));

    client.InsertUsers({ users }, (err, value) => {
        if (err) {
            console.log('There was an error during inserting users from users-init.json', err);
            return;
        }

        console.log('Inserting users from users-init.json:');
        console.log('Result:', value);

        client.InsertUser(users[0], (err, value) => {
            if (err) {
                console.log('There was an error during inserting first user from users-init.json', err);
                return;
            }

            console.log('Inserting first user from users-init.json:');
            console.log('Result:', value);
        });

        client.GetUsers({offset: 0, limit: 5}, (err, value) => {
            console.log(value);
        })
    });
}

bootstrap();


