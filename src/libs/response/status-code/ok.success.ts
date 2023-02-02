import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

@ApiExtraModels()
export class OkSuccess {
  @ApiProperty({
    type: 'number',
    description: 'HTTP Status Code입니다.',
    example: 200,
  })
  statusCode: number;

  @ApiProperty({
    type: 'string',
    title: '응답 메시지',
    example: 'Ok',
    description: 'Ok',
  })
  message: string;
}
