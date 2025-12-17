
import { credentials, loadPackageDefinition } from '@grpc/grpc-js';
import { loadSync } from "@grpc/proto-loader";
import { ProtoGrpcType as UserGrpcType } from '../proto/user';
import * as path from "node:path";
import { ImportService } from "./services/importService";
import { User } from "../proto/user/User";

const PORT = 8081;

const packageDef = loadSync(path.resolve(__dirname, '../../proto/user/user.proto'));
const packageGrpc = (loadPackageDefinition(packageDef) as unknown) as UserGrpcType;

const client = new packageGrpc.user.UsersService(
    `0.0.0.0:${PORT}`, credentials.createInsecure()
);

const bootstrap = async () => {
    const users: User[] = await ImportService.import(path.resolve(__dirname, '../static/users-init.json'));

    console.log('Inserting batch of users from users-init.json file.');
    client.InsertUsers({ users }, (err, data) => {
        if (err) {
            console.log('There was an error during importing the users from file.', err);
            return;
        }

        console.log('Insertion done:', data);

        const user = users[0];

        console.log(`Inserting user with existing email ${user.email}`);

        client.InsertUser(user, (err, data) => {
            if (err) {
                console.log('There was an error during inserting an user with existing email.', err);
                return;
            }

            console.log('Insertion result:', data);

            console.log('Getting second page with max 5 users per page');
            client.GetUsers({offset: 1, limit: 5}, (err, data) => {
                if (err) {
                    console.log('There was an error during getting users.', err);
                    return;
                }

                console.log('Users on second page', data);
            });

            console.log('Getting second page with max 10 users per page');
            client.GetUsers({offset: 1, limit: 10}, (err, data) => {
                if (err) {
                    console.log('There was an error during getting users.', err);
                    return;
                }

                console.log('Users on second page', data);

                if (data && data.users && data.users.length) {
                    const userId = data.users[0].id;

                    console.log(`Getting only one user with id: ${userId}`);
                    client.GetUser({ userId }, (err, data) => {
                        if (err) {
                            console.log('There was an error during getting user.', err);
                            return;
                        }
                        console.log(data);
                    });
                }

                console.log('Generating JWT Token for the user.');
                client.LoginRequest({email: 'patrik@skoda.cz', password: '$wfewfgife'}, (err, data) => {
                    console.log(data);
                })
            });
        })
    });
}

bootstrap();


