"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserEntity = void 0;
var typeorm_1 = require("typeorm");
var UserEntity = /** @class */ (function () {
    function UserEntity() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], UserEntity.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: false, unique: true })
    ], UserEntity.prototype, "username");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: false })
    ], UserEntity.prototype, "password");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 10, nullable: false, unique: true })
    ], UserEntity.prototype, "studentId");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: false })
    ], UserEntity.prototype, "name");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 30, nullable: true })
    ], UserEntity.prototype, "email");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: true, "default": 'user' })
    ], UserEntity.prototype, "type");
    __decorate([
        (0, typeorm_1.Column)({ type: 'timestamptz', nullable: false })
    ], UserEntity.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.Column)({ type: 'timestamptz', nullable: false })
    ], UserEntity.prototype, "updatedAt");
    UserEntity = __decorate([
        (0, typeorm_1.Entity)('user')
    ], UserEntity);
    return UserEntity;
}());
exports.UserEntity = UserEntity;
