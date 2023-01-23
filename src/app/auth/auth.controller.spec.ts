import { AuthController } from './auth.controller';
import { TestingModule, Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { AuthRepository } from './auth.repository';
import { IdRequest } from '../../libs/request/id.request';
import { ReadAuthRequest } from '../../libs/request/read-auth.request';
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

  const getBody = new ReadAuthRequest();
  const postBody = new CreateAuthRequest();
  describe('signIn', () => {
    it('should return "signIn"', () => {
      expect(authController.signIn(getBody)).toBe('signIn');
    });
  });
  describe('signUp', () => {
    it('should return "signUp"', () => {
      expect(authController.signUp(postBody)).toBe('signUp');
    });
  });

  const param = new IdRequest();
  param.id = 1;
  describe('deleteAuth', () => {
    it('should return "deleteAuth"', () => {
      expect(authController.deleteAuth(param)).toBe('deleteAuth');
    });
  });
});
