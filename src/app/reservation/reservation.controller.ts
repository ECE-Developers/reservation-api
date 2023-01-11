import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('reservation')
@ApiTags('Reservation')
export class ReservationController {
  constructor(private readonly reservationController: ReservationController) {}
}
