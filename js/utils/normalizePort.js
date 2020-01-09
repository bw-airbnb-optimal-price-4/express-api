"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizePort = function (value) {
    var port = (typeof value === 'string') ? parseInt(value, 10) : NaN;
    if (Number.isNaN(port))
        return value;
    if (port >= 0)
        return port;
    return false;
};
exports.default = {};
