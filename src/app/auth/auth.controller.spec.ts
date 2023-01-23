import { AuthController } from './auth.controller';
import { TestingModule, Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { AuthRepository } from './auth.repository';
import { IdRequest } from '../../libs/request/id.request';
import { AuthRequest } from '../../libs/request/auth.request';

describe('authController', () => {
  let authController: AuthController;

  beforeEach(async () => {
    const auth: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService, AuthRepository],
    }).compile();

    authController = auth.get<AuthController>(AuthController);
  });

  const body = new AuthRequest();

  describe('signUp', () => {
    it('should return "signUp"', () => {
      expect(authController.signUp(body)).toBe('signUp');
    });
  });

  describe('signIn', () => {
    it('should return "signIn"', () => {
      expect(authController.signIn(body)).toBe('signIn');
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
