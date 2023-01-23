import { Column, Entity, Generated, PrimaryColumn } from 'typeorm';

@Entity('auth')
export class AuthEntity {
  @Generated('increment')
  @PrimaryColumn({
    type: 'bigint',
  })
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  username!: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  password!: string;

  @Column({ type: 'timestamptz', nullable: false })
  createdAt: Date;
}
