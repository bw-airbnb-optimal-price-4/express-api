"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
exports.validateCredentials = function (req, res, next) {
    var _a = req.body, email = _a.email, password = _a.password, firstName = _a.firstName, lastName = _a.lastName, city = _a.city, state = _a.state, dateOfBirth = _a.dateOfBirth;
    req.credentials = utils_1.filterOutUndefinedMembers({ obj: {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            city: city,
            state: state,
            dateOfBirth: dateOfBirth,
        } });
    return ((email === undefined
        || password === undefined)
        ? res.status(400).json({ message: 'must provide email and password' })
        : next());
};
exports.default = {};
