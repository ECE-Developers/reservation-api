import { Injectable } from '@nestjs/common';
import { ReservationIdRequest } from '../../libs/request/reservations/reservation-id.request';
import { DataSource } from 'typeorm';
import { UserEntity } from '../../libs/entity/user.entity';
import { ReservationEntity } from '../../libs/entity/reservation.entity';

@Injectable()
export class ReservationRepository {
  constructor(private readonly dataSource: DataSource) {}
  getReservations() {
    return 'getReservations';
  }

  async deleteReservation(reservationId: number) {
    try {
      await this.deleteReservationById(reservationId);
    } catch (error) {
      throw error;
    }
  }

  async getUserOne(userId: number) {
    try {
      return await this.getUserOneByUserId(userId);
    } catch (error) {
      throw error;
    }
  }

  async getReservationMany(userId: number): Promise<ReservationEntity[]> {
    try {
      return await this.getReservationManyByUserId(userId);
    } catch (error) {
      throw error;
    }
  }

  private async getUserOneByUserId(userId: number) {
    return await this.dataSource
      .createQueryBuilder()
      .select()
      .from(UserEntity, 'User')
      .where(`User.id =:userId`, { userId })
      .getRawOne();
  }

  private async getReservationManyByUserId(
    userId: number,
  ): Promise<ReservationEntity[]> {
    return await this.dataSource
      .createQueryBuilder()
      .select('id')
      .addSelect('date')
      .addSelect('table_name')
      .addSelect('times')
      .from(ReservationEntity, 'Reservation')
      .where(`Reservation.user =:userId`, { userId })
      .getRawMany();
  }

  private async deleteReservationById(reservationId: number) {
    await this.dataSource
      .createQueryBuilder()
      .delete()
      .from(ReservationEntity)
      .where('id =:reservationId', { reservationId })
      .execute();
  }
}
