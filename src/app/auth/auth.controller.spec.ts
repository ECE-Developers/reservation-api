import { AuthController } from './auth.controller';
import { TestingModule, Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { AuthRepository } from './auth.repository';
import { deleteAuthRequest } from '../../libs/request/delete-auth.request';

import { CreateAuthRequest } from '../../libs/request/create-auth.request';

describe('authController', () => {
  let authController: AuthController;

  beforeEach(async () => {
    const auth: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService, AuthRepository],
    }).compile();

    authController = auth.get<AuthController>(AuthController);
  });

  const postBody = new CreateAuthRequest();

  describe('signUp', () => {
    it('should return "signUp"', () => {
      expect(authController.signUp(postBody)).toBe('signUp');
    });
  });

  const param = new deleteAuthRequest();
  describe('deleteAuth', () => {
    it('should return "deleteAuth"', () => {
      expect(authController.deleteAuth(param)).toBe('deleteAuth');
    });
  });
});
