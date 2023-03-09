import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

@ApiExtraModels()
export class ForbiddenError {
  @ApiProperty({
    type: 'number',
    description: 'HTTP error code입니다.',
    example: 403,
  })
  statusCode: number;

  @ApiProperty({
    type: 'string',
    title: '응답 메시지',
    example: 'Forbidden',
    description: 'Forbidden',
  })
  message: string;
}
