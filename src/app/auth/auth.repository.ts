import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthRepository {
  signUp() {
    return 'signUp';
  }

  signIn() {
    return 'singIn';
  }
}
