import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  getUserOne(id: number) {
    return 'getUserOne';
  }

  createUser(id: number) {
    return 'createUser';
  }

  deleteUser(id: number) {
    return 'deleteUser';
  }

  patchUser(id: number) {
    return 'patchUser';
  }
}
