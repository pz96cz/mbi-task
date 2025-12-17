import { User } from "../../proto/user/User";
import { ServerUnaryCall } from "@grpc/grpc-js";
import UserService from "../services/userService";
import { UsersRequest } from "../../proto/user/UsersRequest";
import { GetUsersBatchRequest } from "../../proto/user/GetUsersBatchRequest";
import { GetUserRequest } from "../../proto/user/GetUserRequest";
import { LoginRequest } from "../../proto/user/LoginRequest";

/**
 * Controller implementing user.proto contract
 */
const UsersServiceController = {
    InsertUsers: async (call: ServerUnaryCall<UsersRequest, any>, callback: any) => {
        try {
            const users = call.request.users;
            const result = await UserService.insertUsers(users);

            callback(null, result);
        }
        catch (err) {
            callback(err, null);
        }
    },
    InsertUser: async (call: ServerUnaryCall<User, any>, callback: any) => {
        try {
            const user = call.request;
            const result = await UserService.insertUser(user);

            callback(null, result);
        }
        catch (err) {
            callback(err, null);
        }

    },
    GetUsers: async (call: ServerUnaryCall<GetUsersBatchRequest, any>, callback: any) => {
        try {
            const batchRequest = call.request;
            const result = await UserService.getUsers(batchRequest);

            callback(null, result);
        }
        catch (err) {
            callback(err, null);
        }
    },
    GetUser: async(call: ServerUnaryCall<GetUserRequest, any>, callback: any) => {
        try {
            const userId = call.request;
            const result = await UserService.getUser(userId);

            callback(null, result);
        }
        catch (err) {
            callback(err, null);
        }
    },
    LoginRequest: async(call: ServerUnaryCall<LoginRequest, any>, callback: any) => {
        try {
            const creds = call.request;
            const result = await UserService.generateJwtToken(creds);

            callback(null, result);
        }
        catch (err) {
            callback(err, null);
        }
    }
}

export default UsersServiceController;