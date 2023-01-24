import { AuthService } from './auth.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Post } from '@nestjs/common';
import { OkSuccess } from '../../libs/response/status-code/ok.success';
import { CreatedSuccess } from '../../libs/response/status-code/created.success';
import { deleteAuthRequest } from '../../libs/request/delete-auth.request';
import { CreateAuthRequest } from '../../libs/request/create-auth.request';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post()
  @ApiResponse({
    status: 201,
    description: '회원 가입에 성공했습니다.',
    type: CreatedSuccess,
  })
  @ApiOperation({ summary: '계정 생성' })
  signUp(@Body() body: CreateAuthRequest) {
    return this.authService.signUp(body);
  }

  @Delete()
  @ApiResponse({
    status: 200,
    description: '계정 삭제에 성공했습니다.',
    type: OkSuccess,
  })
  @ApiOperation({ summary: '계정 삭제' })
  deleteAuth(@Body() param: deleteAuthRequest) {
    return this.authService.deleteAuth(param);
  }
}
