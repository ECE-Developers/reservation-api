import { Entity, Generated, PrimaryColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @Generated('increment')
  @PrimaryColumn({
    type: 'bigint',
  })
  id: number;
}
