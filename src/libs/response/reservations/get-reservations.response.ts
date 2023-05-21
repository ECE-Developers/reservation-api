import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

@ApiExtraModels()
export class GetReservationsResponse {
  @ApiProperty({
    type: 'array',
    description: '오늘의 예약 정보입니다.',
    example: [
      {
        id: 1,
        table_name: 'Table1',
        times: [8, 9, 17, 18],
        date: '2023-02-12',
      },
      {
        id: 2,
        table_name: 'Table2',
        times: [8, 9, 17, 18],
        date: '2023-02-12',
      },
    ],
  })
  today: Array<DateResponse>;

  @ApiProperty({
    type: 'array',
    description: '내일의 예약 정보입니다.',
    example: [
      {
        id: 3,
        table_name: 'Table1',
        times: [8, 9, 17, 18],
        date: '2023-02-12',
      },
    ],
  })
  tomorrow: Array<DateResponse>;

  @ApiProperty({
    type: 'array',
    description: '내일 모래의 예약 정보입니다.',
    example: [
      {
        id: 4,
        table_name: 'Table1',
        times: [8, 9, 17, 18],
        date: '2023-02-12',
      },
    ],
  })
  dayAfterTomorrow: Array<DateResponse>;
}

export class DateResponse {
  id: number;
  table_name: string;
  times: Array<number>;
}
