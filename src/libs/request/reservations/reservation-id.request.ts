import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Expose } from 'class-transformer';

export class ReservationIdRequest {
  @ApiProperty({
    example: '1',
    description: 'reservation을 조회할 user의 id를 입력합니다.',
    required: true,
  })
  @Expose()
  @IsNotEmpty()
  user_id: number;
}
