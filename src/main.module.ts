import { AppModule } from './app/app.module';
import { CacheModule, Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { ConfigModule } from '@nestjs/config';
import * as redisStore from 'cache-manager-ioredis';
import * as process from 'process';

@Module({
  imports: [
    AppModule,
    InfrastructureModule,
    ConfigModule.forRoot(),
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
    }),
  ],
})
export class MainModule {}
