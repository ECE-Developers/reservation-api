import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Expose } from 'class-transformer';

export class CreateReservationRequest {
  @ApiProperty({
    example: '1',
    description: 'user의 id를 입력합니다.',
    required: true,
  })
  @Expose()
  @IsNotEmpty()
  id: number;

  @ApiProperty({
    example: '[8,9,10,11,17,18]',
    description: 'reservation의 times를 배열로 입력합니다.',
    required: true,
  })
  @Expose()
  @IsNotEmpty()
  times: number[];
}
