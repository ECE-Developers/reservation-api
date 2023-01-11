import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  getUserOne(id: number) {
    return 'getUserOne';
  }

  makeUserOne(id: number) {
    return 'makeUserOne';
  }
}
