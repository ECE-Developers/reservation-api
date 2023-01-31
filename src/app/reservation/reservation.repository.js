"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ReservationRepository = void 0;
var common_1 = require("@nestjs/common");
var ReservationRepository = /** @class */ (function () {
    function ReservationRepository() {
    }
    ReservationRepository.prototype.getReservations = function (param) {
        return 'getReservations';
    };
    ReservationRepository.prototype.getReservationOne = function (param) {
        return 'getReservationOne';
    };
    ReservationRepository.prototype.createReservation = function (body) {
        return 'createReservation';
    };
    ReservationRepository.prototype.deleteReservation = function (param) {
        return 'deleteReservation';
    };
    ReservationRepository = __decorate([
        (0, common_1.Injectable)()
    ], ReservationRepository);
    return ReservationRepository;
}());
exports.ReservationRepository = ReservationRepository;
