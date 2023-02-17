import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ReservationEntity } from './reservation.entity';
import * as moment from 'moment/moment';
import { Exclude } from 'class-transformer';

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

  @Column({ nullable: true })
  @Exclude()
  currentHashedRefreshToken?: string;

  @OneToMany((type) => ReservationEntity, (reservation) => reservation.user)
  Reservations: ReservationEntity[];
}
