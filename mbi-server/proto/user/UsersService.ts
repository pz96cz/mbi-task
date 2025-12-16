// Original file: ../proto/user/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GetUserRequest as _user_GetUserRequest, GetUserRequest__Output as _user_GetUserRequest__Output } from '../user/GetUserRequest';
import type { GetUsersBatchRequest as _user_GetUsersBatchRequest, GetUsersBatchRequest__Output as _user_GetUsersBatchRequest__Output } from '../user/GetUsersBatchRequest';
import type { LoginRequest as _user_LoginRequest, LoginRequest__Output as _user_LoginRequest__Output } from '../user/LoginRequest';
import type { LoginResponse as _user_LoginResponse, LoginResponse__Output as _user_LoginResponse__Output } from '../user/LoginResponse';
import type { User as _user_User, User__Output as _user_User__Output } from '../user/User';
import type { UserResponse as _user_UserResponse, UserResponse__Output as _user_UserResponse__Output } from '../user/UserResponse';
import type { UsersRequest as _user_UsersRequest, UsersRequest__Output as _user_UsersRequest__Output } from '../user/UsersRequest';
import type { UsersResponse as _user_UsersResponse, UsersResponse__Output as _user_UsersResponse__Output } from '../user/UsersResponse';

export interface UsersServiceClient extends grpc.Client {
  GetUser(argument: _user_GetUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _user_GetUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _user_GetUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _user_GetUserRequest, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _user_GetUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _user_GetUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _user_GetUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _user_GetUserRequest, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  
  GetUsers(argument: _user_GetUsersBatchRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  GetUsers(argument: _user_GetUsersBatchRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  GetUsers(argument: _user_GetUsersBatchRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  GetUsers(argument: _user_GetUsersBatchRequest, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  getUsers(argument: _user_GetUsersBatchRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  getUsers(argument: _user_GetUsersBatchRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  getUsers(argument: _user_GetUsersBatchRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  getUsers(argument: _user_GetUsersBatchRequest, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  
  InsertUser(argument: _user_User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  InsertUser(argument: _user_User, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  InsertUser(argument: _user_User, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  InsertUser(argument: _user_User, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  insertUser(argument: _user_User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  insertUser(argument: _user_User, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  insertUser(argument: _user_User, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  insertUser(argument: _user_User, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  
  InsertUsers(argument: _user_UsersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UsersResponse__Output>): grpc.ClientUnaryCall;
  InsertUsers(argument: _user_UsersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UsersResponse__Output>): grpc.ClientUnaryCall;
  InsertUsers(argument: _user_UsersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UsersResponse__Output>): grpc.ClientUnaryCall;
  InsertUsers(argument: _user_UsersRequest, callback: grpc.requestCallback<_user_UsersResponse__Output>): grpc.ClientUnaryCall;
  insertUsers(argument: _user_UsersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UsersResponse__Output>): grpc.ClientUnaryCall;
  insertUsers(argument: _user_UsersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UsersResponse__Output>): grpc.ClientUnaryCall;
  insertUsers(argument: _user_UsersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UsersResponse__Output>): grpc.ClientUnaryCall;
  insertUsers(argument: _user_UsersRequest, callback: grpc.requestCallback<_user_UsersResponse__Output>): grpc.ClientUnaryCall;
  
  LoginRequest(argument: _user_LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_LoginResponse__Output>): grpc.ClientUnaryCall;
  LoginRequest(argument: _user_LoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_LoginResponse__Output>): grpc.ClientUnaryCall;
  LoginRequest(argument: _user_LoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_LoginResponse__Output>): grpc.ClientUnaryCall;
  LoginRequest(argument: _user_LoginRequest, callback: grpc.requestCallback<_user_LoginResponse__Output>): grpc.ClientUnaryCall;
  loginRequest(argument: _user_LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_LoginResponse__Output>): grpc.ClientUnaryCall;
  loginRequest(argument: _user_LoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_LoginResponse__Output>): grpc.ClientUnaryCall;
  loginRequest(argument: _user_LoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_LoginResponse__Output>): grpc.ClientUnaryCall;
  loginRequest(argument: _user_LoginRequest, callback: grpc.requestCallback<_user_LoginResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface UsersServiceHandlers extends grpc.UntypedServiceImplementation {
  GetUser: grpc.handleUnaryCall<_user_GetUserRequest__Output, _user_UserResponse>;
  
  GetUsers: grpc.handleUnaryCall<_user_GetUsersBatchRequest__Output, _user_UserResponse>;
  
  InsertUser: grpc.handleUnaryCall<_user_User__Output, _user_UserResponse>;
  
  InsertUsers: grpc.handleUnaryCall<_user_UsersRequest__Output, _user_UsersResponse>;
  
  LoginRequest: grpc.handleUnaryCall<_user_LoginRequest__Output, _user_LoginResponse>;
  
}

export interface UsersServiceDefinition extends grpc.ServiceDefinition {
  GetUser: MethodDefinition<_user_GetUserRequest, _user_UserResponse, _user_GetUserRequest__Output, _user_UserResponse__Output>
  GetUsers: MethodDefinition<_user_GetUsersBatchRequest, _user_UserResponse, _user_GetUsersBatchRequest__Output, _user_UserResponse__Output>
  InsertUser: MethodDefinition<_user_User, _user_UserResponse, _user_User__Output, _user_UserResponse__Output>
  InsertUsers: MethodDefinition<_user_UsersRequest, _user_UsersResponse, _user_UsersRequest__Output, _user_UsersResponse__Output>
  LoginRequest: MethodDefinition<_user_LoginRequest, _user_LoginResponse, _user_LoginRequest__Output, _user_LoginResponse__Output>
}
