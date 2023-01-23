import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { IdRequest } from '../../libs/request/id.request';
import { AuthRequest } from '../../libs/request/auth.request';

@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

  signIn(body: AuthRequest) {
    return this.authRepository.signIn(body);
  }

  signUp(body: AuthRequest) {
    return this.authRepository.signUp(body);
  }

  deleteAuth(param: IdRequest) {
    return this.authRepository.deleteAuth(param);
  }
}
