import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('auth')
export class AuthEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  username!: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  password!: string;

  @Column({ type: 'timestamptz', nullable: false })
  createdAt: Date;
}
