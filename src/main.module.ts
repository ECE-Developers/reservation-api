import { AppModule } from './app/app.module';
import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure/infrastructure.module';

@Module({
  imports: [AppModule, InfrastructureModule],
})
export class MainModule {}
