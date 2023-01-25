import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class UpdateUserRequest {
  @ApiProperty({
    example: 'marsboy',
    description: 'auth의 username을 입력합니다.',
    required: true,
  })
  @Expose()
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({
    example: 'iamformvenus',
    description: 'auth의 새로운 password를 입력합니다.',
    required: true,
  })
  @Expose()
  @IsNotEmpty()
  @IsString()
  password: string;
}
