import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class UpdateUserRequest {
  @ApiProperty({
    example: '2021440008',
    description: 'user의 새로운 student_id를 입력합니다.',
    required: true,
  })
  @Expose()
  @IsNotEmpty()
  @IsString()
  student_id: string;

  @ApiProperty({
    example: '이강영',
    description: 'user의 새로운 이름을 입력합니다.',
    required: true,
  })
  @Expose()
  @IsNotEmpty()
  @IsString()
  name: string;
}
