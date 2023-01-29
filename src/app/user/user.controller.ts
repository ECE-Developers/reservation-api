import { UserService } from './user.service';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Body, Controller, Delete, Patch, Post } from '@nestjs/common';
import { OkSuccess } from '../../libs/response/status-code/ok.success';
import { CreatedSuccess } from '../../libs/response/status-code/created.success';
import { deleteUserRequest } from '../../libs/request/delete-user.request';
import { CreateUserRequest } from '../../libs/request/create-user.request';
import { UpdateUserRequest } from '../../libs/request/update-user.request';
import { BadRequestError } from '../../libs/response/status-code/bad-request.error';
import { InternalServerErrorError } from '../../libs/response/status-code/internal-server-error.error';

@Controller('users')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  @ApiCreatedResponse({
    status: 201,
    description: '회원 가입에 성공했습니다.',
    type: CreatedSuccess,
  })
  @ApiBadRequestResponse({
    status: 400,
    description: '클라이언트에서 잘못된 요청을 보냈습니다.',
    type: BadRequestError,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: '서버 에러가 발생했습니다.',
    type: InternalServerErrorError,
  })
  @ApiOperation({ summary: '계정 생성' })
  signUp(@Body() body: CreateUserRequest) {
    return this.userService.signUp(body);
  }

  @Patch()
  @ApiOkResponse({
    status: 200,
    description: '계정 정보가 성공적으로 변경되었습니다.',
    type: OkSuccess,
  })
  @ApiBadRequestResponse({
    status: 400,
    description: '클라이언트에서 잘못된 요청을 보냈습니다.',
    type: BadRequestError,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: '서버 에러가 발생했습니다.',
    type: InternalServerErrorError,
  })
  @ApiOperation({ summary: '계정 정보 변경' })
  updateAuth(@Body() body: UpdateUserRequest) {
    return this.userService.updateAuth(body);
  }
  @Delete()
  @ApiOkResponse({
    status: 200,
    description: '계정 삭제에 성공했습니다.',
    type: OkSuccess,
  })
  @ApiBadRequestResponse({
    status: 400,
    description: '클라이언트에서 잘못된 요청을 보냈습니다.',
    type: BadRequestError,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: '서버 에러가 발생했습니다.',
    type: InternalServerErrorError,
  })
  @ApiOperation({ summary: '계정 삭제' })
  deleteAuth(@Body() body: deleteUserRequest) {
    return this.userService.deleteAuth(body);
  }
}
