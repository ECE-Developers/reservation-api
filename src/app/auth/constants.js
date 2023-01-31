"use strict";
exports.__esModule = true;
exports.jwtConstants = void 0;
var dotenv = require("dotenv");
dotenv.config();
exports.jwtConstants = {
    secret: process.env.JWT_SECRET
};
