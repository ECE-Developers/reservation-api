import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

@ApiExtraModels()
export class CreateUserSuccessResponse {
  @ApiProperty({
    type: 'number',
    description: 'user의 id입니다.',
    example: 1,
  })
  id: number;

  @ApiProperty({
    type: 'string',
    description: 'user의 이름입니다.',
    example: '강형준',
  })
  name: string;

  @ApiProperty({
    type: 'string',
    description: 'user의 학번입니다.',
    example: '2021440008',
  })
  student_id: string;

  constructor(id: number, name: string, student_id: string) {
    this.id = id;
    this.name = name;
    this.student_id = student_id;
  }
}
