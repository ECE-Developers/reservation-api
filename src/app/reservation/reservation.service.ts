import { Injectable } from '@nestjs/common';
import { ReservationRepository } from './reservation.repository';

@Injectable()
export class ReservationService {
  constructor(private readonly reservationRepository: ReservationRepository) {}

  getReservations() {
    return this.reservationRepository.getReservations();
  }

  getReservationOne(id: number) {
    return this.reservationRepository.getReservationOne(id);
  }

  createReservation(id: number) {
    return this.reservationRepository.createReservation(id);
  }

  deleteReservation(id: number) {
    return this.reservationRepository.deleteReservation(id);
  }
}
