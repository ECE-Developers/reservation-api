import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class ReadAuthRequest {
  @ApiProperty({
    example: 'marsboy',
    description: 'auth의 id를 입력합니다.',
    required: true,
  })
  @Expose()
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty({
    example: 'iamfrommars',
    description: 'auth의 password를 입력합니다.',
    required: true,
  })
  @Expose()
  @IsNotEmpty()
  @IsString()
  password: string;
}
