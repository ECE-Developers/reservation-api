import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('reservation')
export class ReservationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity)
  studentId: UserEntity;

  @Column({ type: 'varchar', length: 30, nullable: false })
  tableName: string;

  @Column({ type: 'int', array: true, nullable: false })
  times: number[];

  @Column({ type: 'timestamptz', nullable: false })
  createdAt: Date;

  @Column({ type: 'timestamptz', nullable: false })
  deletedAt: Date;
}
