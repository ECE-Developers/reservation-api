import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ReservationService } from './reservation.service';
import { OkSuccess } from '../../libs/response/status-code/ok.success';
import { CreatedSuccess } from '../../libs/response/status-code/created.success';
import { UserIdRequest } from '../../libs/request/user-id.request';
import { ReservationIdRequest } from '../../libs/request/reservation-id.request';
import { CreateReservationRequest } from '../../libs/request/create-reservation.request';

@Controller('reservations')
@ApiTags('Reservation')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: '모든 reservation입니다.',
    type: OkSuccess,
  })
  @ApiOperation({ summary: 'reservation을 모두 조회합니다.' })
  getReservations(@Param() param: UserIdRequest) {
    return this.reservationService.getReservations(param);
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'id로 조회한 reservation입니다.',
    type: OkSuccess,
  })
  @ApiOperation({ summary: 'reservation을 하나 조회합니다.' })
  getReservationOne(@Param() param: ReservationIdRequest) {
    return this.reservationService.getReservationOne(param);
  }

  @Post(':id')
  @ApiResponse({
    status: 201,
    description: 'reservation이 생성되었습니다.',
    type: CreatedSuccess,
  })
  @ApiOperation({ summary: 'reservation을 생성합니다.' })
  createReservation(@Body() body: CreateReservationRequest) {
    return this.reservationService.createReservation(body);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'reservation이 삭제되었습니다.',
    type: OkSuccess,
  })
  @ApiOperation({ summary: 'reservation을 삭제합니다.' })
  deleteReservation(@Param() param: ReservationIdRequest) {
    return this.reservationService.deleteReservation(param);
  }
}
