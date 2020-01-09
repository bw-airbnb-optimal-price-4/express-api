"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeInMs = function (_a) {
    var _b = _a.milliseconds, milliseconds = _b === void 0 ? 0 : _b, _c = _a.seconds, seconds = _c === void 0 ? 0 : _c, _d = _a.minutes, minutes = _d === void 0 ? 0 : _d, _e = _a.hours, hours = _e === void 0 ? 0 : _e, _f = _a.days, days = _f === void 0 ? 0 : _f, _g = _a.weeks, weeks = _g === void 0 ? 0 : _g, _h = _a.months, months = _h === void 0 ? 0 : _h, _j = _a.years, years = _j === void 0 ? 0 : _j;
    return (milliseconds
        + seconds * 1000
        + minutes * 60000
        + hours * 3600000
        + days * 86400000
        + weeks * 604800000
        + months * 2629746000
        + years * 31556952000);
};
exports.default = {};
