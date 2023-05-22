import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { deleteUserRequest } from '../../libs/request/users/delete-user.request';
import { CreateUserRequest } from '../../libs/request/users/create-user.request';
import { UpdateUserRequest } from '../../libs/request/users/update-user.request';
import { DataSource } from 'typeorm';
import { UserIdRequest } from '../../libs/request/users/user-id.request';
import { UserRepositoryInterface } from './user.repository.interface';
import { ReadUserSuccessResponse } from '../../libs/response/users/read-user.success.response';
import { CreateUserSuccessResponse } from '../../libs/response/users/create-user.success.response';
import { UpdateUserSuccessResponse } from '../../libs/response/users/update-user.success.response';
import { DeleteUserSuccessResponse } from '../../libs/response/users/delete-user.success.response';
import { UserEntity } from '../../libs/entity/user.entity';

@Injectable()
export class UserService {
  private logger = new Logger();
  constructor(
    @Inject('impl')
    private readonly userRepository: UserRepositoryInterface,
    private readonly dataSource: DataSource,
    private readonly userEntity: UserEntity,
  ) {}

  async getUserOne(dto: UserIdRequest): Promise<ReadUserSuccessResponse> {
    try {
      const user = await this.userRepository.getUserOne(dto.id);
      if (!user) throw new NotFoundException('존재하지 않는 사용자입니다.');
      return new ReadUserSuccessResponse(user);
    } catch (error) {
      this.logger.error(error);
      if (error instanceof NotFoundException)
        throw new NotFoundException(error.getResponse());
      throw new InternalServerErrorException(error.getResponse());
    }
  }
  async signUp(dto: CreateUserRequest): Promise<CreateUserSuccessResponse> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      await queryRunner.manager.save(await this.userEntity.makeUserEntity(dto));
      await queryRunner.commitTransaction();
      const user = this.userRepository.getUserByUsername(dto.username);
      return new CreateUserSuccessResponse(user.id, user.name, user.student_id);
    } catch (error) {
      this.logger.error(error);
      await queryRunner.rollbackTransaction();
      throw new InternalServerErrorException();
    } finally {
      await queryRunner.release();
    }
  }

  async updateUser(dto: UpdateUserRequest): Promise<UpdateUserSuccessResponse> {
    try {
      const user = await this.userRepository.getUserByUsername(dto.username);
      if (!user)
        throw new NotFoundException('존재하지 않는 사용자를 조회했습니다.');

      if (user.name === dto.name && user.student_id === dto.student_id)
        await this.userRepository.updateUserPassword(dto);
      else throw new BadRequestException('입력 형식이 잘못되었습니다.');

      return new UpdateUserSuccessResponse(
        user.id,
        user.name,
        user.student_id,
        'user의 password가 성공적으로 변경됐습니다.',
      );
    } catch (error) {
      this.logger.error(error);
      if (error instanceof BadRequestException)
        throw new BadRequestException(error.getResponse());
      if (error instanceof NotFoundException)
        throw new NotFoundException(error.getResponse());
      throw new InternalServerErrorException(error.getResponse());
    }
  }
  async deleteUser(dto: deleteUserRequest): Promise<DeleteUserSuccessResponse> {
    try {
      const user = await this.userRepository.getUserByUsername(dto.username);
      if (!user)
        throw new NotFoundException('존재하지 않는 사용자를 조회했습니다.');
      await this.userRepository.deleteUser(dto.username);
      return new DeleteUserSuccessResponse(
        200,
        '성공적으로 삭제됐습니다.',
        user.id,
        user.username,
      );
    } catch (error) {
      this.logger.error(error);
      if (error instanceof NotFoundException)
        throw new NotFoundException(error.getResponse());
      throw new InternalServerErrorException(error.getResponse());
    }
  }
}
