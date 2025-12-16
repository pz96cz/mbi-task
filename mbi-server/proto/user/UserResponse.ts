// Original file: ../proto/user/user.proto

import type { User as _user_User, User__Output as _user_User__Output } from '../user/User';

export interface UserResponse {
  'user'?: (_user_User | null);
  'errors'?: (string)[];
}

export interface UserResponse__Output {
  'user'?: (_user_User__Output);
  'errors'?: (string)[];
}
