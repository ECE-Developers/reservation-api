import { Injectable } from '@nestjs/common';
import { deleteUserRequest } from '../../libs/request/delete-user.request';
import { CreateUserRequest } from '../../libs/request/create-user.request';
import { UpdateUserRequest } from '../../libs/request/update-user.request';

@Injectable()
export class UserRepository {
  signUp(body: CreateUserRequest) {
    return 'signUp';
  }

  updateAuth(body: UpdateUserRequest) {
    return 'updateAuth';
  }

  deleteAuth(body: deleteUserRequest) {
    return 'deleteAuth';
  }
}
