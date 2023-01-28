import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Expose } from 'class-transformer';

export class ReservationIdRequest {
  @ApiProperty({
    example: '1',
    description: 'reservation의 id를 입력합니다.',
    required: true,
  })
  @Expose()
  @IsNotEmpty()
  id: number;
}
