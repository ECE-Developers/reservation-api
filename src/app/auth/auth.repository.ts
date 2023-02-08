import { Injectable } from '@nestjs/common';
import { UsernameRequest } from '../../libs/request/users/username.request';

@Injectable()
export class AuthRepository {
  checkUsername(param: UsernameRequest) {
    return 'checkUsername';
  }
}
