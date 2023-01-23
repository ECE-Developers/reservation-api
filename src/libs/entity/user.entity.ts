import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { AuthEntity } from './auth.entity';

@Entity('user')
export class UserEntity {
  @OneToOne(() => AuthEntity)
  @JoinColumn()
  id: AuthEntity;

  @Column({ type: 'varchar', length: 10, nullable: false })
  student_id!: string;

  @Column({ type: 'varchar', length: 20, nullable: false })
  name!: string;

  @Column({ type: 'timestamptz', nullable: false })
  createdAt: Date;
}
