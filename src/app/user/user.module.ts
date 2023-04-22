import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';

@Module({
  controllers: [UserController],
  providers: [UserService, { useClass: UserRepository, provide: 'impl' }],
  exports: [UserModule, UserService],
})
export class UserModule {}
