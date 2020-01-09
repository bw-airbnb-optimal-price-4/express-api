"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var basicModelTemplate_1 = require("./basicModelTemplate");
var utils_1 = require("../../utils");
var model = basicModelTemplate_1.basicModelTemplate({
    tableName: 'amenities',
    preprocessData: (function (data) { return utils_1.convertObjectCamelToSnake({ obj: data }); }),
    processResult: (function (result) { return utils_1.convertObjectSnakeToCamel({ obj: result }); }),
});
exports.default = {
    get: model.get,
};
