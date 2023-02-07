import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class UpdateUserRequest {
  @ApiProperty({
    example: 'marsboy',
    description: 'user의 username을 입력합니다.',
    required: true,
  })
  @Expose()
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({
    example: '강형준',
    description: 'user의 name을 입력합니다.',
    required: true,
  })
  @Expose()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    example: '2021440008',
    description: 'user의 student_id를 입력합니다.',
    required: true,
  })
  @Expose()
  @IsNotEmpty()
  @IsString()
  student_id: string;

  @ApiProperty({
    example: 'iamfromvenus',
    description: 'user의 새로운 password를 입력합니다.',
    required: true,
  })
  @Expose()
  @IsNotEmpty()
  @IsString()
  new_password: string;
}
