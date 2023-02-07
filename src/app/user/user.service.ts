import { Injectable, Logger } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { deleteUserRequest } from '../../libs/request/delete-user.request';
import { CreateUserRequest } from '../../libs/request/create-user.request';
import { UpdateUserRequest } from '../../libs/request/update-user.request';
import { UserEntity } from '../../libs/entity/user.entity';
import { DataSource } from 'typeorm';
import { InternalServerErrorError } from '../../libs/response/status-code/internal-server-error.error';

export type User = any;

@Injectable()
export class UserService {
  private logger = new Logger();
  constructor(
    private readonly userRepository: UserRepository,
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
  async signUp(dto: CreateUserRequest) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      await queryRunner.manager.save(this.makeUserEntity(dto));
      await queryRunner.commitTransaction();
      return this.userRepository.getUserByUsername(dto.username);
    } catch (error) {
      this.logger.error(error);
      await queryRunner.rollbackTransaction();
      throw new InternalServerErrorError();
    } finally {
      await queryRunner.release();
    }
  }

  updateAuth(body: UpdateUserRequest) {
    return this.userRepository.updateAuth(body);
  }
  deleteAuth(body: deleteUserRequest) {
    return this.userRepository.deleteAuth(body);
  }

  private makeUserEntity(dto: CreateUserRequest): UserEntity {
    const user = new UserEntity();
    user.username = dto.username;
    user.password = dto.password;
    user.name = dto.name;
    user.studentId = dto.student_id;

    return user;
  }
}
