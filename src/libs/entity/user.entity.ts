import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: false, unique: true })
  username!: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  password!: string;

  @Column({ type: 'varchar', length: 10, nullable: false, unique: true })
  student_id!: string;

  @Column({ type: 'varchar', length: 20, nullable: false })
  name!: string;

  @Column({ type: 'varchar', length: 30, nullable: true })
  email!: string;

  @Column({ type: 'varchar', length: 20, nullable: true, default: 'user' })
  type!: string;

  @Column({ type: 'timestamptz', nullable: false })
  createdAt!: Date;

  @Column({ type: 'timestamptz', nullable: false })
  updatedAt!: Date;
}
