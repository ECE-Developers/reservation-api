import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

@ApiExtraModels()
export class GetUserReservationsResponse {
  @ApiProperty({
    type: 'number',
    description: 'user의 id입니다.',
    example: 1,
  })
  user_id: number;

  @ApiProperty({
    type: 'json',
    description: 'user의 reservation 목록입니다.',
    example: [
      {
        id: 1,
        date: '2023-02-02',
        table_name: 'Table1',
        times: [8, 9],
      },
      {
        id: 2,
        date: '2023-02-02',
        table_name: 'Table1',
        times: [10, 11],
      },
      {
        id: 3,
        date: '2023-02-02',
        table_name: 'Table1',
        times: [12, 13],
      },
    ],
  })
  reservations: Array<ReservationResponse>;

  constructor(user_id: number, reservations: Array<ReservationResponse>) {
    this.user_id = user_id;
    this.reservations = reservations;
  }
}

export class ReservationResponse {
  id: number;
  date: string;
  table_name: string;
  times: Array<number>;
}
