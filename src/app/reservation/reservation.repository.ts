import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { UserEntity } from '../../libs/entity/user.entity';
import { ReservationEntity } from '../../libs/entity/reservation.entity';
import { ReservationRepositoryInterface } from './reservation.repository.interface';

@Injectable()
export class ReservationRepository implements ReservationRepositoryInterface {
  constructor(private readonly dataSource: DataSource) {}
  async getReservations(date: string): Promise<object[]> {
    try {
      return await this.getReservationsByDate(date);
    } catch (error) {
      throw error;
    }
  }

  async deleteReservation(userId: number): Promise<void> {
    try {
      await this.deleteReservationById(userId);
    } catch (error) {
      throw error;
    }
  }

  async getUserOne(userId: number): Promise<UserEntity> {
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

  async getReservationOne(reservationId: number): Promise<ReservationEntity> {
    try {
      return await this.getReservationById(reservationId);
    } catch (error) {
      throw error;
    }
  }

  private async getUserOneByUserId(userId: number): Promise<UserEntity> {
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

  private async getReservationById(
    reservationId: number,
  ): Promise<ReservationEntity> {
    return await this.dataSource
      .createQueryBuilder()
      .select()
      .from(ReservationEntity, 'Reservation')
      .where(`Reservation.id =:ReservationId`, { reservationId })
      .getRawOne();
  }
  private async deleteReservationById(userId: number): Promise<void> {
    await this.dataSource
      .createQueryBuilder()
      .delete()
      .from(ReservationEntity)
      .where('user_id =:userId', { userId })
      .execute();
  }
  private async getReservationsByDate(date: string): Promise<object[]> {
    return await this.dataSource
      .createQueryBuilder()
      .select('id')
      .addSelect('table_name')
      .addSelect('date')
      .addSelect('times')
      .from(ReservationEntity, 'Reservation')
      .where(`Reservation.date =:date`, { date })
      .getRawMany();
  }
}
