import { Injectable } from '@nestjs/common';
import { UsernameRequest } from '../../libs/request/username.request';

@Injectable()
export class AuthRepository {
  checkUsername(param: UsernameRequest) {
    return 'checkUsername';
  }
}
