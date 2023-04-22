import { UpdateUserRequest } from '../../libs/request/users/update-user.request';

export interface UserRepositoryInterface {
  getUserOne(userId: number);
  getUserByUsername(username: string);
  updateUserPassword(dto: UpdateUserRequest);
  deleteUser(username: string);
}
