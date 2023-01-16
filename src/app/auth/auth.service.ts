import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';

@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

  signUp() {
    return this.authRepository.signUp();
  }

  signIn() {
    return this.authRepository.signIn();
  }
}
