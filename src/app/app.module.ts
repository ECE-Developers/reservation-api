import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ReservationModule } from './reservation/reservation.module';
import { AuthModule } from './auth/auth.module';
import { PictureModule } from './picture/picture.module';

@Module({
  imports: [UserModule, ReservationModule, AuthModule, PictureModule],
})
export class AppModule {}
