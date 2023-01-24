import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('reservation')
export class ReservationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity)
  student_id: UserEntity;

  @Column()
  times: number;

  @Column()
  image: string;

  @Column({ type: 'timestamptz', nullable: false })
  createdAt: Date;
}
