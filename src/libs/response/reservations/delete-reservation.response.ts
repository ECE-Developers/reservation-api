import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

@ApiExtraModels()
export class DeleteReservationResponse {
  @ApiProperty({
    type: 'number',
    description: 'http status code입니다.',
    example: 200,
  })
  statusCode: number;

  @ApiProperty({
    type: 'string',
    description: '서버의 응답입니다.',
    example: '해당 reservation이 성공적으로 삭제되었습니다.',
  })
  message: string;
}
