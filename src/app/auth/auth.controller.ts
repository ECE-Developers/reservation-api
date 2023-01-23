import { AuthService } from './auth.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { OkSuccess } from '../../libs/response/status-code/ok.success';
import { CreatedSuccess } from '../../libs/response/status-code/created.success';
import { IdRequest } from '../../libs/request/id.request';
import { AuthRequest } from '../../libs/request/auth.request';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: '로그인에 성공했습니다.',
    type: OkSuccess,
  })
  @ApiOperation({ summary: '계정 로그인' })
  signIn(@Body() body: AuthRequest) {
    return this.authService.signIn(body);
  }

  @Post()
  @ApiResponse({
    status: 201,
    description: '회원 가입에 성공했습니다.',
    type: CreatedSuccess,
  })
  @ApiOperation({ summary: '계정 생성' })
  signUp(@Body() body: AuthRequest) {
    return this.authService.signUp(body);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: '계정 삭제에 성공했습니다.',
    type: OkSuccess,
  })
  @ApiOperation({ summary: '계정 삭제' })
  deleteAuth(@Param() param: IdRequest) {
    return this.authService.deleteAuth(param);
  }
}
