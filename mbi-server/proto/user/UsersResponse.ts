// Original file: ../proto/user/user.proto

import type { User as _user_User, User__Output as _user_User__Output } from '../user/User';

export interface UsersResponse {
  'users'?: (_user_User)[];
  'errors'?: (string)[];
}

export interface UsersResponse__Output {
  'users'?: (_user_User__Output)[];
  'errors'?: (string)[];
}
