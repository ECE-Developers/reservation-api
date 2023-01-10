import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class UserRepository {
  constructor() {}

  getUserOne(id: number) {
    return 'getUserOne';
  }

  makeUserOne(id: number) {
    return 'makeUserOne';
  }
}
