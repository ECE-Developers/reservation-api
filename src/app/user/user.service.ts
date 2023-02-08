import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { UserRepository } from './user.repository';
import { deleteUserRequest } from '../../libs/request/users/delete-user.request';
import { CreateUserRequest } from '../../libs/request/users/create-user.request';
import { UpdateUserRequest } from '../../libs/request/users/update-user.request';
import { UserEntity } from '../../libs/entity/user.entity';
import { DataSource } from 'typeorm';
import { InternalServerErrorError } from '../../libs/response/status-code/internal-server-error.error';
import { UserIdRequest } from '../../libs/request/users/user-id.request';

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

  async getUserOne(dto: UserIdRequest) {
    try {
      return await this.userRepository.getUserOne(dto.id);
    } catch (error) {
      this.logger.error(error);
      if (error instanceof NotFoundException)
        throw new NotFoundException(error.getResponse());
      throw new InternalServerErrorException(error.getResponse());
    }
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

  async updateUser(dto: UpdateUserRequest) {
    try {
      const user = await this.userRepository.getUserByUsername(dto.username);
      if (!user)
        throw new NotFoundException('존재하지 않는 사용자를 조회했습니다.');

      if (user.name === dto.name && user.student_id === dto.student_id)
        await this.userRepository.updateUserPassword(dto);
      else throw new BadRequestException('입력 형식이 잘못되었습니다.');

      return {
        id: user.id,
        name: user.name,
        student_id: user.student_id,
        massage: 'user의 password가 성공적으로 변경됐습니다.',
      };
    } catch (error) {
      this.logger.error(error);
      if (error instanceof BadRequestException)
        throw new BadRequestException(error.getResponse());
      if (error instanceof NotFoundException)
        throw new NotFoundException(error.getResponse());
      throw new InternalServerErrorException(error.getResponse());
    }
  }
  async deleteUser(dto: deleteUserRequest) {
    try {
      const user = await this.userRepository.getUserByUsername(dto.username);
      if (!user)
        throw new NotFoundException('존재하지 않는 사용자를 조회했습니다.');
      await this.userRepository.deleteUser(dto.username);
      return {
        statusCode: 200,
        message: '성공적으로 삭제됐습니다.',
      };
    } catch (error) {
      this.logger.error(error);
      if (error instanceof NotFoundException)
        throw new NotFoundException(error.getResponse());
      throw new InternalServerErrorException(error.getResponse());
    }
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
