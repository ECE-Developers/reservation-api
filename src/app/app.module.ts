import { Module } from '@nestjs/common';
import { ReservationModule } from './reservation/reservation.module';
import { UserModule } from './auth/user.module';
import { ImageModule } from './picture/image.module';

@Module({
  imports: [ReservationModule, UserModule, ImageModule],
})
export class AppModule {}
