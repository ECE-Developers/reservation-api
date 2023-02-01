import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { deleteUserRequest } from '../../libs/request/delete-user.request';
import { CreateUserRequest } from '../../libs/request/create-user.request';
import { UpdateUserRequest } from '../../libs/request/update-user.request';

export type User = any;

@Injectable()
export class UserService {
  constructor(private readonly authRepository: UserRepository) {}

  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
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
