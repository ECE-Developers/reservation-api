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
}
