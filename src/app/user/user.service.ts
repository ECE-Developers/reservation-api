import { HttpException, Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { deleteUserRequest } from '../../libs/request/delete-user.request';
import { CreateUserRequest } from '../../libs/request/create-user.request';
import { UpdateUserRequest } from '../../libs/request/update-user.request';
import { DataSource } from 'typeorm';

export type User = any;

@Injectable()
export class UserService {
  constructor(
    private readonly authRepository: UserRepository,
    private readonly dataSource: DataSource,
  ) {}

  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
  async signUp(body: CreateUserRequest): Promise<any> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    console.log(await body.toCreateUserEntity(body));
    try {
      await this.dataSource.manager.save(await body.toCreateUserEntity(body));
      await queryRunner.commitTransaction();

      return this.authRepository.signUp(body);
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new HttpException('asd', 400);
    } finally {
      await queryRunner.release();
    }
  }

  updateAuth(body: UpdateUserRequest) {
    return this.authRepository.updateAuth(body);
  }
  deleteAuth(body: deleteUserRequest) {
    return this.authRepository.deleteAuth(body);
  }
}
