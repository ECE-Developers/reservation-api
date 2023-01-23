import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Expose } from 'class-transformer';

export class AuthRequest {
  @ApiProperty({
    example: 'marsboy',
    description: 'auth의 id를 입력합니다.',
    required: true,
  })
  @Expose()
  @IsNotEmpty()
  id: string;

  @ApiProperty({
    example: 'abcdef1234',
    description: 'auth의 password를 입력합니다.',
    required: true,
  })
  @Expose()
  @IsNotEmpty()
  password: string;
}
