"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MainModule = void 0;
var app_module_1 = require("./app/app.module");
var common_1 = require("@nestjs/common");
var infrastructure_module_1 = require("./infrastructure/infrastructure.module");
var config_1 = require("@nestjs/config");
var redisStore = require("cache-manager-ioredis");
var process = require("process");
var data_source_1 = require("./data-source");
var typeorm_1 = require("@nestjs/typeorm");
var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        (0, common_1.Module)({
            imports: [
                app_module_1.AppModule,
                infrastructure_module_1.InfrastructureModule,
                config_1.ConfigModule.forRoot({ isGlobal: true, cache: true }),
                common_1.CacheModule.register({
                    isGlobal: true,
                    store: redisStore,
                    host: process.env.REDIS_HOST,
                    port: process.env.REDIS_PORT
                }),
                typeorm_1.TypeOrmModule.forRoot(data_source_1.dataSourceConfig),
            ]
        })
    ], MainModule);
    return MainModule;
}());
exports.MainModule = MainModule;
