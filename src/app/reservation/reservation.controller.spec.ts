import { ReservationController } from './reservation.controller';
import { TestingModule, Test } from '@nestjs/testing';
import { ReservationService } from './reservation.service';
import { ReservationRepository } from './reservation.repository';

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

  describe('getReservations', () => {
    it('should return "getReservations"', () => {
      expect(reservationController.getReservations()).toBe('getReservations');
    });
  });

  describe('getReservationOne', () => {
    it('should return "getReservationOne"', () => {
      expect(reservationController.getReservationOne(1)).toBe(
        'getReservationOne',
      );
    });
  });

  describe('createReservation', () => {
    it('should return "createReservation"', () => {
      expect(reservationController.createReservation(1)).toBe(
        'createReservation',
      );
    });
  });

  describe('deleteReservation', () => {
    it('should return "deleteReservation"', () => {
      expect(reservationController.deleteReservation(1)).toBe(
        'deleteReservation',
      );
    });
  });
});
