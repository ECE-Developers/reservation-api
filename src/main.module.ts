import { AppModule } from './app/app.module';
import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { ConfigModule } from '@nestjs/config';
import { dataSourceConfig } from './data-source';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    AppModule,
    InfrastructureModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(dataSourceConfig),
  ],
})
export class MainModule {}
