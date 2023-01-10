import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  findUser(id: number) {
    return this.userRepository.getUserOne(id);
  }

  createUser(id: number) {
    return this.userRepository.makeUserOne(id);
  }
}
