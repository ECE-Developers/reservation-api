import * as dotenv from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

dotenv.config();

export const dataSourceConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST || '127.0.0.1',
  port: parseInt(process.env.POSTGRES_PORT) || 5432,
  database: process.env.POSTGRES_DB || 'reservation',
  username: process.env.POSTGRES_USER || 'reservation',
  password: process.env.POSTGRES_PASSWORD || 'reservation',
  entities: ['dist/libs/entity/*.entity{.js,.ts}'],
  migrations: ['dist/migrations/**/*{.js,.ts}'],
  namingStrategy: new SnakeNamingStrategy(),
  synchronize: false,
  migrationsRun: true,
};

export const dataSource = new DataSource(dataSourceConfig);
