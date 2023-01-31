"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ReservationEntity = void 0;
var typeorm_1 = require("typeorm");
var user_entity_1 = require("./user.entity");
var ReservationEntity = /** @class */ (function () {
    function ReservationEntity() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], ReservationEntity.prototype, "id");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return user_entity_1.UserEntity; })
    ], ReservationEntity.prototype, "user");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 30, nullable: false })
    ], ReservationEntity.prototype, "tableName");
    __decorate([
        (0, typeorm_1.Column)({ type: 'int', array: true, nullable: false })
    ], ReservationEntity.prototype, "times");
    __decorate([
        (0, typeorm_1.Column)({ type: 'timestamptz', nullable: false })
    ], ReservationEntity.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.Column)({ type: 'timestamptz', nullable: false })
    ], ReservationEntity.prototype, "deletedAt");
    ReservationEntity = __decorate([
        (0, typeorm_1.Entity)('reservation')
    ], ReservationEntity);
    return ReservationEntity;
}());
exports.ReservationEntity = ReservationEntity;
