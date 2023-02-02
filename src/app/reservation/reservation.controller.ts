import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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
import { ReservationService } from './reservation.service';
import { CreatedSuccess } from '../../libs/response/status-code/created.success';
import { ReservationIdRequest } from '../../libs/request/reservation-id.request';
import { CreateReservationRequest } from '../../libs/request/create-reservation.request';
import { GetReservationsResponse } from '../../libs/response/reservations/get-reservations.response';
import { UnauthorizedError } from '../../libs/response/status-code/unauthorized.error';
import { InternalServerErrorError } from '../../libs/response/status-code/internal-server-error.error';
import { BadRequestError } from '../../libs/response/status-code/bad-request.error';
import { NotFoundError } from '../../libs/response/status-code/not-found.error';
import { GetUserReservationsResponse } from '../../libs/response/reservations/get-user-reservations.response';
import { DeleteReservationResponse } from '../../libs/response/reservations/delete-reservation.response';

@Controller('reservations')
@ApiTags('Reservation')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Get()
  @ApiOkResponse({
    description: '모든 reservation입니다.',
    type: GetReservationsResponse,
  })
  @ApiUnauthorizedResponse({
    description: '인증에 실패한 경우',
    type: UnauthorizedError,
  })
  @ApiBadRequestResponse({
    description: '잘못된 클라이언트의 요청인 경우',
    type: BadRequestError,
  })
  @ApiInternalServerErrorResponse({
    description: '서버에 에러가 발생한 경우',
    type: InternalServerErrorError,
  })
  @ApiOperation({ summary: 'reservation을 모두 조회합니다.' })
  getReservations() {
    return this.reservationService.getReservations();
  }

  @Post()
  @ApiCreatedResponse({
    description: 'reservation이 생성되었습니다.',
    type: CreatedSuccess,
  })
  @ApiUnauthorizedResponse({
    description: '인증에 실패한 경우',
    type: UnauthorizedError,
  })
  @ApiBadRequestResponse({
    description: '잘못된 클라이언트의 요청인 경우',
    type: BadRequestError,
  })
  @ApiInternalServerErrorResponse({
    description: '서버에 에러가 발생한 경우',
    type: InternalServerErrorError,
  })
  @ApiOperation({ summary: 'reservation을 생성합니다.' })
  createReservation(@Body() body: CreateReservationRequest) {
    return this.reservationService.createReservation(body);
  }

  @Get(':user_id')
  @ApiOkResponse({
    description: 'user의 id로 조회한 reservation입니다.',
    type: GetUserReservationsResponse,
  })
  @ApiUnauthorizedResponse({
    description: '인증에 실패한 경우',
    type: UnauthorizedError,
  })
  @ApiBadRequestResponse({
    description: '잘못된 클라이언트의 요청인 경우',
    type: BadRequestError,
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
  getReservationOne(@Param() param: ReservationIdRequest) {
    return this.reservationService.getReservationOne(param);
  }

  @Delete(':reservation_id')
  @ApiOkResponse({
    description: 'reservation이 삭제되었습니다.',
    type: DeleteReservationResponse,
  })
  @ApiUnauthorizedResponse({
    description: '인증에 실패한 경우',
    type: UnauthorizedError,
  })
  @ApiBadRequestResponse({
    description: '잘못된 클라이언트의 요청인 경우',
    type: BadRequestError,
  })
  @ApiNotFoundResponse({
    description: '리소스에 대한 조회가 없는 경우',
    type: NotFoundError,
  })
  @ApiInternalServerErrorResponse({
    description: '서버에 에러가 발생한 경우',
    type: InternalServerErrorError,
  })
  @ApiOperation({ summary: 'reservation을 삭제합니다.' })
  deleteReservation(@Param() param: ReservationIdRequest) {
    return this.reservationService.deleteReservation(param);
  }
}
