import {User} from "../proto/user/User";
import {ServerUnaryCall} from "@grpc/grpc-js";
import {UserResponse} from "../proto/user/UserResponse";
import UserService from "../services/userService";

/**
 * Controller implementing user.proto contract
 */
const UsersServiceController = {
    InsertUser: async (call: ServerUnaryCall<User, any>): Promise<UserResponse> => {
        const userPayload = call.request;

        await UserService.insertUser(userPayload);

        console.log(call);

        return {};
    }
}

export default UsersServiceController;