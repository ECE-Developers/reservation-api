import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ReservationModule } from './reservation/reservation.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, ReservationModule, AuthModule],
})
export class AppModule {}
