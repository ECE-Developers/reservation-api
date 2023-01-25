import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

@ApiExtraModels()
export class InternalServerErrorError {
  @ApiProperty({
    type: 'number',
    description: 'HTTP error code입니다.',
    example: 500,
  })
  statusCode: number;

  @ApiProperty({
    type: 'string',
    title: '응답 메시지',
    example: 'Internal Server Error',
    description: 'Internal Server Error',
  })
  message: string;
}
