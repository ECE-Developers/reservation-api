"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UnauthorizedError = void 0;
var swagger_1 = require("@nestjs/swagger");
var UnauthorizedError = /** @class */ (function () {
    function UnauthorizedError() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: 'number',
            description: 'HTTP error code입니다.',
            example: 401
        })
    ], UnauthorizedError.prototype, "statusCode");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: 'string',
            title: '응답 메시지',
            example: '401 Unauthorized',
            description: '401 Unauthorized'
        })
    ], UnauthorizedError.prototype, "message");
    UnauthorizedError = __decorate([
        (0, swagger_1.ApiExtraModels)()
    ], UnauthorizedError);
    return UnauthorizedError;
}());
exports.UnauthorizedError = UnauthorizedError;
