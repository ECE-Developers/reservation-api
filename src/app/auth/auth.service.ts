import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { IdRequest } from '../../libs/request/id.request';
import { ReadAuthRequest } from '../../libs/request/read-auth.request';
import { CreateAuthRequest } from '../../libs/request/create-auth.request';

@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

  signIn(body: ReadAuthRequest) {
    return this.authRepository.signIn(body);
  }

  signUp(body: CreateAuthRequest) {
    return this.authRepository.signUp(body);
  }

  deleteAuth(param: IdRequest) {
    return this.authRepository.deleteAuth(param);
  }
}
