import { AuthService } from './auth.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Post } from '@nestjs/common';
import { OkSuccess } from '../../libs/response/status-code/ok.success';
import { CreatedSuccess } from '../../libs/response/status-code/created.success';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: '로그인 성공',
    type: OkSuccess,
  })
  @ApiOperation({ summary: '로그인 합니다.' })
  signIn() {
    return this.authService.signIn();
  }

  @Post()
  @ApiResponse({
    status: 201,
    description: '회원가입 성공',
    type: CreatedSuccess,
  })
  @ApiOperation({ summary: '회원가입 합니다.' })
  signUp() {
    return this.authService.signUp();
  }
}
