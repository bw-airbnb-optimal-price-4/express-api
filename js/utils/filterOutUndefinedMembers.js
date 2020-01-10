"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterOutUndefinedMembers = function (_a) {
    var obj = _a.obj;
    return Object
        .keys(obj)
        .reduce(function (acc, key) {
        if (obj[key])
            acc[key] = obj[key];
        return acc;
    }, {});
};
exports.default = {};
