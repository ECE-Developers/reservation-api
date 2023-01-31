"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.ReservationController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var ok_success_1 = require("../../libs/response/status-code/ok.success");
var created_success_1 = require("../../libs/response/status-code/created.success");
var ReservationController = /** @class */ (function () {
    function ReservationController(reservationService) {
        this.reservationService = reservationService;
    }
    ReservationController.prototype.getReservations = function (param) {
        return this.reservationService.getReservations(param);
    };
    ReservationController.prototype.getReservationOne = function (param) {
        return this.reservationService.getReservationOne(param);
    };
    ReservationController.prototype.createReservation = function (body) {
        return this.reservationService.createReservation(body);
    };
    ReservationController.prototype.deleteReservation = function (param) {
        return this.reservationService.deleteReservation(param);
    };
    __decorate([
        (0, common_1.Get)(),
        (0, swagger_1.ApiResponse)({
            status: 200,
            description: '모든 reservation입니다.',
            type: ok_success_1.OkSuccess
        }),
        (0, swagger_1.ApiOperation)({ summary: 'reservation을 모두 조회합니다.' }),
        __param(0, (0, common_1.Param)())
    ], ReservationController.prototype, "getReservations");
    __decorate([
        (0, common_1.Get)(':id'),
        (0, swagger_1.ApiResponse)({
            status: 200,
            description: 'id로 조회한 reservation입니다.',
            type: ok_success_1.OkSuccess
        }),
        (0, swagger_1.ApiOperation)({ summary: 'reservation을 하나 조회합니다.' }),
        __param(0, (0, common_1.Param)())
    ], ReservationController.prototype, "getReservationOne");
    __decorate([
        (0, common_1.Post)(':id'),
        (0, swagger_1.ApiResponse)({
            status: 201,
            description: 'reservation이 생성되었습니다.',
            type: created_success_1.CreatedSuccess
        }),
        (0, swagger_1.ApiOperation)({ summary: 'reservation을 생성합니다.' }),
        __param(0, (0, common_1.Body)())
    ], ReservationController.prototype, "createReservation");
    __decorate([
        (0, common_1.Delete)(':id'),
        (0, swagger_1.ApiResponse)({
            status: 200,
            description: 'reservation이 삭제되었습니다.',
            type: ok_success_1.OkSuccess
        }),
        (0, swagger_1.ApiOperation)({ summary: 'reservation을 삭제합니다.' }),
        __param(0, (0, common_1.Param)())
    ], ReservationController.prototype, "deleteReservation");
    ReservationController = __decorate([
        (0, common_1.Controller)('reservations'),
        (0, swagger_1.ApiTags)('Reservation')
    ], ReservationController);
    return ReservationController;
}());
exports.ReservationController = ReservationController;
