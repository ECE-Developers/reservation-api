import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreatedSuccess } from '../../libs/response/status-code/created.success';
import { OkSuccess } from '../../libs/response/status-code/ok.success';
import { UpdateUserRequest } from '../../libs/request/update-user.request';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'user의 정보를 반환합니다.',
  })
  @ApiOperation({ summary: 'user의 정보를 조회합니다.' })
  getUserOne(@Param() id: number) {
    return this.userService.getUserOne(id);
  }

  @Post(':id')
  @ApiResponse({
    status: 201,
    description: 'user가 생성되었습니다.',
    type: CreatedSuccess,
  })
  @ApiOperation({ summary: 'user의 정보를 생성합니다.' })
  createUser(@Param() id: number) {
    return this.userService.createUser(id);
  }

  @Patch()
  @ApiResponse({
    status: 200,
    description: 'user의 정보가 성공적으로 변경됐습니다.',
    type: OkSuccess,
  })
  @ApiOperation({ summary: 'user의 정보를 변경합니다.' })
  updateUser(@Body() body: UpdateUserRequest) {
    return this.userService.updateUser(body);
  }
}
