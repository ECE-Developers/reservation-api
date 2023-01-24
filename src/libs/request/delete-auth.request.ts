import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class deleteAuthRequest {
  @ApiProperty({
    example: '2021440008',
    description: 'user의 student id를 입력합니다.',
    required: true,
  })
  @Expose()
  @IsNotEmpty()
  student_id: number;

  @ApiProperty({
    example: '강형준',
    description: 'user의 name을 입력합니다.',
    required: true,
  })
  @Expose()
  @IsNotEmpty()
  @IsString()
  name: string;
}
