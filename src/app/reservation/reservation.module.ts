import { Module } from '@nestjs/common';
import { ReservationController } from './reservation.controller';
import { ReservationService } from './reservation.service';
import { ReservationRepository } from './reservation.repository';

@Module({
  controllers: [ReservationController],
  providers: [
    ReservationService,
    { useClass: ReservationRepository, provide: 'impl' },
  ],
})
export class ReservationModule {}
