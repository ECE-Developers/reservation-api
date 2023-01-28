import { Injectable } from '@nestjs/common';
import { ReservationIdRequest } from '../../libs/request/reservation-id.request';
import { UserIdRequest } from '../../libs/request/user-id.request';
import { CreateReservationRequest } from '../../libs/request/create-reservation.request';

@Injectable()
export class ReservationRepository {
  getReservations(param: UserIdRequest) {
    return 'getReservations';
  }

  getReservationOne(param: ReservationIdRequest) {
    return 'getReservationOne';
  }

  createReservation(body: CreateReservationRequest) {
    return 'createReservation';
  }

  deleteReservation(param: ReservationIdRequest) {
    return 'deleteReservation';
  }
}
