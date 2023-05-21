import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';
import { UserEntity } from '../../entity/user.entity';

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

  constructor(user: UserEntity) {
    this.id = user.id;
    this.username = user.username;
    this.name = user.name;
    this.email = user.email;
    this.type = user.type;
  }
}
