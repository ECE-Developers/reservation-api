import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

@ApiExtraModels()
export class CreateReservationResponse {
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

  @ApiProperty({
    type: 'number',
    description: 'HTTP 상태 코드입니다.',
    example: '201',
  })
  statusCode: number;

  @ApiProperty({
    type: 'string',
    description: '성공 반환 메시지입니다.',
    example: '성공적으로 예약이 접수되었습니다',
  })
  message: string;

  constructor(
    id: number,
    username: string,
    statusCode: number,
    message: string,
  ) {
    this.id = id;
    this.username = username;
    this.statusCode = statusCode;
    this.message = message;
  }
}
