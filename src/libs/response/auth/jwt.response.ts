import { ApiProperty } from '@nestjs/swagger';

export class JwtResponse {
  @ApiProperty({
    type: 'string',
    description: 'username입니다.',
    example: 'marsboy',
  })
  username: string;
}
