import { Injectable } from '@nestjs/common';
import { IdRequest } from '../../libs/request/id.request';
import { ReadAuthRequest } from '../../libs/request/read-auth.request';
import { CreateAuthRequest } from '../../libs/request/create-auth.request';

@Injectable()
export class AuthRepository {
  signIn(body: ReadAuthRequest) {
    return 'signIn';
  }

  signUp(body: CreateAuthRequest) {
    return 'signUp';
  }

  deleteAuth(param: IdRequest) {
    return 'deleteAuth';
  }
}
