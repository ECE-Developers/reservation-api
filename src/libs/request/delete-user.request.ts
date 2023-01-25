import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class deleteUserRequest {
  @ApiProperty({
    example: 'marsboy',
    description: 'auth의 username를 입력합니다.',
    required: true,
  })
  @Expose()
  @IsNotEmpty()
  @IsString()
  username: string;
}
