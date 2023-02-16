import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { ReservationService } from './reservation.service';
import { CreatedSuccess } from '../../libs/response/status-code/created.success';
import { CreateReservationRequest } from '../../libs/request/reservations/create-reservation.request';
import { GetReservationsResponse } from '../../libs/response/reservations/get-reservations.response';
import { UnauthorizedError } from '../../libs/response/status-code/unauthorized.error';
import { InternalServerErrorError } from '../../libs/response/status-code/internal-server-error.error';
import { NotFoundError } from '../../libs/response/status-code/not-found.error';
import { GetUserReservationsResponse } from '../../libs/response/reservations/get-user-reservations.response';
import { DeleteReservationResponse } from '../../libs/response/reservations/delete-reservation.response';
import { ReservationUserIdRequest } from '../../libs/request/reservations/reservation-user-id.request';
import { JwtAuthGuard } from '../auth/jwt/jwt-auth.guard';

@Controller('reservations')
@ApiTags('Reservation')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access_token')
  @ApiOkResponse({
    description: '오늘, 내일, 내일 모래의 모든 reservation입니다.',
    type: GetReservationsResponse,
  })
  @ApiUnauthorizedResponse({
    description: '인증에 실패한 경우',
    type: UnauthorizedError,
  })
  @ApiInternalServerErrorResponse({
    description: '서버에 에러가 발생한 경우',
    type: InternalServerErrorError,
  })
  @ApiOperation({ summary: 'reservation을 모두 조회합니다.' })
  getReservations(): object {
    return this.reservationService.getReservations();
  }

  @Post(':user_id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access_token')
  @ApiCreatedResponse({
    description: 'reservation이 생성되었습니다.',
    type: CreatedSuccess,
  })
  @ApiUnauthorizedResponse({
    description: '인증에 실패한 경우',
    type: UnauthorizedError,
  })
  @ApiInternalServerErrorResponse({
    description: '서버에 에러가 발생한 경우',
    type: InternalServerErrorError,
  })
  @ApiOperation({ summary: 'reservation을 생성합니다.' })
  createReservation(
    @Body() body: CreateReservationRequest,
    @Param() param: ReservationUserIdRequest,
  ): object {
    return this.reservationService.createReservation(body, param);
  }

  @Get(':user_id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access_token')
  @ApiOkResponse({
    description: 'user의 id로 조회한 reservation입니다.',
    type: GetUserReservationsResponse,
  })
  @ApiUnauthorizedResponse({
    description: '인증에 실패한 경우',
    type: UnauthorizedError,
  })
  @ApiNotFoundResponse({
    description: '리소스에 대한 조회가 없는 경우',
    type: NotFoundError,
  })
  @ApiInternalServerErrorResponse({
    description: '서버에 에러가 발생한 경우',
    type: InternalServerErrorError,
  })
  @ApiOperation({ summary: 'reservation을 하나 조회합니다.' })
  getReservationOne(@Param() dto: ReservationUserIdRequest): object {
    return this.reservationService.getReservationMany(dto);
  }

  @Delete(':user_id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access_token')
  @ApiOkResponse({
    description: 'reservation이 삭제되었습니다.',
    type: DeleteReservationResponse,
  })
  @ApiUnauthorizedResponse({
    description: '인증에 실패한 경우',
    type: UnauthorizedError,
  })
  @ApiNotFoundResponse({
    description: '리소스에 대한 조회가 없는 경우',
    type: NotFoundError,
  })
  @ApiInternalServerErrorResponse({
    description: '서버에 에러가 발생한 경우',
    type: InternalServerErrorError,
  })
  @ApiOperation({ summary: 'reservation을 모두 삭제합니다.' })
  deleteReservation(@Param() param: ReservationUserIdRequest): object {
    return this.reservationService.deleteReservation(param);
  }
}
