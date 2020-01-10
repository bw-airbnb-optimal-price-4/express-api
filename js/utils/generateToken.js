"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Jwt = require("jsonwebtoken");
exports.generateToken = function (_a) {
    var id = _a.id, username = _a.username;
    var payload = {
        subject: id,
        username: username,
    };
    console.log(process.env.TOKEN_LIFETIME);
    var options = {
        expiresIn: process.env.TOKEN_LIFETIME,
    };
    return Jwt.sign(payload, process.env.JWT_SECRET, options);
};
exports.default = {};
