import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { UserEntity } from '../../libs/entity/user.entity';
import { UpdateUserRequest } from '../../libs/request/users/update-user.request';
import { UserRepositoryInterface } from './user.repository.interface';
import * as argon2 from 'argon2';

@Injectable()
export class UserRepository implements UserRepositoryInterface {
  constructor(private readonly dataSource: DataSource) {}

  async getUserOne(userId: number): Promise<UserEntity> {
    try {
      return await this.getUserOneById(userId);
    } catch (error) {
      throw error;
    }
  }
  async getUserByUsername(username: string): Promise<any> {
    try {
      return await this.getUserOneByUsername(username);
    } catch (error) {
      throw error;
    }
  }

  async updateUserPassword(dto: UpdateUserRequest) {
    try {
      const data = {
        password: await argon2.hash(dto.new_password),
      };
      await this.updateUser(data, dto.student_id);
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(username: string) {
    try {
      await this.deleteUserOne(username);
    } catch (error) {
      throw error;
    }
  }

  private async getUserOneByUsername(username: string): Promise<UserEntity> {
    return await this.dataSource
      .createQueryBuilder()
      .select('id')
      .addSelect('name')
      .addSelect('student_id')
      .from(UserEntity, 'User')
      .where(`User.username =:username`, { username })
      .getRawOne();
  }

  private async updateUser(dto: object, studentId: string) {
    await this.dataSource
      .createQueryBuilder()
      .update(UserEntity)
      .set(dto)
      .where(`student_id =:studentId`, { studentId })
      .execute();
  }

  private async getUserOneById(userId: number): Promise<UserEntity> {
    return await this.dataSource
      .createQueryBuilder()
      .select()
      .from(UserEntity, 'User')
      .where(`User.id =:userId`, { userId })
      .getRawOne();
  }

  private async deleteUserOne(username: string) {
    await this.dataSource
      .createQueryBuilder()
      .delete()
      .from(UserEntity)
      .where(`username =:username`, { username })
      .execute();
  }
}
