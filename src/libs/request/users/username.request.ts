import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Expose } from 'class-transformer';

export class UsernameRequest {
  @ApiProperty({
    example: 'marsboy',
    description: 'username을 입력합니다.',
    required: true,
  })
  @Expose()
  @IsNotEmpty()
  username: string;
}
