import { UserService } from './user.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Patch, Post } from '@nestjs/common';
import { OkSuccess } from '../../libs/response/status-code/ok.success';
import { CreatedSuccess } from '../../libs/response/status-code/created.success';
import { deleteUserRequest } from '../../libs/request/delete-user.request';
import { CreateUserRequest } from '../../libs/request/create-user.request';
import { UpdateUserRequest } from '../../libs/request/update-user.request';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(private readonly authService: UserService) {}
  @Post()
  @ApiResponse({
    status: 201,
    description: '회원 가입에 성공했습니다.',
    type: CreatedSuccess,
  })
  @ApiOperation({ summary: '계정 생성' })
  signUp(@Body() body: CreateUserRequest) {
    return this.authService.signUp(body);
  }

  @Patch()
  @ApiResponse({
    status: 200,
    description: '계정 정보가 성공적으로 변경되었습니다.',
    type: OkSuccess,
  })
  @ApiOperation({ summary: '계정 정보 변경' })
  updateAuth(@Body() body: UpdateUserRequest) {
    return this.authService.updateAuth(body);
  }
  @Delete()
  @ApiResponse({
    status: 200,
    description: '계정 삭제에 성공했습니다.',
    type: OkSuccess,
  })
  @ApiOperation({ summary: '계정 삭제' })
  deleteAuth(@Body() body: deleteUserRequest) {
    return this.authService.deleteAuth(body);
  }
}
