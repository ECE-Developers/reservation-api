import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

@ApiExtraModels()
export class CreateUserResponse {
  @ApiProperty({
    type: 'number',
    description: 'user의 id입니다.',
    example: 1,
  })
  id: number;

  @ApiProperty({
    type: 'string',
    description: 'user의 name입니다.',
    example: '강형준',
  })
  name: string;

  @ApiProperty({
    type: 'string',
    description: 'user의 student_id입니다.',
    example: '2021440008',
  })
  student_id: string;
}
