import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

@ApiExtraModels()
export class GetReservationsResponse {
  @ApiProperty({
    type: 'json',
    description: 'table_1의 예약 정보입니다.',
    example: {
      first_day: {
        date: '2023-02-02',
        week: 'Thu',
        times: [8, 9],
      },
      second_day: {
        date: '2023-02-03',
        week: 'Sat',
        times: [10, 11],
      },
      third_day: {
        date: '2023-02-04',
        week: 'Sun',
        times: [12, 13],
      },
    },
  })
  table_1: JSON;

  @ApiProperty({
    type: 'json',
    description: 'table_2의 예약 정보입니다.',
    example: {
      first_day: {
        date: '2023-02-02',
        week: 'Thu',
        times: [12, 13],
      },
      second_day: {
        date: '2023-02-03',
        week: 'Sat',
        times: [14, 15],
      },
      third_day: {
        date: '2023-02-04',
        week: 'Sun',
        times: [16, 17],
      },
    },
  })
  table_2: string;
}
