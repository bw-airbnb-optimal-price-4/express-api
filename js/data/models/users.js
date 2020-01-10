"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dbConfig_1 = require("../dbConfig");
var basicModelTemplate_1 = require("./basicModelTemplate");
var utils_1 = require("../../utils");
var tableName = 'users';
var model = basicModelTemplate_1.basicModelTemplate({
    tableName: tableName,
    preprocessData: (function (data) { return utils_1.convertObjectCamelToSnake({ obj: data }); }),
    processResult: (function (result) { return utils_1.convertObjectSnakeToCamel({ obj: result }); }),
});
var getByEmail = function (_a) {
    var email = _a.email;
    return (dbConfig_1.default(tableName)
        .where({ email: email })
        .first()
        .then(function (result) { return ((result)
        ? {
            id: result.id,
            email: result.email,
            password: result.password,
        }
        : undefined); }));
};
exports.default = {
    get: model.get,
    insert: model.insert,
    update: model.update,
    getByEmail: getByEmail,
};
