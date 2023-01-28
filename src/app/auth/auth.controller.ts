import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CreatedSuccess } from '../../libs/response/status-code/created.success';
import { JwtAuthGuard } from './jwt-auth.guard';
import { OkSuccess } from '../../libs/response/status-code/ok.success';
import { LoginRequest } from '../../libs/request/login.request';

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
  @ApiOperation({ summary: 'username과 password를 통해 로그인합니다.' })
  async login(@Body() body: LoginRequest) {
    return this.authService.login(body);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('profile')
  @ApiOkResponse({
    status: 200,
    description: 'jwt 토큰을 반환합니다.',
    type: OkSuccess,
  })
  @ApiOperation({ summary: 'jwt 토큰을 확인합니다.' })
  getProfile(@Req() req) {
    return req.user;
  }
}
