import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('reservation')
export class ReservationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity)
  student_id: UserEntity;

  @Column({ type: 'int', nullable: false })
  table_id: number;

  @Column({ type: 'int', nullable: false })
  times: number;

  @Column({ type: 'varchar', nullable: false })
  image: string;

  @Column({ type: 'timestamptz', nullable: false })
  createdAt: Date;
}
