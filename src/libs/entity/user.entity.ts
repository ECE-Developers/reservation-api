import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ReservationEntity } from './reservation.entity';
import * as moment from 'moment/moment';
import { CreateUserRequest } from '../request/users/create-user.request';
import * as argon2 from 'argon2';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: false, unique: true })
  username!: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  password!: string;

  @Column({ type: 'varchar', length: 10, nullable: false, unique: true })
  studentId!: string;

  @Column({ type: 'varchar', length: 20, nullable: false })
  name!: string;

  @Column({ type: 'varchar', length: 30, nullable: true })
  email!: string;

  @Column({ type: 'varchar', length: 20, nullable: true, default: 'user' })
  type!: string;

  @Column({ type: 'varchar', default: moment().format('YYYY-MM-DD') })
  createdAt!: string;

  @Column({ type: 'varchar', default: moment().format('YYYY-MM-DD') })
  updatedAt!: string;

  @OneToMany((type) => ReservationEntity, (reservation) => reservation.user)
  Reservations: ReservationEntity[];

  async makeUserEntity(dto: CreateUserRequest): Promise<UserEntity> {
    const user = new UserEntity();
    user.username = dto.username;
    user.password = await argon2.hash(dto.password);
    user.name = dto.name;
    user.studentId = dto.student_id;
    return user;
  }
}
