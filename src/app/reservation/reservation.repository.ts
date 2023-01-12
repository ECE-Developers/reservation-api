import { Injectable } from '@nestjs/common';

@Injectable()
export class ReservationRepository {
  getReservations() {
    return 'getReservations';
  }

  getReservationOne(id: number) {
    return 'getReservationOne';
  }

  createReservation(id: number) {
    return 'createReservation';
  }

  deleteReservation(id: number) {
    return 'deleteReservation';
  }
}
