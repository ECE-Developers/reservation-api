import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  getUserOne(id: number) {
    return this.userRepository.getUserOne(id);
  }

  createUser(id: number) {
    return this.userRepository.createUser(id);
  }

  deleteUser(id: number) {
    return this.userRepository.deleteUser(id);
  }

  patchUser(id: number) {
    return this.userRepository.patchUser(id);
  }
}
