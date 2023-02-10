import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';
import * as moment from 'moment/moment';

@Entity('reservation')
export class ReservationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => UserEntity, (user) => user.Reservations, {
    onDelete: 'CASCADE',
  })
  user: UserEntity;

  @Column({ type: 'varchar', length: 30, nullable: false })
  tableName: string;

  @Column({ type: 'varchar', length: 15, nullable: false })
  date: string;

  @Column({ type: 'int', array: true, nullable: false })
  times: number[];

  @Column({ type: 'varchar', default: moment().format('YYYY-MM-DD') })
  createdAt: string;

  @Column({ type: 'varchar', nullable: true })
  deletedAt: string;
}
