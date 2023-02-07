import { UserService } from './user.service';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { deleteUserRequest } from '../../libs/request/delete-user.request';
import { CreateUserRequest } from '../../libs/request/create-user.request';
import { UpdateUserRequest } from '../../libs/request/update-user.request';
import { BadRequestError } from '../../libs/response/status-code/bad-request.error';
import { InternalServerErrorError } from '../../libs/response/status-code/internal-server-error.error';
import { UnauthorizedError } from '../../libs/response/status-code/unauthorized.error';
import { NotFoundError } from '../../libs/response/status-code/not-found.error';
import { CreateUserSuccessResponse } from '../../libs/response/users/create-user.success.response';
import { UserIdRequest } from '../../libs/request/user-id.request';
import { ReadUserSuccessResponse } from '../../libs/response/users/read-user.success.response';
import { UpdateUserSuccessResponse } from '../../libs/response/users/update-user.success.response';
import { DeleteUserSuccessResponse } from '../../libs/response/users/delete-user.success.response';

@Controller('users')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  @ApiOkResponse({
    description: 'user를 성공적으로 조회한 경우',
    type: ReadUserSuccessResponse,
  })
  @ApiBadRequestResponse({
    description: '클라이언트에서 잘못된 요청을 보낸 경우',
    type: BadRequestError,
  })
  @ApiUnauthorizedResponse({
    description: '인증이 안된 경우',
    type: UnauthorizedError,
  })
  @ApiNotFoundResponse({
    description: '리소스가 없는 경우',
    type: NotFoundError,
  })
  @ApiInternalServerErrorResponse({
    description: '서버 에러가 발생한 경우',
    type: InternalServerErrorError,
  })
  @ApiOperation({ summary: 'user의 정보를 조회합니다.' })
  getUser(@Param() dto: UserIdRequest) {
    return this.userService.getUserOne(dto);
  }
  @Post()
  @ApiCreatedResponse({
    description: '회원 가입에 성공한 경우',
    type: CreateUserSuccessResponse,
  })
  @ApiBadRequestResponse({
    description: '클라이언트에서 잘못된 요청을 보낸 경우',
    type: BadRequestError,
  })
  @ApiInternalServerErrorResponse({
    description: '서버 에러가 발생한 경우',
    type: InternalServerErrorError,
  })
  @ApiOperation({ summary: '계정 생성' })
  signUp(@Body() dto: CreateUserRequest) {
    return this.userService.signUp(dto);
  }

  @Patch()
  @ApiOkResponse({
    description: 'password가 성공적으로 변경되었습니다.',
    type: UpdateUserSuccessResponse,
  })
  @ApiBadRequestResponse({
    description: '클라이언트에서 잘못된 요청을 보낸 경우',
    type: BadRequestError,
  })
  @ApiUnauthorizedResponse({
    description: '인증이 안된 경우',
    type: UnauthorizedError,
  })
  @ApiNotFoundResponse({
    description: '리소스가 없는 경우',
    type: NotFoundError,
  })
  @ApiInternalServerErrorResponse({
    description: '서버 에러가 발생한 경우',
    type: InternalServerErrorError,
  })
  @ApiOperation({ summary: '계정 비밀번호 변경' })
  updateUser(@Body() body: UpdateUserRequest) {
    return this.userService.updateUser(body);
  }
  @Delete()
  @ApiOkResponse({
    description: '계정 삭제에 성공한 경우',
    type: DeleteUserSuccessResponse,
  })
  @ApiBadRequestResponse({
    description: '클라이언트에서 잘못된 요청을 보낸 경우',
    type: BadRequestError,
  })
  @ApiUnauthorizedResponse({
    description: '인증이 안된 경우',
    type: UnauthorizedError,
  })
  @ApiNotFoundResponse({
    description: '리소스가 없는 경우',
    type: NotFoundError,
  })
  @ApiInternalServerErrorResponse({
    description: '서버 에러가 발생한 경우',
    type: InternalServerErrorError,
  })
  @ApiOperation({ summary: '계정 삭제' })
  deleteUser(@Body() dto: deleteUserRequest) {
    return this.userService.deleteUser(dto);
  }
}
