import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { User as _user_User, User__Output as _user_User__Output } from './user/User';
import type { UserResponse as _user_UserResponse, UserResponse__Output as _user_UserResponse__Output } from './user/UserResponse';
import type { UsersServiceClient as _user_UsersServiceClient, UsersServiceDefinition as _user_UsersServiceDefinition } from './user/UsersService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  user: {
    User: MessageTypeDefinition<_user_User, _user_User__Output>
    UserResponse: MessageTypeDefinition<_user_UserResponse, _user_UserResponse__Output>
    UsersService: SubtypeConstructor<typeof grpc.Client, _user_UsersServiceClient> & { service: _user_UsersServiceDefinition }
  }
}

