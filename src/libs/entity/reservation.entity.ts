import { Entity, Generated, PrimaryColumn } from 'typeorm';

@Entity('reservation')
export class ReservationEntity {
  @Generated('increment')
  @PrimaryColumn({
    type: 'bigint',
  })
  id: number;
}
