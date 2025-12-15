// Original file: ../proto/user/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { User as _user_User, User__Output as _user_User__Output } from '../user/User';
import type { UserResponse as _user_UserResponse, UserResponse__Output as _user_UserResponse__Output } from '../user/UserResponse';

export interface UsersServiceClient extends grpc.Client {
  InsertUser(argument: _user_User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  InsertUser(argument: _user_User, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  InsertUser(argument: _user_User, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  InsertUser(argument: _user_User, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  insertUser(argument: _user_User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  insertUser(argument: _user_User, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  insertUser(argument: _user_User, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  insertUser(argument: _user_User, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface UsersServiceHandlers extends grpc.UntypedServiceImplementation {
  InsertUser: grpc.handleUnaryCall<_user_User__Output, _user_UserResponse>;
  
}

export interface UsersServiceDefinition extends grpc.ServiceDefinition {
  InsertUser: MethodDefinition<_user_User, _user_UserResponse, _user_User__Output, _user_UserResponse__Output>
}
