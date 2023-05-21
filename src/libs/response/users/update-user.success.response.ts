import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

@ApiExtraModels()
export class UpdateUserSuccessResponse {
  @ApiProperty({
    type: 'number',
    example: 1,
  })
  id: number;

  @ApiProperty({
    type: 'string',
    example: '강형준',
  })
  name: string;

  @ApiProperty({
    type: 'string',
    example: '2021440008',
  })
  student_id: string;

  @ApiProperty({
    type: 'string',
    example: 'user의 password가 성공적으로 변경됐습니다.',
  })
  message: string;

  constructor(id: number, name: string, student_id: string, message: string) {
    this.id = id;
    this.name = name;
    this.student_id = student_id;
    this.message = message;
  }
}
