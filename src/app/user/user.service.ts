import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { deleteUserRequest } from '../../libs/request/delete-user.request';
import { CreateUserRequest } from '../../libs/request/create-user.request';
import { UpdateUserRequest } from '../../libs/request/update-user.request';

@Injectable()
export class UserService {
  constructor(private readonly authRepository: UserRepository) {}

  signUp(body: CreateUserRequest) {
    return this.authRepository.signUp(body);
  }

  updateAuth(body: UpdateUserRequest) {
    return this.authRepository.updateAuth(body);
  }
  deleteAuth(body: deleteUserRequest) {
    return this.authRepository.deleteAuth(body);
  }
}
