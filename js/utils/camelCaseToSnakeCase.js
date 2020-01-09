"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.camelCaseToSnakeCase = function (_a) {
    var string = _a.string;
    return string
        .split('')
        .reduce(function (acc, char) {
        if (char === char.toUpperCase())
            acc.push('_');
        acc.push(char.toLowerCase());
        return acc;
    }, []).join('');
};
exports.default = {};
