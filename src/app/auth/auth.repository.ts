import { Injectable } from '@nestjs/common';
import { IdRequest } from '../../libs/request/id.request';
import { AuthRequest } from '../../libs/request/auth.request';

@Injectable()
export class AuthRepository {
  signUp(body: AuthRequest) {
    return 'signUp';
  }

  signIn(body: AuthRequest) {
    return 'signIn';
  }

  deleteAuth(param: IdRequest) {
    return 'deleteAuth';
  }
}
