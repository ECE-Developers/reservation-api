import { Injectable } from '@nestjs/common';
import { IdRequest } from '../../libs/request/id.request';

@Injectable()
export class AuthRepository {
  signUp() {
    return 'signUp';
  }

  signIn() {
    return 'signIn';
  }

  deleteAuth(id: IdRequest) {
    return 'deleteAuth';
  }
}
