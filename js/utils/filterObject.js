"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterObject = function (_a) {
    var sourceObject = _a.sourceObject, filter = _a.filter;
    return Object
        .keys(filter)
        .reduce(function (acc, key) {
        acc[key] = sourceObject[key];
        return acc;
    }, {});
};
exports.default = {};
