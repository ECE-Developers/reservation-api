import { Module } from '@nestjs/common';
import { ReservationModule } from './reservation/reservation.module';
import { UserModule } from './auth/user.module';
import { PictureModule } from './picture/picture.module';

@Module({
  imports: [ReservationModule, UserModule, PictureModule],
})
export class AppModule {}
