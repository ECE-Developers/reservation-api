import {
  Injectable,
  Logger,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { ReservationRepository } from './reservation.repository';
import { ReservationUserIdRequest } from '../../libs/request/reservations/reservation-user-id.request';
import { CreateReservationRequest } from '../../libs/request/reservations/create-reservation.request';
import { DataSource } from 'typeorm';
import { ReservationEntity } from '../../libs/entity/reservation.entity';
import { UserEntity } from '../../libs/entity/user.entity';
import { ReservationIdRequest } from '../../libs/request/reservations/reservation-id.request';

@Injectable()
export class ReservationService {
  logger = new Logger();

  constructor(
    private readonly reservationRepository: ReservationRepository,
    private readonly dataSource: DataSource,
  ) {}

  getReservations() {
    return this.reservationRepository.getReservations();
  }

  async getReservationMany(dto: ReservationUserIdRequest): Promise<object> {
    try {
      const user = await this.reservationRepository.getUserOne(dto.user_id);
      if (!user) throw new NotFoundException('존재하지 않는 사용자입니다.');
      const reservations = await this.reservationRepository.getReservationMany(
        dto.user_id,
      );
      return {
        user_id: dto.user_id,
        reservations: reservations,
      };
    } catch (error) {
      this.logger.error(error);
      if (error instanceof NotFoundException)
        throw new NotFoundException(error.getResponse());
      throw new InternalServerErrorException(error.getResponse());
    }
  }

  async createReservation(
    dto: CreateReservationRequest,
    param: ReservationUserIdRequest,
  ): Promise<object> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const user = await this.reservationRepository.getUserOne(param.user_id);
      if (!user) throw new NotFoundException('존재하지 않는 사용자입니다.');

      await queryRunner.manager.save(this.makeReservationEntity(dto, user));
      await queryRunner.commitTransaction();

      return { statusCode: 201, message: 'Created' };
    } catch (error) {
      this.logger.error(error);
      await queryRunner.rollbackTransaction();
      if (error instanceof NotFoundException)
        throw new NotFoundException(error.getResponse());
      throw new InternalServerErrorException(error.getResponse());
    } finally {
      await queryRunner.release();
    }
  }

  async deleteReservation(dto: ReservationIdRequest): Promise<object> {
    try {
      const reservation = await this.reservationRepository.getReservationOne(
        dto.reservation_id,
      );
      if (!reservation)
        throw new NotFoundException('존재하지 않는 reservation입니다.');
      await this.reservationRepository.deleteReservation(dto.reservation_id);
      return {
        statusCode: 200,
        message: '해당 reservation이 성공적으로 삭제되었습니다.',
      };
    } catch (error) {
      this.logger.error(error);
      if (error instanceof NotFoundException)
        throw new NotFoundException(error.getResponse());
      throw new InternalServerErrorException(error.getResponse());
    }
  }

  private makeReservationEntity(
    dto: CreateReservationRequest,
    user: UserEntity,
  ): ReservationEntity {
    const reservation = new ReservationEntity();
    reservation.tableName = dto.table_name;
    reservation.times = dto.times;
    reservation.date = dto.date;
    reservation.user = user;
    return reservation;
  }
}
