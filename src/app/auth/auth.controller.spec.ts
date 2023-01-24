import { AuthController } from './auth.controller';
import { TestingModule, Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { AuthRepository } from './auth.repository';
import { deleteAuthRequest } from '../../libs/request/delete-auth.request';

import { CreateAuthRequest } from '../../libs/request/create-auth.request';
import { UpdateAuthRequest } from '../../libs/request/update-auth.request';

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

  const updateBody = new UpdateAuthRequest();

  describe('updateAuth', () => {
    it('should return "updateAuth"', () => {
      expect(authController.updateAuth(updateBody)).toBe('updateAuth');
    });
  });

  const deleteBody = new deleteAuthRequest();
  describe('deleteAuth', () => {
    it('should return "deleteAuth"', () => {
      expect(authController.deleteAuth(deleteBody)).toBe('deleteAuth');
    });
  });
});
