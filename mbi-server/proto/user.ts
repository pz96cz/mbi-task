import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { GetUserRequest as _user_GetUserRequest, GetUserRequest__Output as _user_GetUserRequest__Output } from './user/GetUserRequest';
import type { GetUsersBatchRequest as _user_GetUsersBatchRequest, GetUsersBatchRequest__Output as _user_GetUsersBatchRequest__Output } from './user/GetUsersBatchRequest';
import type { LoginRequest as _user_LoginRequest, LoginRequest__Output as _user_LoginRequest__Output } from './user/LoginRequest';
import type { LoginResponse as _user_LoginResponse, LoginResponse__Output as _user_LoginResponse__Output } from './user/LoginResponse';
import type { User as _user_User, User__Output as _user_User__Output } from './user/User';
import type { UserResponse as _user_UserResponse, UserResponse__Output as _user_UserResponse__Output } from './user/UserResponse';
import type { UsersRequest as _user_UsersRequest, UsersRequest__Output as _user_UsersRequest__Output } from './user/UsersRequest';
import type { UsersResponse as _user_UsersResponse, UsersResponse__Output as _user_UsersResponse__Output } from './user/UsersResponse';
import type { UsersServiceClient as _user_UsersServiceClient, UsersServiceDefinition as _user_UsersServiceDefinition } from './user/UsersService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  user: {
    GetUserRequest: MessageTypeDefinition<_user_GetUserRequest, _user_GetUserRequest__Output>
    GetUsersBatchRequest: MessageTypeDefinition<_user_GetUsersBatchRequest, _user_GetUsersBatchRequest__Output>
    LoginRequest: MessageTypeDefinition<_user_LoginRequest, _user_LoginRequest__Output>
    LoginResponse: MessageTypeDefinition<_user_LoginResponse, _user_LoginResponse__Output>
    User: MessageTypeDefinition<_user_User, _user_User__Output>
    UserResponse: MessageTypeDefinition<_user_UserResponse, _user_UserResponse__Output>
    UsersRequest: MessageTypeDefinition<_user_UsersRequest, _user_UsersRequest__Output>
    UsersResponse: MessageTypeDefinition<_user_UsersResponse, _user_UsersResponse__Output>
    UsersService: SubtypeConstructor<typeof grpc.Client, _user_UsersServiceClient> & { service: _user_UsersServiceDefinition }
  }
}

