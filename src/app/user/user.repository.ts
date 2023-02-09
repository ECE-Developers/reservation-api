import { Injectable, NotFoundException } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { UserEntity } from '../../libs/entity/user.entity';

@Injectable()
export class UserRepository {
  constructor(private readonly dataSource: DataSource) {}

  async getUserOne(userId: number) {
    try {
      return await this.getUserOneById(userId);
    } catch (error) {
      throw error;
    }
  }
  async getUserByUsername(username: string) {
    try {
      return await this.getUserOneByUsername(username);
    } catch (error) {
      throw error;
    }
  }

  async updateUserPassword(dto) {
    try {
      const data = {
        password: dto.new_password,
      };
      return await this.updateUser(data, dto.student_id);
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

  private async getUserOneByUsername(username: string) {
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

  private async getUserOneById(userId: number) {
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
