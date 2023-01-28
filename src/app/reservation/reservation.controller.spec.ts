import { ReservationController } from './reservation.controller';
import { TestingModule, Test } from '@nestjs/testing';
import { ReservationService } from './reservation.service';
import { ReservationRepository } from './reservation.repository';
import { UserIdRequest } from '../../libs/request/user-id.request';
import { ReservationIdRequest } from '../../libs/request/reservation-id.request';
import { CreateReservationRequest } from '../../libs/request/create-reservation.request';

describe('ReservationController', () => {
  let reservationController: ReservationController;

  beforeEach(async () => {
    const reservation: TestingModule = await Test.createTestingModule({
      controllers: [ReservationController],
      providers: [ReservationService, ReservationRepository],
    }).compile();

    reservationController = reservation.get<ReservationController>(
      ReservationController,
    );
  });
  const userId = new UserIdRequest();

  describe('getReservations', () => {
    it('should return "getReservations"', () => {
      expect(reservationController.getReservations(userId)).toBe(
        'getReservations',
      );
    });
  });

  const reservationId = new ReservationIdRequest();

  describe('getReservationOne', () => {
    it('should return "getReservationOne"', () => {
      expect(reservationController.getReservationOne(reservationId)).toBe(
        'getReservationOne',
      );
    });
  });

  const reservationBody = new CreateReservationRequest();

  describe('createReservation', () => {
    it('should return "createReservation"', () => {
      expect(reservationController.createReservation(reservationBody)).toBe(
        'createReservation',
      );
    });
  });

  describe('deleteReservation', () => {
    it('should return "deleteReservation"', () => {
      expect(reservationController.deleteReservation(reservationId)).toBe(
        'deleteReservation',
      );
    });
  });
});
