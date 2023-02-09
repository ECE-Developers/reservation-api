import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

@ApiExtraModels()
export class CheckUsernameSuccessResponse {
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
}
