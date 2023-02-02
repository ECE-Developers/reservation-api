import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

@ApiExtraModels()
export class CreatedSuccess {
  @ApiProperty({
    type: 'number',
    description: 'HTTP Status Code입니다.',
    example: 201,
  })
  statusCode: number;

  @ApiProperty({
    type: 'string',
    title: '응답 메시지',
    example: 'Created',
    description: 'Created',
  })
  message: string;
}
