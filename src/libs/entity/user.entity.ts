import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuthEntity } from './auth.entity';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 10, nullable: false })
  student_id!: string;

  @Column({ type: 'varchar', length: 20, nullable: false })
  name!: string;

  @OneToOne(() => AuthEntity)
  @JoinColumn()
  auth: AuthEntity;

  @Column({ type: 'timestamptz', nullable: false })
  createdAt: Date;
}
