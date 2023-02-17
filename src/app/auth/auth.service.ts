import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthRepository } from './auth.repository';
import { UsernameRequest } from '../../libs/request/users/username.request';
import { UserEntity } from '../../libs/entity/user.entity';
import { LoginRequest } from '../../libs/request/auth/login.request';
import * as argon2 from 'argon2';
import * as process from 'process';

@Injectable()
export class AuthService {
  logger = new Logger();
  constructor(
    private jwtService: JwtService,
    private authRepository: AuthRepository,
  ) {}

  async login(dto: LoginRequest): Promise<object> {
    try {
      const user = await this.validateUser(dto.username, dto.password);
      const payload = { username: user.username, password: user.password };
      return {
        user_id: user.id,
        access_token: this.jwtService.sign(payload),
      };
    } catch (error) {
      this.logger.error(error);
      if (error instanceof NotFoundException)
        throw new NotFoundException(error.getResponse());
      else if (error instanceof BadRequestException)
        throw new BadRequestException(error.getResponse());
      throw new InternalServerErrorException(error.getResponse());
    }
  }

  async checkUsername(dto: UsernameRequest): Promise<object> {
    try {
      const user = await this.authRepository.getUserByUsername(dto.username);
      if (!user) throw new NotFoundException('존재하지 않는 username입니다.');
      return {
        id: user.id,
        name: user.name,
      };
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
    const user = await this.authRepository.getUserByUsername(username);
    if (!user) throw new NotFoundException('존재하지 않는 username입니다.');
    if (await argon2.verify(user.password, pass)) return user;
    else throw new BadRequestException('password가 일치하지 않습니다.');
  }

  getCookieWithJwtAccessToken(id: number) {
    const payload = { id };
    const token = this.jwtService.sign(payload, {
      secret: process.env.JWT_ACCESS_TOKEN_SECRET,
      expiresIn: `${process.env.JWT_ACCESS_TOKEN_EXPIRATION_TIME}s`,
    });

    return {
      accessToken: token,
      domain: 'localhost',
      path: '/',
      httpOnly: true,
      maxAge: Number(process.env.JWT_ACCESS_TOKEN_EXPIRATION_TIME) * 1000,
    };
  }

  getCookieWithJwtRefreshToken(id: number) {
    const payload = { id };
    const token = this.jwtService.sign(payload, {
      secret: process.env.JWT_REFRESH_TOKEN_SECRET,
      expiresIn: `${process.env.JWT_REFRESH_TOKEN_EXPIRATION_TIME}s`,
    });

    return {
      refreshToken: token,
      domain: 'localhost',
      path: '/',
      httpOnly: true,
      maxAge: Number(process.env.JWT_REFRESH_TOKEN_EXPIRATION_TIME) * 1000,
    };
  }

  getCookiesForLogOut() {
    return {
      accessOption: {
        domain: 'localhost',
        path: '/',
        httpOnly: true,
        maxAge: 0,
      },
      refreshOption: {
        domain: 'localhost',
        path: '/',
        httpOnly: true,
        maxAge: 0,
      },
    };
  }

  async setCurrentRefreshToken(refreshToken: string, id: number) {
    const currentHashedRefreshToken = await argon2.hash(refreshToken);
    await this.authRepository.updateRefreshToken(id, {
      currentHashedRefreshToken,
    });
  }

  async getUserIfRefreshTokenMatches(refreshToken: string, id: number) {
    const user = await this.authRepository.getUserById(id);
    const isRefreshTokenMatching = await argon2.verify(
      refreshToken,
      user.currentHashedRefreshToken,
    );

    if (isRefreshTokenMatching) return user;
  }

  async removeRefreshToken(id: number) {
    return this.authRepository.updateRefreshToken(id, {
      currentHashedRefreshToken: null,
    });
  }
}
