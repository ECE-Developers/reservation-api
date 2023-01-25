import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('auth')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  username!: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  password!: string;

  @Column({ type: 'varchar', length: 10, nullable: false })
  student_id!: string;

  @Column({ type: 'varchar', length: 20, nullable: false })
  name!: string;

  @Column({ type: 'timestamptz', nullable: false })
  createdAt: Date;
}
