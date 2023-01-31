"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OkSuccess = void 0;
var swagger_1 = require("@nestjs/swagger");
var OkSuccess = /** @class */ (function () {
    function OkSuccess() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: 'number',
            description: 'HTTP Status Code입니다.',
            example: 200
        })
    ], OkSuccess.prototype, "statusCode");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: 'string',
            title: '응답 메시지',
            example: '200 Ok',
            description: '200 Ok'
        })
    ], OkSuccess.prototype, "message");
    OkSuccess = __decorate([
        (0, swagger_1.ApiExtraModels)()
    ], OkSuccess);
    return OkSuccess;
}());
exports.OkSuccess = OkSuccess;
