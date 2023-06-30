import { Module } from '@nestjs/common';
import { ReservationModule } from './reservation/reservation.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ReservationModule, UserModule, AuthModule],
})
export class AppModule {}
