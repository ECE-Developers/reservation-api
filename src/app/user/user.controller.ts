import { UserService } from './user.service';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
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
  UseGuards,
} from '@nestjs/common';
import { deleteUserRequest } from '../../libs/request/users/delete-user.request';
import { CreateUserRequest } from '../../libs/request/users/create-user.request';
import { UpdateUserRequest } from '../../libs/request/users/update-user.request';
import { BadRequestError } from '../../libs/response/status-code/bad-request.error';
import { InternalServerErrorError } from '../../libs/response/status-code/internal-server-error.error';
import { UnauthorizedError } from '../../libs/response/status-code/unauthorized.error';
import { NotFoundError } from '../../libs/response/status-code/not-found.error';
import { CreateUserSuccessResponse } from '../../libs/response/users/create-user.success.response';
import { UserIdRequest } from '../../libs/request/users/user-id.request';
import { ReadUserSuccessResponse } from '../../libs/response/users/read-user.success.response';
import { UpdateUserSuccessResponse } from '../../libs/response/users/update-user.success.response';
import { DeleteUserSuccessResponse } from '../../libs/response/users/delete-user.success.response';
import { JwtAuthGuard } from '../auth/jwt/jwt-auth.guard';
import { UserEntity } from '../../libs/entity/user.entity';

@Controller('users')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  @ApiOkResponse({
    description: 'user를 성공적으로 조회한 경우',
    type: ReadUserSuccessResponse,
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
  async getUser(@Param() dto: UserIdRequest): Promise<ReadUserSuccessResponse> {
    return await this.userService.getUserOne(dto);
  }
  @Post()
  @ApiCreatedResponse({
    description: '회원 가입에 성공한 경우',
    type: CreateUserSuccessResponse,
  })
  @ApiInternalServerErrorResponse({
    description: '회원 가입에 실패한 경우',
    type: InternalServerErrorError,
  })
  @ApiOperation({ summary: '계정 생성' })
  async signUp(
    @Body() dto: CreateUserRequest,
  ): Promise<CreateUserSuccessResponse> {
    return await this.userService.signUp(dto);
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
  async updateUser(
    @Body() body: UpdateUserRequest,
  ): Promise<UpdateUserSuccessResponse> {
    return await this.userService.updateUser(body);
  }
  @Delete()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access_token')
  @ApiOkResponse({
    description: '계정 삭제에 성공한 경우',
    type: DeleteUserSuccessResponse,
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
  async deleteUser(
    @Body() dto: deleteUserRequest,
  ): Promise<DeleteUserSuccessResponse> {
    return await this.userService.deleteUser(dto);
  }
}
