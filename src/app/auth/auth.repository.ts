import { Injectable } from '@nestjs/common';
import { deleteAuthRequest } from '../../libs/request/delete-auth.request';
import { CreateAuthRequest } from '../../libs/request/create-auth.request';
import { UpdateAuthRequest } from '../../libs/request/update-auth.request';

@Injectable()
export class AuthRepository {
  signUp(body: CreateAuthRequest) {
    return 'signUp';
  }

  updateAuth(body: UpdateAuthRequest) {
    return 'updateAuth';
  }

  deleteAuth(body: deleteAuthRequest) {
    return 'deleteAuth';
  }
}
