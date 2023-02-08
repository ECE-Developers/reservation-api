import { Injectable } from '@nestjs/common';
import { ReservationRepository } from './reservation.repository';
import { ReservationIdRequest } from '../../libs/request/reservations/reservation-id.request';
import { CreateReservationRequest } from '../../libs/request/reservations/create-reservation.request';

@Injectable()
export class ReservationService {
  constructor(private readonly reservationRepository: ReservationRepository) {}

  getReservations() {
    return this.reservationRepository.getReservations();
  }

  getReservationOne(param: ReservationIdRequest) {
    return this.reservationRepository.getReservationOne(param);
  }

  createReservation(body: CreateReservationRequest) {
    return this.reservationRepository.createReservation(body);
  }

  deleteReservation(param: ReservationIdRequest) {
    return this.reservationRepository.deleteReservation(param);
  }
}
