"use strict";
exports.__esModule = true;
exports.dataSource = exports.dataSourceConfig = void 0;
var dotenv = require("dotenv");
var typeorm_1 = require("typeorm");
var typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
dotenv.config();
exports.dataSourceConfig = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST || '127.0.0.1',
    port: parseInt(process.env.POSTGRES_PORT) || 5432,
    database: process.env.POSTGRES_DB || 'reservation',
    username: process.env.POSTGRES_USER || 'reservation',
    password: process.env.POSTGRES_PASSWORD || 'reservation',
    entities: ['dist/libs/entity/*.entity{.js,.ts}'],
    migrations: ['dist/migrations/**/*{.js,.ts}'],
    namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
    synchronize: false,
    migrationsRun: true
};
exports.dataSource = new typeorm_1.DataSource(exports.dataSourceConfig);
