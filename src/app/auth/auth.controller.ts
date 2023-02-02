import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CreatedSuccess } from '../../libs/response/status-code/created.success';
import { JwtAuthGuard } from './jwt-auth.guard';
import { OkSuccess } from '../../libs/response/status-code/ok.success';
import { LoginRequest } from '../../libs/request/login.request';
import { UsernameRequest } from '../../libs/request/username.request';
import { InternalServerErrorError } from '../../libs/response/status-code/internal-server-error.error';
import { NotFoundError } from '../../libs/response/status-code/not-found.error';
import { BadRequestError } from '../../libs/response/status-code/bad-request.error';

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

  @Get(':username')
  @ApiOkResponse({
    status: 200,
    description: '존재하는 username인 경우',
    type: OkSuccess,
  })
  @ApiBadRequestResponse({
    status: 400,
    description: '클라이언트의 데이터 전송 타입이 잘못된 경우',
    type: BadRequestError,
  })
  @ApiNotFoundResponse({
    status: 404,
    description: '존재하지 않는 username인 경우',
    type: NotFoundError,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: '서버에 에러가 발생했을 경우',
    type: InternalServerErrorError,
  })
  @ApiOperation({ summary: 'username의 중복을 확인합니다.' })
  checkUsername(@Param() param: UsernameRequest) {
    return this.authService.checkUsername(param);
  }
}
