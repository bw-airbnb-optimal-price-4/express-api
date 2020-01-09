"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Jwt = require("jsonwebtoken");
exports.verifyLoggedIn = function (req, res, next) {
    var token = req.headers.token;
    return ((token === undefined || typeof token !== 'string')
        ? res.status(401).json({ message: 'token not valid' })
        : Jwt.verify(token, process.env.JWT_SECRET, function (err, decodedToken) {
            if (err) {
                return res.status(401).json({ message: 'token not valid' });
            }
            req.user = { username: decodedToken.username };
            return next();
        }));
};
exports.default = {};
