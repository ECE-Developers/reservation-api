import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { IdRequest } from '../../libs/request/id.request';

@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

  signUp() {
    return this.authRepository.signUp();
  }

  signIn() {
    return this.authRepository.signIn();
  }

  deleteAuth(id: IdRequest) {
    return this.authRepository.deleteAuth(id);
  }
}
