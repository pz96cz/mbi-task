import {User} from "../proto/user/User";
import {ServerUnaryCall} from "@grpc/grpc-js";
import {UserResponse} from "../proto/user/UserResponse";
import UserService from "../services/userService";


const UsersServiceController = {
    InsertUser: async (call: ServerUnaryCall<User, any>): Promise<UserResponse> => {
        const userPayload = call.request;

        await UserService.insertUser(userPayload);

        return {
            payload: {}
        }
    }
}

export default UsersServiceController;