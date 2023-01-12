import { UserController } from './user.controller';
import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';

describe('UserController', () => {
  let userController: UserController;

  beforeEach(async () => {
    const user: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService, UserRepository],
    }).compile();

    userController = user.get<UserController>(UserController);
  });

  describe('createUser', () => {
    it('should return "createUser"', () => {
      expect(userController.createUser(1)).toBe('createUser');
    });
  });

  describe('getUserOne', () => {
    it('should return "getUserOne"', () => {
      expect(userController.getUserOne(1)).toBe('getUserOne');
    });
  });
});
