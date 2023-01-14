import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

@ApiExtraModels()
export class UnauthorizedError {
  @ApiProperty({
    type: 'number',
    description: 'HTTP error code입니다.',
    example: 401,
  })
  statusCode: number;

  @ApiProperty({
    type: 'string',
    title: '응답 메시지',
    example: 'Bad Request',
    description: 'Bad Request',
  })
  message: string;
}
