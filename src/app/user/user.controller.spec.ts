import { UserController } from './user.controller';
import { TestingModule, Test } from '@nestjs/testing';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { deleteUserRequest } from '../../libs/request/delete-user.request';

import { CreateUserRequest } from '../../libs/request/create-user.request';
import { UpdateUserRequest } from '../../libs/request/update-user.request';

describe('authController', () => {
  let authController: UserController;

  beforeEach(async () => {
    const auth: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService, UserRepository],
    }).compile();

    authController = auth.get<UserController>(UserController);
  });

  const postBody = new CreateUserRequest();

  describe('signUp', () => {
    it('should return "signUp"', () => {
      expect(authController.signUp(postBody)).toBe('signUp');
    });
  });

  const updateBody = new UpdateUserRequest();

  describe('updateAuth', () => {
    it('should return "updateAuth"', () => {
      expect(authController.updateAuth(updateBody)).toBe('updateAuth');
    });
  });

  const deleteBody = new deleteUserRequest();
  describe('deleteAuth', () => {
    it('should return "deleteAuth"', () => {
      expect(authController.deleteAuth(deleteBody)).toBe('deleteAuth');
    });
  });
});
