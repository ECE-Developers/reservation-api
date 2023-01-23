import { Column, Entity, ManyToOne } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('reservation')
export class ReservationEntity {
  @ManyToOne(() => UserEntity)
  student_id: UserEntity;

  @Column()
  times: number[];

  @Column({ type: 'timestamptz', nullable: false })
  createdAt: Date;
}
