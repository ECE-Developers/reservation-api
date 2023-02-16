import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Expose } from 'class-transformer';

export class CreateReservationRequest {
  @ApiProperty({
    example: 'Table1',
    description: '어떤 table을 예약할 지 입력합니다.',
    required: true,
  })
  table_name: string;

  @ApiProperty({
    example: '2023-03-02',
    description: 'reservation의 예약 날짜입니다.',
    required: true,
  })
  date: string;

  @ApiProperty({
    example: '[8,9,17,18]',
    description: 'reservation의 times를 배열로 입력합니다.',
    required: true,
  })
  @Expose()
  @IsNotEmpty()
  times: number[];
}
