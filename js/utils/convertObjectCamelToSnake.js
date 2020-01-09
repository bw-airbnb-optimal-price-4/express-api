"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var camelCaseToSnakeCase_1 = require("./camelCaseToSnakeCase");
exports.convertObjectCamelToSnake = function (_a) {
    var obj = _a.obj;
    return Object
        .keys(obj).reduce(function (acc, key) {
        acc[camelCaseToSnakeCase_1.camelCaseToSnakeCase({ string: key })] = obj[key];
        return acc;
    }, {});
};
exports.default = {};
