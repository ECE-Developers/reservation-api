import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ReservationService } from './reservation.service';
import { OkSuccess } from '../../libs/response/status-code/ok.success';
import { CreatedSuccess } from '../../libs/response/status-code/created.success';

@Controller('reservation')
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
  getReservations() {
    return this.reservationService.getReservations();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'id로 조회한 reservation입니다.',
    type: OkSuccess,
  })
  @ApiOperation({ summary: 'reservation을 하나 조회합니다.' })
  getReservationOne(@Param() id: number) {
    return this.reservationService.getReservationOne(id);
  }

  @Post(':id')
  @ApiResponse({
    status: 201,
    description: 'reservation이 생성되었습니다.',
    type: CreatedSuccess,
  })
  @ApiOperation({ summary: 'reservation을 생성합니다.' })
  createReservation(@Param() id: number) {
    return this.reservationService.createReservation(id);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'reservation이 삭제되었습니다.',
    type: OkSuccess,
  })
  @ApiOperation({ summary: 'reservation을 삭제합니다.' })
  deleteReservation(@Param() id: number) {
    return this.reservationService.deleteReservation(id);
  }
}
