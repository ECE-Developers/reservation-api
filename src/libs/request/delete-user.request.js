"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.deleteUserRequest = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var deleteUserRequest = /** @class */ (function () {
    function deleteUserRequest() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            example: 'marsboy',
            description: 'user의 username를 입력합니다.',
            required: true
        }),
        (0, class_transformer_1.Expose)(),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)()
    ], deleteUserRequest.prototype, "username");
    return deleteUserRequest;
}());
exports.deleteUserRequest = deleteUserRequest;
