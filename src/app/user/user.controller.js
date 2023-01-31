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
exports.UserController = void 0;
var swagger_1 = require("@nestjs/swagger");
var common_1 = require("@nestjs/common");
var ok_success_1 = require("../../libs/response/status-code/ok.success");
var created_success_1 = require("../../libs/response/status-code/created.success");
var bad_request_error_1 = require("../../libs/response/status-code/bad-request.error");
var internal_server_error_error_1 = require("../../libs/response/status-code/internal-server-error.error");
var UserController = /** @class */ (function () {
    function UserController(userService) {
        this.userService = userService;
    }
    UserController.prototype.signUp = function (body) {
        return this.userService.signUp(body);
    };
    UserController.prototype.updateAuth = function (body) {
        return this.userService.updateAuth(body);
    };
    UserController.prototype.deleteAuth = function (body) {
        return this.userService.deleteAuth(body);
    };
    __decorate([
        (0, common_1.Post)(),
        (0, swagger_1.ApiCreatedResponse)({
            status: 201,
            description: '회원 가입에 성공했습니다.',
            type: created_success_1.CreatedSuccess
        }),
        (0, swagger_1.ApiBadRequestResponse)({
            status: 400,
            description: '클라이언트에서 잘못된 요청을 보냈습니다.',
            type: bad_request_error_1.BadRequestError
        }),
        (0, swagger_1.ApiInternalServerErrorResponse)({
            status: 500,
            description: '서버 에러가 발생했습니다.',
            type: internal_server_error_error_1.InternalServerErrorError
        }),
        (0, swagger_1.ApiOperation)({ summary: '계정 생성' }),
        __param(0, (0, common_1.Body)())
    ], UserController.prototype, "signUp");
    __decorate([
        (0, common_1.Patch)(),
        (0, swagger_1.ApiOkResponse)({
            status: 200,
            description: '계정 정보가 성공적으로 변경되었습니다.',
            type: ok_success_1.OkSuccess
        }),
        (0, swagger_1.ApiBadRequestResponse)({
            status: 400,
            description: '클라이언트에서 잘못된 요청을 보냈습니다.',
            type: bad_request_error_1.BadRequestError
        }),
        (0, swagger_1.ApiInternalServerErrorResponse)({
            status: 500,
            description: '서버 에러가 발생했습니다.',
            type: internal_server_error_error_1.InternalServerErrorError
        }),
        (0, swagger_1.ApiOperation)({ summary: '계정 정보 변경' }),
        __param(0, (0, common_1.Body)())
    ], UserController.prototype, "updateAuth");
    __decorate([
        (0, common_1.Delete)(),
        (0, swagger_1.ApiOkResponse)({
            status: 200,
            description: '계정 삭제에 성공했습니다.',
            type: ok_success_1.OkSuccess
        }),
        (0, swagger_1.ApiBadRequestResponse)({
            status: 400,
            description: '클라이언트에서 잘못된 요청을 보냈습니다.',
            type: bad_request_error_1.BadRequestError
        }),
        (0, swagger_1.ApiInternalServerErrorResponse)({
            status: 500,
            description: '서버 에러가 발생했습니다.',
            type: internal_server_error_error_1.InternalServerErrorError
        }),
        (0, swagger_1.ApiOperation)({ summary: '계정 삭제' }),
        __param(0, (0, common_1.Body)())
    ], UserController.prototype, "deleteAuth");
    UserController = __decorate([
        (0, common_1.Controller)('users'),
        (0, swagger_1.ApiTags)('User')
    ], UserController);
    return UserController;
}());
exports.UserController = UserController;
