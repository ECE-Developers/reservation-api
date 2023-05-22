import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { UserEntity } from '../../libs/entity/user.entity';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    { useClass: UserRepository, provide: 'impl' },
    UserEntity,
  ],
  exports: [UserModule, UserService],
})
export class UserModule {}
