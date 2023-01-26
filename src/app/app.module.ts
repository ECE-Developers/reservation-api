import { Module } from '@nestjs/common';
import { ReservationModule } from './reservation/reservation.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ReservationModule, UserModule],
})
export class AppModule {}
