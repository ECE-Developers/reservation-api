import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CreateUserRequest } from '../request/create-user.request';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: false, unique: true })
  username!: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  password!: string;

  @Column({ type: 'varchar', length: 10, nullable: false, unique: true })
  studentId!: string;

  @Column({ type: 'varchar', length: 20, nullable: false })
  name!: string;

  @Column({ type: 'varchar', length: 30, nullable: true })
  email!: string;

  @Column({ type: 'varchar', length: 20, nullable: true, default: 'user' })
  type!: string;

  @Column({ type: 'timestamptz', nullable: false })
  createdAt!: Date;

  @Column({ type: 'timestamptz', nullable: false })
  updatedAt!: Date;

  static async createUserEntity(dto: CreateUserRequest): Promise<UserEntity> {
    const userData = new UserEntity();

    userData.username = dto.username;
    userData.password = dto.password;
    userData.name = dto.name;
    userData.studentId = dto.student_id;

    return userData;
  }
}
