"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Knex = require("knex");
var Config = require("../../knexfile");
exports.default = Knex(Config.development);
