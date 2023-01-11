import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: '유저의 정보를 반환합니다.',
  })
  @ApiOperation({ summary: 'user의 정보를 반환합니다.' })
  getUserOne(@Param() id: number) {
    return this.userService.getUserOne(id);
  }

  @Post()
  @ApiResponse({
    status: 201,
    description: '유저의 정보를 생성합니다.',
  })
  @ApiOperation({ summary: 'user의 정보를 생성합니다.' })
  createUser(@Param() id: number) {
    return this.userService.createUser(id);
  }
}
