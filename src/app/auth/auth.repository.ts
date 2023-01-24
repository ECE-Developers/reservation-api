import { Injectable } from '@nestjs/common';
import { deleteAuthRequest } from '../../libs/request/delete-auth.request';
import { CreateAuthRequest } from '../../libs/request/create-auth.request';

@Injectable()
export class AuthRepository {
  signUp(body: CreateAuthRequest) {
    return 'signUp';
  }

  deleteAuth(param: deleteAuthRequest) {
    return 'deleteAuth';
  }
}
