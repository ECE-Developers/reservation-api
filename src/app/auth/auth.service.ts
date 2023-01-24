import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { deleteAuthRequest } from '../../libs/request/delete-auth.request';
import { CreateAuthRequest } from '../../libs/request/create-auth.request';
import { UpdateAuthRequest } from '../../libs/request/update-auth.request';

@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

  signUp(body: CreateAuthRequest) {
    return this.authRepository.signUp(body);
  }

  updateAuth(body: UpdateAuthRequest) {
    return this.authRepository.updateAuth(body);
  }
  deleteAuth(body: deleteAuthRequest) {
    return this.authRepository.deleteAuth(body);
  }
}
