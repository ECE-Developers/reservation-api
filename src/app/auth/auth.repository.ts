import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { UserEntity } from '../../libs/entity/user.entity';

@Injectable()
export class AuthRepository {
  constructor(private readonly dataSource: DataSource) {}
  async getUserByUsername(username: string): Promise<UserEntity> {
    try {
      return await this.findOneByUsername(username);
    } catch (error) {
      throw error;
    }
  }

  async getUserById(userId: number) {
    try {
      return await this.findOneById(userId);
    } catch (error) {
      throw error;
    }
  }

  async updateRefreshToken(userId: number, refreshToken: object) {
    try {
      await this.updateRefreshTokenByUserId(userId, refreshToken);
    } catch (error) {
      throw error;
    }
  }

  private async findOneById(userId: number) {
    return await this.dataSource
      .createQueryBuilder()
      .select()
      .from(UserEntity, 'User')
      .where(`User.id =: userId`, { userId })
      .getRawOne();
  }
  private async findOneByUsername(username: string): Promise<UserEntity> {
    return await this.dataSource
      .createQueryBuilder()
      .select()
      .from(UserEntity, 'User')
      .where(`User.username =:username`, { username })
      .getRawOne();
  }

  private async updateRefreshTokenByUserId(
    userId: number,
    refreshToken: object,
  ) {
    await this.dataSource
      .createQueryBuilder()
      .update(UserEntity)
      .set(refreshToken)
      .where(`id =:userId`, { userId })
      .execute();
  }
}
