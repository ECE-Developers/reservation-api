import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';

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

  @Column({ type: 'timestamptz', default: new Date() })
  createdAt: Date;

  @Column({ type: 'timestamptz', nullable: true })
  deletedAt: Date;
}
