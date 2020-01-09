"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.snakeCaseToCamelCase = function (_a) {
    var string = _a.string;
    var lastCharWasUnderscore = false;
    return string.split('').reduce(function (acc, char) {
        if (char === '_') {
            lastCharWasUnderscore = true;
            return acc;
        }
        acc.push((lastCharWasUnderscore)
            ? char.toUpperCase()
            : char);
        lastCharWasUnderscore = false;
        return acc;
    }, []).join('');
};
exports.default = {};
