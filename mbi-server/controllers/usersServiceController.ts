import { User } from "../proto/user/User";
import { ServerUnaryCall } from "@grpc/grpc-js";
import { UserResponse } from "../proto/user/UserResponse";
import UserService from "../services/userService";
import { UsersRequest } from "../proto/user/UsersRequest";
import { UsersResponse } from "../proto/user/UsersResponse";

/**
 * Controller implementing user.proto contract
 */
const UsersServiceController = {
    InsertUser: async (call: ServerUnaryCall<User, any>): Promise<UserResponse> => {
        const userPayload = call.request;
        return await UserService.insertUser(userPayload);
    },
    InsertUsers: async (call: ServerUnaryCall<UsersRequest, any>): Promise<UsersResponse> => {
        const usersPayload = call.request.users;

        const result = await UserService.insertUsers(usersPayload);

        console.log(result);

        return result;
    }
}

export default UsersServiceController;