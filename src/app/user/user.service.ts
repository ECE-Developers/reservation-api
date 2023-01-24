import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UpdateUserRequest } from '../../libs/request/update-user.request';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  getUserOne(id: number) {
    return this.userRepository.getUserOne(id);
  }

  createUser(id: number) {
    return this.userRepository.createUser(id);
  }

  updateUser(body: UpdateUserRequest) {
    return this.userRepository.updateUser(body);
  }
}
