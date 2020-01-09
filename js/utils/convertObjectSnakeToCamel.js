"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var snakeCaseToCamelCase_1 = require("./snakeCaseToCamelCase");
exports.convertObjectSnakeToCamel = function (_a) {
    var obj = _a.obj;
    return Object
        .keys(obj).reduce(function (acc, key) {
        acc[snakeCaseToCamelCase_1.snakeCaseToCamelCase({ string: key })] = obj[key];
        return acc;
    }, {});
};
exports.default = {};
