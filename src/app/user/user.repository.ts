import { Injectable } from '@nestjs/common';
import { deleteUserRequest } from '../../libs/request/delete-user.request';
import { CreateUserRequest } from '../../libs/request/create-user.request';
import { UpdateUserRequest } from '../../libs/request/update-user.request';
import { DataSource } from 'typeorm';
import { UserEntity } from '../../libs/entity/user.entity';

@Injectable()
export class UserRepository {
  constructor(private readonly dataSource: DataSource) {}
  signUp(body: CreateUserRequest) {
    return 'signUp';
  }

  getUserByUsername(username: string) {
    try {
      return this.getUserOneByUsername(username);
    } catch (error) {
      throw error;
    }
  }
  updateAuth(body: UpdateUserRequest) {
    return 'updateAuth';
  }

  deleteAuth(body: deleteUserRequest) {
    return 'deleteAuth';
  }

  private async getUserOneByUsername(username: string) {
    return this.dataSource
      .createQueryBuilder()
      .select('id')
      .addSelect('name')
      .addSelect('student_id')
      .from(UserEntity, 'User')
      .where(`User.username =:username`, { username })
      .getRawOne();
  }
}
