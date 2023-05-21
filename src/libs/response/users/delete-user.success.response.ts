import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

@ApiExtraModels()
export class DeleteUserSuccessResponse {
  @ApiProperty({
    type: 'number',
    description: 'http status code입니다.',
    example: 200,
  })
  statusCode: number;

  @ApiProperty({
    type: 'string',
    description: 'http status message입니다.',
    example: '성공적으로 삭제됐습니다.',
  })
  message: string;

  @ApiProperty({
    type: 'number',
    description: 'user의 id입니다.',
    example: '1',
  })
  id: number;

  @ApiProperty({
    type: 'string',
    description: 'user의 username입니다.',
    example: 'marsboy',
  })
  username: string;

  constructor(
    statusCode: number,
    message: string,
    id: number,
    username: string,
  ) {
    this.statusCode = statusCode;
    this.message = message;
    this.id = id;
    this.username = username;
  }
}
