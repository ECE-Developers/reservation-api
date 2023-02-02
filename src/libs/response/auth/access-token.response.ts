import { ApiProperty } from '@nestjs/swagger';

export class AccessTokenResponse {
  @ApiProperty({
    type: 'string',
    description: 'access token 입니다.',
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hcnNib3kiLCJwYXNzd29yZCI6ImlhbWZyb21tYXJzIiwiaWF0IjoxNjc1MzA3OTU1LCJleHAiOjE2NzUzMDgwMTV9.FaJ8LrSdX4h5t89kt2fnZBz8FVNH__DF3a_ciwSGYgM',
  })
  access_token: string;
}
