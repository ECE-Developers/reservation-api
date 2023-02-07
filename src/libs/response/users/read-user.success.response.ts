import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

@ApiExtraModels()
export class ReadUserSuccessResponse {
  @ApiProperty({
    type: 'number',
    example: 1,
  })
  id: number;

  @ApiProperty({
    type: 'string',
    example: 'marsboy',
  })
  username: string;

  @ApiProperty({
    type: 'string',
    example: 'iamfrommars',
  })
  password: string;

  @ApiProperty({
    type: 'string',
    example: '2021440008',
  })
  student_id: string;

  @ApiProperty({
    type: 'string',
    example: '강형준',
  })
  name: string;

  @ApiProperty({
    type: 'string',
    example: 'null',
  })
  email: string;

  @ApiProperty({
    type: 'string',
    example: 'user',
  })
  type: string;

  @ApiProperty({
    type: 'date',
    example: '2023-02-07T03:28:55.123Z',
  })
  created_at: Date;

  @ApiProperty({
    type: 'date',
    example: 'null',
  })
  updated_at: Date;
}
