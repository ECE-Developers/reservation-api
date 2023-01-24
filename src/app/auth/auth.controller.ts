import { AuthService } from './auth.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Patch, Post } from '@nestjs/common';
import { OkSuccess } from '../../libs/response/status-code/ok.success';
import { CreatedSuccess } from '../../libs/response/status-code/created.success';
import { deleteAuthRequest } from '../../libs/request/delete-auth.request';
import { CreateAuthRequest } from '../../libs/request/create-auth.request';
import { UpdateAuthRequest } from '../../libs/request/update-auth.request';

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

  @Patch()
  @ApiResponse({
    status: 200,
    description: '계정 정보가 성공적으로 변경되었습니다.',
    type: OkSuccess,
  })
  @ApiOperation({ summary: '계정 정보 변경' })
  updateAuth(@Body() body: UpdateAuthRequest) {
    return this.authService.updateAuth(body);
  }
  @Delete()
  @ApiResponse({
    status: 200,
    description: '계정 삭제에 성공했습니다.',
    type: OkSuccess,
  })
  @ApiOperation({ summary: '계정 삭제' })
  deleteAuth(@Body() body: deleteAuthRequest) {
    return this.authService.deleteAuth(body);
  }
}
