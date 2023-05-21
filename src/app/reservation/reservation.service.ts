import {
  Injectable,
  Logger,
  InternalServerErrorException,
  NotFoundException,
  Inject,
} from '@nestjs/common';
import { ReservationUserIdRequest } from '../../libs/request/reservations/reservation-user-id.request';
import { CreateReservationRequest } from '../../libs/request/reservations/create-reservation.request';
import { DataSource } from 'typeorm';
import { ReservationEntity } from '../../libs/entity/reservation.entity';
import { UserEntity } from '../../libs/entity/user.entity';
import * as moment from 'moment';
import { ReservationRepositoryInterface } from './reservation.repository.interface';
import { GetReservationsResponse } from '../../libs/response/reservations/get-reservations.response';
import { CreateReservationResponse } from '../../libs/response/reservations/create-reservation.response';
import { GetUserReservationsResponse } from '../../libs/response/reservations/get-user-reservations.response';
import { DeleteReservationResponse } from '../../libs/response/reservations/delete-reservation.response';

@Injectable()
export class ReservationService {
  logger = new Logger();

  constructor(
    @Inject('impl')
    private readonly reservationRepository: ReservationRepositoryInterface,
    private readonly dataSource: DataSource,
  ) {}

  async getReservations(): Promise<GetReservationsResponse> {
    try {
      const today = await this.reservationRepository.getReservations(
        moment().format('YYYY-MM-DD'),
      );
      const tomorrow = await this.reservationRepository.getReservations(
        moment().add(1, 'days').format('YYYY-MM-DD'),
      );
      const dayAfterTomorrow = await this.reservationRepository.getReservations(
        moment().add(2, 'days').format('YYYY-MM-DD'),
      );
      return {
        today,
        tomorrow,
        dayAfterTomorrow,
      };
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(error.getResponse());
    }
  }

  async getReservationMany(
    dto: ReservationUserIdRequest,
  ): Promise<GetUserReservationsResponse> {
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
  ): Promise<CreateReservationResponse> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const user = await this.reservationRepository.getUserOne(param.user_id);
      if (!user) throw new NotFoundException('존재하지 않는 사용자입니다.');

      await queryRunner.manager.save(this.makeReservationEntity(dto, user));
      await queryRunner.commitTransaction();

      return {
        id: user.id,
        username: user.username,
        statusCode: 201,
        message: '성공적으로 예약이 접수되었습니다',
      };
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

  async deleteReservation(
    dto: ReservationUserIdRequest,
  ): Promise<DeleteReservationResponse> {
    try {
      const user = this.reservationRepository.getUserOne(dto.user_id);
      if (!user) throw new NotFoundException('존재하지 않는 user입니다.');
      await this.reservationRepository.deleteReservation(dto.user_id);
      return {
        statusCode: 200,
        message: '해당 reservation이 성공적으로 삭제되었습니다.',
        id: user.id,
        username: user.username,
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
