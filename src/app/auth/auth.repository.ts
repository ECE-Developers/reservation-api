import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { UserEntity } from '../../libs/entity/user.entity';

@Injectable()
export class AuthRepository {
  constructor(private readonly dataSource: DataSource) {}
  async findOne(username: string): Promise<UserEntity> {
    try {
      return await this.findOneByUsername(username);
    } catch (error) {
      throw error;
    }
  }
  private async findOneByUsername(username: string): Promise<UserEntity> {
    return await this.dataSource
      .createQueryBuilder()
      .select()
      .from(UserEntity, 'User')
      .where(`User.username =:username`, { username })
      .getRawOne();
  }
}
