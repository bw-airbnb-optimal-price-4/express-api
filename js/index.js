"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
var Dotenv = require("dotenv");
var utils_1 = require("./utils");
Dotenv.config();
// eslint-disable-next-line import/first
var server_1 = require("./server");
var PORT = utils_1.normalizePort(process.env.PORT) || 5000;
server_1.default.listen(PORT, function () {
    console.log("Listening on port " + PORT);
});
