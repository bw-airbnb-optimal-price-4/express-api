"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dbConfig_1 = require("../dbConfig");
var basicModelTemplate_1 = require("./basicModelTemplate");
var model = basicModelTemplate_1.basicModelTemplate({
    tableName: 'user_credentials',
    preprocessData: function (_a) {
        var username = _a.username, hashedPassword = _a.hashedPassword;
        return ({
            username: username,
            hashed_password: hashedPassword,
        });
    },
    processResult: function (_a) {
        var id = _a.id, username = _a.username;
        return ({
            id: id,
            username: username,
        });
    },
});
var getByUsername = function (_a) {
    var username = _a.username;
    return (dbConfig_1.default('user_credentials')
        .where({ username: username })
        .first()
        .then(function (result) { return ((result)
        ? {
            id: result.id,
            username: result.username,
            hashedPassword: result.hashed_password,
        }
        : undefined); }));
};
exports.default = {
    get: model.get,
    insert: model.insert,
    getByUsername: getByUsername,
};
