"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dbConfig_1 = require("../dbConfig");
exports.basicModelTemplate = function (_a) {
    var tableName = _a.tableName, _b = _a.keyColumnName, keyColumnName = _b === void 0 ? 'id' : _b, _c = _a.preprocessData, preprocessData = _c === void 0 ? function (data) { return data; } : _c, _d = _a.processResult, processResult = _d === void 0 ? function (result) { return result; } : _d;
    var get = function (where) {
        if (where === void 0) { where = {}; }
        return (dbConfig_1.default(tableName)
            .where(where)
            .then(function (data) { return (data !== undefined ? data.map(processResult) : undefined); }));
    };
    var insert = function (_a) {
        var item = _a.item;
        return (dbConfig_1.default(tableName)
            .insert(preprocessData(item), keyColumnName)
            .then(function (_a) {
            var _b;
            var id = _a[0];
            return get((_b = {}, _b[keyColumnName] = id, _b));
        }));
    };
    var update = function (_a) {
        var _b;
        var keyValue = _a.keyValue, changes = _a.changes;
        return (dbConfig_1.default(tableName)
            .where((_b = {}, _b[keyColumnName] = keyValue, _b))
            .update(preprocessData(changes))
            .then(function (count) {
            var _a;
            return (count > 0 ? get((_a = {}, _a[keyColumnName] = keyValue, _a)) : null);
        }));
    };
    var remove = function (_a) {
        var id = _a.id;
        return (dbConfig_1.default(tableName)
            .where('id', id)
            .del());
    };
    return {
        get: get,
        insert: insert,
        update: update,
        remove: remove,
    };
};
exports.default = {};
