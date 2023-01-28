import { Injectable } from '@nestjs/common';
import { ReservationRepository } from './reservation.repository';
import { ReservationIdRequest } from '../../libs/request/reservation-id.request';
import { UserIdRequest } from '../../libs/request/user-id.request';
import { CreateReservationRequest } from '../../libs/request/create-reservation.request';

@Injectable()
export class ReservationService {
  constructor(private readonly reservationRepository: ReservationRepository) {}

  getReservations(param: UserIdRequest) {
    return this.reservationRepository.getReservations(param);
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
