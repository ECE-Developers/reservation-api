import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsernameRequest } from '../../libs/request/users/username.request';
import { UserEntity } from '../../libs/entity/user.entity';
import { LoginRequest } from '../../libs/request/auth/login.request';
import * as argon2 from 'argon2';
import { AuthRepositoryInterface } from './auth.repository.interface';
import { AccessTokenResponse } from '../../libs/response/auth/access-token.response';
import { CheckUsernameSuccessResponse } from '../../libs/response/auth/check-username.success.response';

@Injectable()
export class AuthService {
  logger = new Logger();
  constructor(
    private jwtService: JwtService,
    @Inject('impl')
    private authRepository: AuthRepositoryInterface,
  ) {}

  async login(dto: LoginRequest): Promise<AccessTokenResponse> {
    try {
      const user = await this.validateUser(dto.username, dto.password);
      const payload = { username: user.username, password: user.password };
      return new AccessTokenResponse(user.id, this.jwtService.sign(payload));
    } catch (error) {
      this.logger.error(error);
      if (error instanceof NotFoundException)
        throw new NotFoundException(error.getResponse());
      else if (error instanceof BadRequestException)
        throw new BadRequestException(error.getResponse());
      throw new InternalServerErrorException(error.getResponse());
    }
  }

  async checkUsername(
    dto: UsernameRequest,
  ): Promise<CheckUsernameSuccessResponse> {
    try {
      const user = await this.authRepository.findOne(dto.username);
      if (!user) throw new NotFoundException('존재하지 않는 username입니다.');
      return new CheckUsernameSuccessResponse(user.id, user.name);
    } catch (error) {
      this.logger.error(error);
      if (error instanceof NotFoundException)
        throw new NotFoundException(error.getResponse());
      throw new InternalServerErrorException(error.getResponse());
    }
  }

  private async validateUser(
    username: string,
    pass: string,
  ): Promise<UserEntity> {
    const user = await this.authRepository.findOne(username);
    if (!user) throw new NotFoundException('존재하지 않는 username입니다.');
    if (await argon2.verify(user.password, pass)) return user;
    else throw new BadRequestException('password가 일치하지 않습니다.');
  }
}
