import { Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CreatedSuccess } from '../../libs/response/status-code/created.success';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @ApiCreatedResponse({
    status: 201,
    description: 'jwt 토큰이 발급되었습니다.',
    type: CreatedSuccess,
  })
  async login(@Req() request) {
    console.log(request.body);
    return this.authService.login(request.body);
  }
}
