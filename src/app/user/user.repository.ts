import { Injectable } from '@nestjs/common';
import { UpdateUserRequest } from '../../libs/request/update-user.request';

@Injectable()
export class UserRepository {
  getUserOne(id: number) {
    return 'getUserOne';
  }

  createUser(id: number) {
    return 'createUser';
  }

  updateUser(body: UpdateUserRequest) {
    return 'updateUser';
  }
}
