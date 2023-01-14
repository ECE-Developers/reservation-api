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
    example: '해당 bottle의 read가 true로 변경되었습니다.',
    description: '200 response입니다.',
  })
  message: string;
}
